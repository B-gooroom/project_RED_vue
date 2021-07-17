// import moment from 'moment'
import axios from 'axios'
import _ from 'lodash'
import { moduleMembers } from './moduleMembers'

export const moduleItems = {
  state: {
    items: [],
    item: {
      name: '',
      enter: '',
      expire: ''
    }
  },
  mutations: {
    itemsRead(state, data) {
      const searchItems = []
      for (let key in data.items) {
        const item = data.items[key];
        item.k = key
        if (!data.thisComponent.q || item.name.indexOf(data.thisComponent.q) >= 0) {
          searchItems.push(item)
        }
      }
      const orderName = data.thisComponent.$route.query.orderName
      const orderType = data.thisComponent.$route.query.orderType
      console.log(orderName, orderType)
      data.items = _.orderBy(searchItems, orderName, orderType);
      console.log(data.thisComponent)
      state.items = data.items
    }
  },
  actions: {
    itemsCreate(thisStore, data) {
      if (data.$event.target.checked) {
        const groceryUpdate = {}
        groceryUpdate[data.grocery.k] = {
          name: data.grocery.name,
          enter: data.grocery.enter,
          expire: data.grocery.expire
        },
          axios.patch(`https://tobe-gooroom-default-rtdb.firebaseio.com/${moduleMembers.state.uid}/items.json`, groceryUpdate).then(function (response) {
            console.log('Done itemsCreate', response.data);
          });
      } else {
        const key = data.grocery.k
        axios.delete(`https://tobe-gooroom-default-rtdb.firebaseio.com/${moduleMembers.state.uid}/items/${key}.json`).then(function (response) {
          console.log('Done itemsDelete', response.data);
        });
      }
    },
    itemsRead(thisStore, thisComponent) {
      moduleMembers.state.promise[0] = new Promise(function (resolve, reject) {
        axios.get(`https://tobe-gooroom-default-rtdb.firebaseio.com/${moduleMembers.state.uid}/items.json`).then(function (response) {
          console.log('Done itemsRead', response)
          thisStore.commit('itemsRead', {
            thisComponent: thisComponent,
            items: response.data
          })
          resolve(response.data)
        }).catch(function (error) {
          thisStore.dispatch('axiosError', error)
          reject(error)
        })
      })
    },
    itemsUpdate(thisStore, data) {
      axios.patch(`https://tobe-gooroom-default-rtdb.firebaseio.com/${moduleMembers.state.uid}/items.json`, data.itemUpdate).then(function (response) {
        console.log('Done itemsUpdate', response)
        thisStore.dispatch('itemsRead', data.thisComponent)
        data.thisComponent.modalToggle()
      }).catch(function (error) {
        thisStore.dispatch('axiosError', error)
      })
    },
    itemsDelete(thisStore, data) {
      axios.delete(`https://tobe-gooroom-default-rtdb.firebaseio.com/${moduleMembers.state.uid}/items/${data.index}.json`).then(function (response) {
        console.log('Done itemsDelete', response)
        thisStore.dispatch('itemsRead', data.thisComponent)
      }).catch(function (error) {
        thisStore.dispatch('axiosError', error)
      })
    }
  }
}
