<template>
  <layout>
    <template v-slot:header>
      Capstone Project - Photo App (Vuex, Vue Router)
    </template>

    <template v-slot:sidebar>
      <album 
        v-for="album in albums"
        :album="album"
      />
    </template>

    <template v-slot:content>
      <router-view />
    </template>
  </layout>
</template>

<script>
import Layout from './Layout.vue'
import Album from './Album.vue'

export default {
  components: {
    Layout,
    Album
  },

  async created() {
    this.$store.dispatch('albums/fetchAlbums')
  },

  methods: {
    fetchPhotosForAlbum(albumId) {
      this.$store.dispatch('photos/fetchPhotosForAlbum', { id: albumId })
    }
  },

  watch: {
    $route: {
      handler(val) {
        this.fetchPhotosForAlbum(val.params.id)
      },
      immediate: true
    }
  },

  computed: {
    albums() {
      return this.$store.state.albums.all
    }
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
