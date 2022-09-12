<template>
  <div v-for="todo in todos" :key="todo.id">
    <TodoItem
      @delete-todo="$emit('delete-todo', todo.id)"
      @toggle-reminder="$emit('toggle-reminder', todo.id)"
      :todo="todo"
    ></TodoItem>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  name: "TodosItem",
  components: { TodoItem },

  props: {
    todos: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  emits: ["delete-todo", "toggle-reminder"],
};
</script>

<style scoped></style>
