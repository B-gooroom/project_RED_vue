import moment from 'moment'

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
      thisStore.state.groceries.push({
        name: thisStore.state.grocery.name,
        enter: moment().format('YYYY-MM-DD'),
        expire: moment().add(14, 'days').format('YYYY-MM-DD')
      })
      console.log('Done groceriesCreate', moduleGroceries.state.groceries)
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
    }
  }
}
