<template>
  <div
    @dblclick="$emit('toggle-reminder', todo.id)"
    :class="[todo.reminder ? 'reminder' : '', 'todo']"
  >
    <h3>
      {{ todo.text }}
      <i
        @click="this.$emit('delete-todo', todo.id)"
        class="fa-solid fa-xmark"
      ></i>
    </h3>
    <p>{{ todo.day }}</p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  emits: ["delete-todo", "toggle-reminder"],
};
</script>

<style scoped>
.fa-solid {
  color: red;
}
.todo {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.todo.reminder {
  border-left: 5px solid green;
}
.todo h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
