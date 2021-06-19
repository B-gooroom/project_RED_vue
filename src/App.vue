<template>
  <div class="wrap">
    <Header></Header>
    <div class="contents">
      <article class="home">
        <h1>RED</h1>
        <h2>Welcome to Refrigerator Expiry Date</h2>
      </article>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>