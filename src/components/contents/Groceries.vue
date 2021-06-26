<template>
  <article>
    <form class="form-inputs" @submit.prevent="groceriesCreate()">
      <input type="text" name="name" v-model="grocery.name">
      <button class="button-create"><span class="material-icons">edit</span></button>
    </form>
    <div class="div-table">
      <table>
        <thead>
          <tr>
            <th>Move</th>
            <th>
              <span class="title-names">
                Name
                <span class="material-icons" :class="{active: $route.query.orderName === 'name' && $route.query.orderType === 'asc'}"><router-link :to="{name: 'Groceries', query: {
                  orderName: 'name',
                  orderType: 'asc'
                }}" active-class="active">arrow_drop_up</router-link></span>
                <span class="material-icons" :class="{active: $route.query.orderName === 'name' && $route.query.orderType === 'desc'}"><router-link :to="{name: 'Groceries', query: {
                  orderName: 'name',
                  orderType: 'desc'
                }}" active-class="active">arrow_drop_down</router-link></span>
              </span>
            </th>
            <th>
              <span class="title-names">
                Enter
                <span class="material-icons" :class="{active: $route.query.orderName === 'enter' && $route.query.orderType === 'asc'}"><router-link :to="{name: 'Groceries', query: {
                  orderName: 'enter',
                  orderType: 'asc'
                }}" active-class="active">arrow_drop_up</router-link></span>
                <span class="material-icons" :class="{active: $route.query.orderName === 'enter' && $route.query.orderType === 'desc'}"><router-link :to="{name: 'Groceries', query: {
                  orderName: 'enter',
                  orderType: 'desc'
                }}" active-class="active">arrow_drop_down</router-link></span>
              </span>
            </th>
            <th>
              <span class="title-names">
                Expire
                <span class="material-icons" :class="{active: $route.query.orderName === 'expire' && $route.query.orderType === 'asc'}"><router-link :to="{name: 'Groceries', query: {
                  orderName: 'expire',
                  orderType: 'asc'
                }}" active-class="active">arrow_drop_up</router-link></span>
                <span class="material-icons" :class="{active: $route.query.orderName === 'expire' && $route.query.orderType === 'desc'}"><router-link :to="{name: 'Groceries', query: {
                  orderName: 'expire',
                  orderType: 'desc'
                }}" active-class="active">arrow_drop_down</router-link></span>
              </span>
            </th>
            <th>Del</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(grocery, index) in groceries" :key="index">
            <td><input type="checkbox" onchange=""></td>
            <td>{{grocery.name}}</td>
            <td>{{grocery.enter}}</td>
            <td class="td-expire"><input type="date" v-model="grocery.expire" @change="groceriesUpdate(grocery.k, grocery)"></td>
            <td class="td-delete">
              <button class="button-delete" @click="groceriesDelete(grocery.k)"><span class="material-icons">delete</span></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>

<script>
export default {
  watch: {
    '$route.query': function(query, beforeQuery) {
      console.log(query, beforeQuery)
      this.$store.dispatch('groceriesRead', this)
    }
  },
  computed: {
    grocery() {
      return this.$store.state.groceries.grocery
      },
    groceries() {
      return this.$store.state.groceries.groceries
    }
  },
  methods: {
    groceriesCreate() {
      this.$store.dispatch('groceriesCreate', this)
    },
    groceriesUpdate(index, grocery) {
      const groceryUpdate = {
        [index]: grocery
      }
      this.$store.dispatch('groceriesUpdate', {
        groceryUpdate: groceryUpdate,
        thisComponent: this
        })
    },
    groceriesDelete(index) {
      this.$store.dispatch('groceriesDelete', {
        index: index,
        thisComponent: this
      })
    }
  },
  created() {
    if (!this.$route.query.orderName) {
      this.$router.push({
        name: 'Groceries',
        query: {
          orderName: 'name',
          orderType: 'asc'
        }
      })
    }
    this.grocery.name = ''
    this.$store.dispatch('groceriesRead', this)
  }
}
</script>