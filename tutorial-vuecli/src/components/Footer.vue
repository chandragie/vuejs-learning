<template>
  <div>
    <slot name="slot1"></slot>
    <footer>&copy; 2020 :: chandragie</footer>
    <slot name="slot2"></slot>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
div {
  text-align: center;
}
</style>