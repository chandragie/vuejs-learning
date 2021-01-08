<template>
  <div id="app">
    <Header
      v-on:emitSwitchPokemon="switchPokemon"
      v-on:emitResetPokemon="resetList"
    ></Header>
    <main>
      <h2>Pokedex - Your Pokemon Guidebook</h2>
      <article v-if="!selectedPokemon">
        <Pokemon
          v-for="item in pokemons"
          v-bind:pokemon="item"
          :index="item.id"
          :key="item.id"
        ></Pokemon>
      </article>

      <article v-else>
        <Pokemon
          :pokemon="selectedPokemon"
          :index="selectedPokemon.id"
        ></Pokemon>
      </article>
    </main>
    <Footer>
      <template v-slot:slot1>
        <h3>This is a "slot"</h3>
      </template>
      <template v-slot:slot2>
        <h3>And This is a second slot</h3>
      </template>
    </Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Pokemon from "./components/Pokemon.vue";

export default {
  name: "App",
  components: {
    Header: Header,
    Footer: Footer,
    Pokemon: Pokemon,
  },
  data: function () {
    return {
      pokemons: [
        {
          id: "1",
          name: "Pikachu",
          type: "Electric",
          img: "pikachu.png",
        },
        {
          id: "2",
          name: "Raichu",
          type: "Electric",
          img: "raichu.png",
        },
        {
          id: "3",
          name: "Bulbasaur",
          type: "Grass",
          img: "bulbasaur.jpg",
        },
        {
          id: "4",
          name: "Charmeleon",
          type: "Fire",
          img: "charmeleon.jpg",
        },
        {
          id: "5",
          name: "Squirtle",
          type: "Water",
          img: "squirtle.jpg",
        },
        {
          id: "6",
          name: "Pidgey",
          type: "Normal",
          img: "pidgey.jpg",
        },
        {
          id: "7",
          name: "Alolan Sandshrew",
          type: "Ice",
          img: "sandshrew-alolan.jpg",
        },
      ],
      selectedPokemon: "",
    };
  },
  methods: {
    switchPokemon: function () {
      this.selectedPokemon = this.randomizePokemon();
    },
    randomizePokemon() {
      return this.pokemons[Math.floor(Math.random() * this.pokemons.length)];
    },
    resetList: function () {
      this.selectedPokemon = "";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

main img {
  width: 80px;
  border: solid grey;
}
/**test if child style will be overidden? NO!*/
h2,
p {
  /* color: blue; */
  text-align: center;
}

article {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
