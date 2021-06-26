import moment from 'moment'
import axios from 'axios'
import _ from 'lodash'

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
    groceriesCreate(thisStore) {
      thisStore.state.grocery.enter = moment().format('YYYY-MM-DD')
      thisStore.state.grocery.expire = moment().add(14, 'days').format('YYYY-MM-DD')
      axios.post('https://tobe-gooroom-default-rtdb.firebaseio.com/groceries.json', thisStore.state.grocery).then(function (response) {
        console.log('Done groceriesCreate', response)
        thisStore.dispatch('groceriesRead')
      }).catch(function (error) {
        thisStore.dispatch('axiosError', error)
      })
    },
    groceriesRead(thisStore, thisComponent) {
      axios.get('https://tobe-gooroom-default-rtdb.firebaseio.com/groceries.json').then(function (response) {
        console.log('Done groceriesRead', response)
        thisStore.commit('groceriesRead', {
          thisComponent: thisComponent,
          groceries: response.data
        })
      }).catch(function (error) {
        thisStore.dispatch('axiosError', error)
      })
    },
    groceriesUpdate(thisStore, groceryUpdate) {
      axios.patch('https://tobe-gooroom-default-rtdb.firebaseio.com/groceries.json', groceryUpdate).then(function (response) {
        console.log('Done groceriesUpdate', response)
        thisStore.dispatch('groceriesRead')
      }).catch(function (error) {
        thisStore.dispatch('axiosError', error)
      })
    },
    groceriesDelete(thisStore, index) {
      axios.delete('https://tobe-gooroom-default-rtdb.firebaseio.com/groceries/' + index + '.json').then(function (response) {
        console.log('Done groceriesDelete', response)
        thisStore.dispatch('groceriesRead')
      }).catch(function (error) {
        thisStore.dispatch('axiosError', error)
      })
    }
  }
}
