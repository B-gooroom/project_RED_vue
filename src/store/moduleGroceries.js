import moment from 'moment'
import axios from 'axios'

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
    groceriesRead(state, groceries) {
      state.groceries = groceries
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
    groceriesRead(thisStore) {
      const groceries = [{
        name: 'apple',
        enter: moment().format('YYYY-MM-DD'),
        expire: moment().add(14, 'days').format('YYYY-MM-DD')
      }, {
        name: 'banana',
        enter: moment().format('YYYY-MM-DD'),
        expire: moment().add(14, 'days').format('YYYY-MM-DD')
      }]
      thisStore.commit('groceriesRead', groceries)
      console.log('Done groceriesRead', moduleGroceries.state.groceries)
    },
    groceriesUpdate(thisStore, groceryUpdate) {
      thisStore.state.groceries[groceryUpdate.index] = groceryUpdate.grocery
      console.log('Done groceriesUpdate', moduleGroceries.state.groceries)
    },
    groceriesDelete(thisStore, index) {
      thisStore.state.groceries.splice(index, 1)
      console.log('Done groceriesDelete', moduleGroceries.state.groceries)
    }
  }
}
