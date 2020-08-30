import { reactive } from 'vue'
import { testPosts } from './testPosts.js'

class Store {
  constructor() {
    this.state = reactive({
      posts: testPosts,
      currentHashtag: null
    })
  }

  setHashtag(tag) {
    this.state.currentHashtag = tag
  }

  incrementLike(post) {
    const thePost = this.state.posts.find(x => 
      x.id === post.id
    )

    if (!thePost) {
      return
    }

    thePost.likes += 1
  }
}

export const store = new Store()
