<template>
  <article>
    <form class="form-inputs" @submit.prevent="itemsRead()">
      <input type="text" name="q" v-model="q">
      <button class="button-search"><span class="material-icons">search</span></button>
    </form>
    <div class="div-table">
      <table>
        <thead>
          <tr>
            <th>No</th>
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
            <th>Edit</th>
            <th>Del</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>{{index+1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.enter}}</td>
            <td>{{item.expire}}</td>
            <td class="td-update">
              <button class="button-update" @click="modalToggle(item);"><span class="material-icons">edit_note</span></button>
            </td>
            <td class="td-delete">
              <button class="button-delete" @click="itemsDelete(item.k)"><span class="material-icons">delete</span></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="modal-background" @click="modalToggle()">
      <form class="modal" onclick="event.stopPropagation()">
        <h3 class="modal-header">Edit</h3>
        <table class="modal-table">
          <tbody>
            <tr>
              <th>
                <span>Name</span>
              </th>
              <td><input type="text" name="item-name" v-model="item.name" placeholder="Name"></td>
            </tr>
            <tr>
              <th>
                <span>Enter</span>
              </th>
              <td><input type="date" name="item-enter" v-model="item.enter" placeholder="YYYY-MM-DD"></td>
            </tr>
            <tr>
              <th>
                <span>Expire</span>
              </th>
              <td><input type="date" name="item-expire" v-model="item.expire" placeholder="YYYY-MM-DD"></td>
            </tr>
          </tbody>
        </table>
        <div class="modal-footer">
          <button class="button-close" @click.prevent="modalToggle()"><span class="material-icons">close</span></button>
          <button class="button-update" @click.prevent="itemsUpdate()"><span class="material-icons">edit_note</span></button>
        </div>
      </form>
    </div>
  </article>
</template>

<script>
import _ from 'lodash'

export default {
  data() {
    return {
      item: {
        name: '',
        enter: '',
        expire: ''
      },
      q: ''
    }
  },
  watch: {
    '$route.query': function(query, beforeQuery) {
      console.log(query, beforeQuery)
      this.q = query.q || ''
      this.$store.dispatch('itemsRead', this)
    }
  },
  computed: {
    items() {
      return this.$store.state.items.items
    }
  },
  methods: {
    itemsUpdate() {
      const item = _.cloneDeep(this.item)
      // console.log(_.isEqual(this.item, item))
      delete item.k
      // console.log(_.isEqual(this.item, item))
      const itemUpdate = {
        [this.item.k]: item
      }
      this.$store.dispatch('itemsUpdate', {
        itemUpdate: itemUpdate,
        thisComponent: this
        })
    },
    itemsDelete(index) {
      this.$store.dispatch('itemsDelete', {
        index: index,
        thisComponent: this
      })
    },
    itemsRead() {
      this.$router.push({name: 'Items', query: {
        q: this.q,
        orderName: this.$route.query.orderName,
        orderType: this.$route.query.orderType
      }})
    },
    modalToggle(item) {
      document.body.classList.toggle('o-hidden');
      document.getElementsByClassName('modal-background')[0].classList.toggle('active');
      if (item !== undefined) {
        this.item.name = item.name
        this.item.enter = item.enter
        this.item.expire = item.expire
        this.item.k = item.k
      }
    }
  },
  created() {
    if (!this.$route.query.orderName) {
      this.$router.push({
        name: 'Items',
        query: {
          orderName: 'name',
          orderType: 'asc'
        }
      })
    }
    // this.item.name = ''
    this.q = this.$route.query.q || ''
    this.$store.dispatch('itemsRead', this)
  }
}
</script>
