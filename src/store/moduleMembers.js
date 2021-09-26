// import moment from 'moment'
// import axios from 'axios'
// import _ from 'lodash'
import firebase from 'firebase/app'
import axios from 'axios';

const axiosDefaultsHeaders = function (token) {
  if (token) {
    localStorage.setItem('x-jwt-token', token);
    axios.defaults.headers.common['x-jwt-token'] = token;
  } else if (localStorage.getItem('x-jwt-token')) {
    axios.defaults.headers.common['x-jwt-token'] = localStorage.getItem('x-jwt-token');
  }
};
axiosDefaultsHeaders();

export const moduleMembers = {
  state: {
    uid: null,
    name: null
  },
  mutations: {
    membersOnAuthStateChanged(state, firebaseUser) {
      state.uid = firebaseUser.uid
      state.name = firebaseUser.displayName || 'Guest'
    }
  },
  actions: {
    membersOnAuthStateChanged({ commit, dispatch }, thisComponent) {
      firebase.auth().onAuthStateChanged(function (firebaseUser) {
        console.log(firebaseUser)
        if (firebaseUser) {
          commit('membersOnAuthStateChanged', firebaseUser)
          dispatch('itemsRead', thisComponent)
          dispatch('groceriesRead', thisComponent)
        } else {
          commit('membersOnAuthStateChanged', {
            uid: null,
            name: null
          })
        }
      })
    },
    membersJwtLogin({ state }) {
      // debugger
      const member = {
        name: '홍길동',
        age: 39
      };
      axios.post('http://localhost:3100/api/v1/members/login', member).then(function (response) {
        axiosDefaultsHeaders(response.data.token);
        state.uid = response.data.token
      });
    }
  }
}
