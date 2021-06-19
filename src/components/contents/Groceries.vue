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
                <span class="material-icons active">arrow_drop_up</span>
                <span class="material-icons">arrow_drop_down</span>
              </span>
            </th>
            <th>
              <span class="title-names">
                Enter
                <span class="material-icons">arrow_drop_up</span>
                <span class="material-icons">arrow_drop_down</span>
              </span>
            </th>
            <th>
              <span class="title-names">
                Expire
                <span class="material-icons">arrow_drop_up</span>
                <span class="material-icons">arrow_drop_down</span>
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
            <td class="td-expire"><input type="date" v-model="grocery.expire" @change="groceriesUpdate(index, grocery)"></td>
            <td class="td-delete">
              <button class="button-delete" @click="groceriesDelete(index)"><span class="material-icons">delete</span></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>

<script>
export default {
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
      this.$store.dispatch('groceriesCreate')
    },
    groceriesUpdate(index, grocery) {
      this.$store.dispatch('groceriesUpdate', {
        index: index,
        grocery: grocery
      })
    },
    groceriesDelete(index) {
      this.$store.dispatch('groceriesDelete', index)
    }
  },
  created() {
    this.grocery.name = ''
    this.$store.dispatch('groceriesRead')
  }
}
</script>