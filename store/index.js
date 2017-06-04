import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    todos: state => state.todos
  },
  mutations: {
    addTodo (state, title) {
      state.todos.push({
        title: title,
        done: false
      })
    }
  }
})

export default store
