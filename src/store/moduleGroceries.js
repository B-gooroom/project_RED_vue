import moment from 'moment'
import axios from 'axios'
import _ from 'lodash'
import { moduleMembers } from './moduleMembers'

export const moduleGroceries = {
  state: {
    groceries: [],
    grocery: {
      name: '',
      enter: '',
      expire: ''
    }
  },
  mutations: {
    groceriesRead(state, data) {
      for (let key in data.groceries) {
        const grocery = data.groceries[key];
        grocery.k = key
        grocery.checked = false
      }
      const orderName = data.thisComponent.$route.query.orderName
      const orderType = data.thisComponent.$route.query.orderType
      console.log(orderName, orderType)
      data.groceries = _.orderBy(data.groceries, orderName, orderType);
      console.log(data.thisComponent)
      state.groceries = data.groceries
    }
  },
  actions: {
    groceriesCreate(thisStore, thisComponent) {
      thisStore.state.grocery.enter = moment().format('YYYY-MM-DD')
      thisStore.state.grocery.expire = moment().add(14, 'days').format('YYYY-MM-DD')
      axios.post(`https://tobe-gooroom-default-rtdb.firebaseio.com/${moduleMembers.state.uid}/groceries.json`, thisStore.state.grocery).then(function (response) {
        console.log('Done groceriesCreate', response)
        thisStore.dispatch('groceriesRead', thisComponent)
      }).catch(function (error) {
        thisStore.dispatch('axiosError', error)
      })
    },
    groceriesRead(thisStore, thisComponent) {
      moduleMembers.state.promise[1] = new Promise(function (resolve, reject) {
        axios.get(`https://tobe-gooroom-default-rtdb.firebaseio.com/${moduleMembers.state.uid}/groceries.json`).then(function (response) {
          console.log('Done groceriesRead', response)
          thisStore.commit('groceriesRead', {
            thisComponent: thisComponent,
            groceries: response.data
          })
          resolve(response.data)
        }).catch(function (error) {
          thisStore.dispatch('axiosError', error)
          reject(error)
        })
      }),
        Promise.all(moduleMembers.state.promise).then(function (result) {
          for (let g in result[1]) {
            const grocery = result[1][g];
            for (let i in result[0]) {
              const item = result[0][i];
              if (grocery.k === item.k) {
                grocery.checked = true
              }
            }
          }
        }).catch(function (error) {
          console.error(error);
        })
    },
    groceriesUpdate(thisStore, data) {
      axios.patch(`https://tobe-gooroom-default-rtdb.firebaseio.com/${moduleMembers.state.uid}/groceries.json`, data.groceryUpdate).then(function (response) {
        console.log('Done groceriesUpdate', response)
        thisStore.dispatch('groceriesRead', data.thisComponent)
      }).catch(function (error) {
        thisStore.dispatch('axiosError', error)
      })
    },
    groceriesDelete(thisStore, data) {
      axios.delete(`https://tobe-gooroom-default-rtdb.firebaseio.com/${moduleMembers.state.uid}/groceries/${data.index}.json`).then(function (response) {
        console.log('Done groceriesDelete', response)
        thisStore.dispatch('groceriesRead', data.thisComponent)
      }).catch(function (error) {
        thisStore.dispatch('axiosError', error)
      })
    }
  }
}
