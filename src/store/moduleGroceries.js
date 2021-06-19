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
  },
  actions: {
    groceriesCreate(thisStore) {
      thisStore.state.groceries.push({
        name: thisStore.state.grocery.name,
        enter: moment().format('YYYY-MM-DD'),
        expire: moment().add(14, 'days').format('YYYY-MM-DD')
      })
      console.log('Done groceriesCreate', moduleGroceries.state.groceries)
    }
  }
}
