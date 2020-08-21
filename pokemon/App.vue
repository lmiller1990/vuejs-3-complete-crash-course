<template>
  <div class="wrapper">
    <div class="cards">
      <card 
         v-for="starter in starters" 
         :class="{ opace: selectedId && starter.id !== selectedId }"
         @click="fetchEvolutions(starter)"
       >
        <template v-slot:title>
          {{ starter.name }} (#{{ starter.id }})
        </template>

        <template v-slot:content>
          <img :src="starter.image" :alt="starter.name"/>
        </template>

        <template v-slot:description>
          <div v-for="type in starter.types">
            {{ type.type.name }}
          </div>
        </template>
      </card>
    </div>
  </div>

  <transition name="fade">
    <div class="wrapper" v-if="evolutions.length">
      <div class="cards">
        <card v-for="pokemon in evolutions">
          <template v-slot:title>
            {{ pokemon.name }} (#{{ pokemon.id }})
          </template>

          <template v-slot:content>
            <img :src="pokemon.image" :alt="pokemon.name"/>
          </template>

          <template v-slot:description>
            <div v-for="type in pokemon.types">
              {{ type.type.name }}
            </div>
          </template>
        </card>
      </div>
    </div>
  <transition>
</template>

<script>
const api = 'https://pokeapi.co/api/v2/pokemon'
const starterIds = [1, 4, 7]
import Card from './Card.vue'

export default {
  components: {
    Card
  },

  async created() {
    this.starters = await this.fetchData(starterIds)
  },

  data() {
    return {
      starters: [],
      selectedId: null,
      evolutions: []
    }
  },

  methods: {
    async fetchData(ids) {
      const response = await Promise.all(ids.map(id => window.fetch(`${api}/${id}`)))
      const data = await Promise.all(response.map(x => x.json()))
      return data.map(monster => ({
        id: monster.id,
        name: monster.name,
        types: monster.types,
        image: monster.sprites.other['official-artwork'].front_default
      }))
    },

    async fetchEvolutions(starter) {
      this.selectedId = starter.id
      this.evolutions = []
      this.evolutions = await this.fetchData([starter.id + 1, starter.id + 2])
    }
  }
}
</script>

<style>
img {
  width: 100%;
}

.cards, .wrapper {
  display: flex;
}

.opace {
  opacity: 0.5;
}
.card:hover {
  opacity: 1;
}

.wrapper {
  margin: 12px;
  justify-content: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
