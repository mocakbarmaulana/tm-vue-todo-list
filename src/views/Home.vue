<template>
  <AddTodo v-show="showAddTodo" @add-todo="addTodo"></AddTodo>
  <TodosItem
    @delete-todo="deleteTodo"
    @toggle-reminder="toggleReminder"
    :todos="todos"
  ></TodosItem>
</template>

<script>
import TodosItem from "@/components/TodosItem";
import AddTodo from "@/components/AddTodo";
export default {
  name: "HomeItem",
  components: {
    TodosItem,
    AddTodo,
  },
  props: {
    showAddTodo: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    async addTodo(todo) {
      const res = await fetch("api/todos", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(todo),
      });

      const data = await res.json();

      this.todos = [...this.todos, data];
    },
    async deleteTodo(id) {
      if (confirm("Are you sure?")) {
        const res = await fetch(`api/todos/${id}`, {
          method: "DELETE",
        });

        res.status === 200
          ? (this.todos = this.todos.filter((todo) => todo.id !== id))
          : alert("Error deleting todo");
      }
    },
    async toggleReminder(id) {
      const todo = await this.fetchTodo(id);
      const updateTodo = { ...todo, reminder: !todo.reminder };

      const res = await fetch(`api/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updateTodo),
      });

      const data = await res.json();

      this.todos = this.todos.map((todo) =>
        todo.id === id ? { ...todo, reminder: data.reminder } : todo
      );
    },
    async fetchTodos() {
      const res = await fetch("api/todos");

      return res.json();
    },
    async fetchTodo(id) {
      const res = await fetch(`api/todos/${id}`);

      return res.json();
    },
  },
  async created() {
    this.todos = await this.fetchTodos();
  },
};
</script>

<style scoped></style>
