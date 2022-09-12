<template>
  <button :class="[className, 'btn']" :style="style" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonItem",
  props: {
    className: {
      type: String,
      default: "",
    },
    style: {
      type: Object,
      default: () => ({}),
    },
    onClick: {
      type: Function,
    },
  },
};
</script>

<style scoped></style>
