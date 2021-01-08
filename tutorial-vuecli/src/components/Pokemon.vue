<template>
  <ul>
    <li>
      <img :src="imgUrl" />
      <p>{{ index }}</p>
      <p>{{ pokemon.name }}</p>
      <p>
        Type : <em>{{ pokemon.type }}</em>
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["pokemon", "index"],
  computed: {
    imgUrl: function () {
      return require("../assets/pokemon/" + this.pokemon.img);
    },
  },
};
</script>

<style scoped>
p {
  color: salmon;
}
li {
  list-style: none;
}
</style>