<template>
  <div>
    <div>ToDos</div>
    <ul>
      <li v-for="(todo, index) in todos">
        <input type="checkbox" :checked="todo.done" v-model="todo.done">
        {{ todo.title }}
      </li>
    </ul>
    <input type="text" v-model="newTodoTitle">
    <button @click="addTodo">Add ToDo</button>
    <button @click="showJoke">Show me a Chuck Norris joke</button>
    <p v-if="joke" v-html="joke"></p>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      newTodoTitle: '',
      joke: ''
    }
  },

  computed: {
    ...mapGetters(['todos'])
  },

  methods: {
    showJoke () {
      axios.get('http://api.icndb.com/jokes/random')
      .then(res => {
        this.joke = res.data.value.joke
      })
    },

    addTodo () {
      if (!this.newTodoTitle) return false

      this.$store.commit('addTodo', this.newTodoTitle)

      this.newTodoTitle = ''
    }
  }
}
</script>
