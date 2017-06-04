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
  </div>
</template>

<script>
export default {
  data () {
    return {
      todos: [],
      newTodoTitle: ''
    }
  },

  methods: {
    addTodo () {
      if (!this.newTodoTitle) return false

      this.todos.push({
        title: this.newTodoTitle,
        done: false
      })

      this.newTodoTitle = ''
    }
  }
}
</script>
