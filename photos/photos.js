export const photos = {
  namespaced: true,

  state() {
    return {
      currentAlbumPhotos: []
    }
  },

  mutations: {
    setPhotos(state, photos) {
      state.currentAlbumPhotos = photos
    }
  },

  actions: {
    async fetchPhotosForAlbum(ctx, { album }) {
      const res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`)
      const data = await res.json()
      ctx.commit('setPhotos', data)
    }
  }
}
