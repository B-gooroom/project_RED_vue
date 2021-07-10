import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/index.scss'
import firebase from 'firebase/app'
import 'firebase/auth'
firebase.initializeApp({
  apiKey: "AIzaSyDLBCtKeMQi2KfeAojaeoL0dax7hLc85ik",
  authDomain: "tobe-gooroom.firebaseapp.com",
  databaseURL: "https://tobe-gooroom-default-rtdb.firebaseio.com",
  projectId: "tobe-gooroom",
  storageBucket: "tobe-gooroom.appspot.com",
  messagingSenderId: "774866473401",
  appId: "1:774866473401:web:d60e5e395e01d2187ce668",
  measurementId: "G-ZRSL8HFZ5T"
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
