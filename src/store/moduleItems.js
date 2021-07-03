// import moment from 'moment'
import axios from 'axios'
import _ from 'lodash'

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
      for (let key in data.items) {
        const item = data.items[key];
        item.k = key
      }
      const orderName = data.thisComponent.$route.query.orderName
      const orderType = data.thisComponent.$route.query.orderType
      console.log(orderName, orderType)
      data.items = _.orderBy(data.items, orderName, orderType);
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
          axios.patch('https://tobe-gooroom-default-rtdb.firebaseio.com/items.json', groceryUpdate).then(function (response) {
            console.log('Done itemsCreate', response.data);
          });
      } else {
        const key = data.grocery.k
        axios.delete('https://tobe-gooroom-default-rtdb.firebaseio.com/items/' + key + '.json').then(function (response) {
          console.log('Done itemsDelete', response.data);
        });
      }
    },
    itemsRead(thisStore, thisComponent) {
      axios.get('https://tobe-gooroom-default-rtdb.firebaseio.com/items.json').then(function (response) {
        console.log('Done itemsRead', response)
        thisStore.commit('itemsRead', {
          thisComponent: thisComponent,
          items: response.data
        })
      }).catch(function (error) {
        thisStore.dispatch('axiosError', error)
      })
    },
    itemsUpdate(thisStore, data) {
      axios.patch('https://tobe-gooroom-default-rtdb.firebaseio.com/items.json', data.itemUpdate).then(function (response) {
        console.log('Done itemsUpdate', response)
        thisStore.dispatch('itemsRead', data.thisComponent)
      }).catch(function (error) {
        thisStore.dispatch('axiosError', error)
      })
    },
    itemsDelete(thisStore, data) {
      axios.delete('https://tobe-gooroom-default-rtdb.firebaseio.com/items/' + data.index + '.json').then(function (response) {
        console.log('Done itemsDelete', response)
        thisStore.dispatch('itemsRead', data.thisComponent)
      }).catch(function (error) {
        thisStore.dispatch('axiosError', error)
      })
    }
  }
}
