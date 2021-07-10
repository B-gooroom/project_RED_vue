// import moment from 'moment'
// import axios from 'axios'
// import _ from 'lodash'
import firebase from 'firebase/app'

export const moduleMembers = {
  state: {
    uid: null,
    name: null,
    promise: []
  },
  mutations: {
    membersOnAuthStateChanged(state, firebaseUser) {
      state.uid = firebaseUser.uid
      state.name = firebaseUser.displayName || 'Guest'
    }
  },
  actions: {
    membersOnAuthStateChanged({ state, commit, dispatch }, thisComponent) {
      firebase.auth().onAuthStateChanged(function (firebaseUser) {
        console.log(firebaseUser)
        if (firebaseUser) {
          commit('membersOnAuthStateChanged', firebaseUser)
          dispatch('groceriesRead', thisComponent)
          dispatch('itemsRead', thisComponent)
          Promise.all(state.promise).then(function (result) {
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
        } else {
          commit('membersOnAuthStateChanged', {
            uid: null,
            name: null
          })
        }
      })
    }
  }
}
