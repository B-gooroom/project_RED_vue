// import moment from 'moment'
// import axios from 'axios'
// import _ from 'lodash'
import firebase from 'firebase/app'

export const moduleMembers = {
  state: {
    uid: null,
    name: null
  },
  mutations: {
    membersOnAuthStateChanged(state, firebaseUser) {
      state.uid = firebaseUser.uid
      state.name = firebaseUser.displayName
    }
  },
  actions: {
    membersOnAuthStateChanged({ commit }) {
      firebase.auth().onAuthStateChanged(function (firebaseUser) {
        console.log(firebaseUser)
        if (firebaseUser) {
          commit('membersOnAuthStateChanged', firebaseUser)
        } else {
          document.getElementById('login-display').innerHTML = ''
        }
      })
    }
  }
}
