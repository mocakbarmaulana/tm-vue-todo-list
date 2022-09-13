<template>
  <header :title="title">
    <h1>{{ title }}</h1>
    <ButtonItem
      v-show="homePage"
      :class-name="`${toggleAddTodo ? 'btn-danger' : 'btn-success'}`"
      :onClick="onClick"
    >
      {{ toggleAddTodo ? "Close" : "Add Todo" }}
    </ButtonItem>
  </header>
</template>

<script>
import ButtonItem from "@/components/ButtonItem";
export default {
  name: "HeaderItem",
  components: { ButtonItem },
  props: {
    title: {
      type: String,
      required: true,
      default: "Title",
    },
    toggleAddTodo: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit("toggle-add-todo");
    },
  },
  computed: {
    homePage() {
      return this.$route.path === "/";
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
