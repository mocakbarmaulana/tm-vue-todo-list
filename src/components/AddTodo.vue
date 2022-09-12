<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Todo</label>
      <input type="text" name="text" v-model="text" placeholder="Your Todo" />
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input type="text" name="day" v-model="day" placeholder="Day & Time" />
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input type="checkbox" name="reminder" v-model="reminder" />
    </div>
    <div class="form-control">
      <ButtonItem className="btn-block">Save Todo</ButtonItem>
    </div>
  </form>
</template>

<script>
import ButtonItem from "@/components/ButtonItem";
export default {
  name: "AddTodo",
  components: { ButtonItem },
  data() {
    return {
      text: "",
      day: "",
      reminder: false,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.text) {
        alert("Please add a todo");
        return;
      }

      this.$emit("add-todo", {
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      });

      this.text = "";
      this.day = "";
      this.reminder = false;
    },
  },
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 1;
  height: 20px;
}
</style>
