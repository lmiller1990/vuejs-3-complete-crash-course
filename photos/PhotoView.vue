<template>
  <img v-for="photo in currentAlbumPhotos" :src="photo.thumbnailUrl" />
</template>

<script>
export default {
  computed: {
    currentAlbumPhotos() {
      return this.$store.state.photos.currentAlbumPhotos
    }
  }
}
</script>
