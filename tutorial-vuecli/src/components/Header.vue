<template>
  <div>
    <header>
      <img alt="Vue logo" src="../assets/pokemon/pokemon.png" width="200" />
      <!-- <h3>Pokemon</h3> -->
      <hr />
      <button @click="$emit('emitSwitchPokemon')">Random Choose Pokemon</button>
      <button @click="$emit('emitResetPokemon')">List Pokemons</button>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
</style>