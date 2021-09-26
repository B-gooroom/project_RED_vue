<template>
  <header>
    <div class="logo">
      RED
    </div>
    <div>
      <!-- <a href="./index.html" class="active" id="menu-a-home"><span class="material-icons-outlined">home</span></a> -->
      <router-link :to="{name: 'Home'}" active-class="active"><span class="material-icons-outlined">home</span></router-link>
  
    </div>
    <div>
      <!-- <a href="./groceries.html" id="menu-a-groceries"><span class="material-icons-outlined">fact_check</span></a> -->
      <router-link :to="{name: 'Groceries'}" active-class="active"><span class="material-icons-outlined">fact_check</span></router-link>
    </div>
    <div class="menu-items">
      <!-- <a href="./items.html" id="menu-a-items"><span class="material-icons">list</span></a> -->
      <router-link :to="{name: 'Items'}" active-class="active"><span class="material-icons">list</span></router-link>
      <div><span id="menu-items-counter">{{ count }}</span></div>
    </div>
    <div class="empty"></div>
    <div>
      <a href="#" id="menu-a-account" @click.prevent="accountToggle()">
        <span class="material-icons-outlined">account_circle</span>
        <ul class="account-menu">
          <li v-if="!member.uid || !localStorage.getItem('x-jwt-token')" @click="membersJwtLogin()">Guest</li>
          <li v-if="!member.uid || !localStorage.getItem('x-jwt-token')" @click="googleLogin()">Login</li>
          <li v-if="member.uid && localStorage.getItem('x-jwt-token')">Hello {{ member.name }}</li>
          <li v-if="member.uid && localStorage.getItem('x-jwt-token')" @click="membersJwtLogout()">Logout</li>
        </ul>
      </a>
    </div>
  </header>
</template>

<script>
import firebase from 'firebase/app'
import axios from 'axios'

export default {
  computed: {
    member() {
      return this.$store.state.members
    },
    count() {
      return this.$store.state.items.count
    },
    localStorage() {
      return localStorage
    }
  },
  methods: {
    accountToggle() {
      document.getElementsByClassName('account-menu')[0].classList.toggle('active')
    },
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
    },
    googleLogout() {
      firebase.auth().signOut()
    },
    emailSignin() {
      // firebase.auth().createUserWithEmailAndPassword('guest@firebaseapp.com', 'guestguest').catch((error) => {
      //   console.error(error)
      //   alert(error.message)
      // })
      firebase.auth().signInWithEmailAndPassword('guest@firebaseapp.com', 'guestguest').catch((error) => {
        console.error(error)
        alert(error.message)
      })
    },
    membersJwtLogin() {
      this.$store.dispatch('membersJwtLogin')
    },
    membersJwtLogout() {
      localStorage.removeItem('x-jwt-token')
      axios.defaults.headers.common['x-jwt-token'] = null
      window.location.reload()
    }
  },
  created() {
    this.$store.dispatch('membersOnAuthStateChanged', this)
  }
}
</script>