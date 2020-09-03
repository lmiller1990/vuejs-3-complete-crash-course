<template>
  <layout>
    <template v-slot:header>
      Header
    </template>

    <template v-slot:sidebar>
      <div v-for="album in albums">
        {{ album.title }}
      </div>
    </template>

    <template v-slot:content>
    </template>
  </layout>
</template>

<script>
import Layout from './Layout.vue'

export default {
  components: {
    Layout
  },

  data() {
    return {
      albums: []
    }
  },

  async created() {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums')
    const data = await res.json()
    this.albums = data
  }
}
</script>

<style>
* { 
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
