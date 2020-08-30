import { reactive } from 'vue'

class Store {
  constructor() {
    this.state = reactive({
      posts: [
        {
          id: 1,
          title: 'My post',
          content: 'This is a post'
        }
      ]
    })
  }
}

export const store = new Store()
