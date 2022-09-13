<template>
  <div class="container">
    <HeaderItem
      @toggle-add-todo="toggleAddTodo"
      :toggle-add-todo="showAddTodo"
      title="Todo List"
    ></HeaderItem>
    <router-view :showAddTodo="showAddTodo"></router-view>
    <FooterItem></FooterItem>
  </div>
</template>

<script>
import HeaderItem from "@/components/HeaderItem";
import FooterItem from "@/components/FooterItem";

export default {
  name: "App",
  components: {
    HeaderItem,
    FooterItem,
  },
  data() {
    return {
      showAddTodo: false,
    };
  },
  methods: {
    toggleAddTodo() {
      this.showAddTodo = !this.showAddTodo;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
.btn-success {
  background: green;
}
.btn-danger {
  background: red;
}
</style>
