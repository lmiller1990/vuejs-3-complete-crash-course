<template>
  <div class="cards">
    <card 
      v-for="pokemon in pokemons" 
      @click="click(pokemon)"
      :class="{ opace: selectedId && pokemon.id !== selectedId }"
      class="card"
    >
      <template v-slot:title>
        {{ pokemon.name }} #{{ pokemon.id }}
      </template>

      <template v-slot:content>
        <img :src="pokemon.sprite" />
      </template>

      <template v-slot:description>
        <div v-for="type in pokemon.types">
          {{ type }}
        </div>
      </template>
    </card>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  components: {
    Card
  },

  props: {
    selectedId: {
      type: Number
    },

    pokemons: {
      type: Array
    }
  },

  methods: {
    click(pokemon) {
      this.$emit('pokemonClicked', pokemon)
    }
  }
}
</script>

<style scoped>
.cards {
  display: flex;
  margin: 20px 0;
}

.opace {
  opacity: 0.5;
}

.card:hover { 
  opacity: 1.0;
}

img {
  width: 100%;
}

</style>
