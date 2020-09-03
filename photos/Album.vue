<template>
  <button @click="click">
    {{ album.title }}
  </button>
</template>

<script>
import { useStore } from 'vuex'

export default {
  props: {
    album: {
      type: Object
    }
  },

  setup(props) {
    const store = useStore()

    const click = () => {
      store.dispatch('photos/fetchPhotosForAlbum', { album: props.album })
    }

    return {
      click
    }
  }
}
</script>

<style scoped>
button {
  background: darkcyan;
  color: white;
  border: none;
  margin: 5px;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  transition: .1s;
  width: 100%;
}

button:hover {
  filter: brightness(120%);
  cursor: pointer;
  transition: .1s;
}

</style>
