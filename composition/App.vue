<template>
  <button @click="increment">{{ count }}</button>
  <button @click="increase('a')">{{ numbers.a }}</button>
  <button @click="increase('b')">{{ numbers.b }}</button>
  {{ total }}
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue'

export default {
  setup() {
    // single number, string
    const count = ref(0)

    // complex
    const numbers = reactive({
      a: 0,
      b: 0
    })

    const increase = (num) => {
      numbers[num] += 1
    }

    const increment = () => {
      count.value += 1
    }


    watchEffect(() => {
      console.log(numbers.a)
    })

    const total = computed(() => count.value + numbers.a + numbers.b)

    return {
      total,
      increment,
      increase,
      count,
      numbers
    }
  }
}
</script>
