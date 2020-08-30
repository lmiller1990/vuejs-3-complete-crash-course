import { ref, reactive, computed, watch, watchEffect } from 'vue'

export function useNumbers() {
  // single number, string
  const count = ref(0)
  const a = ref(0)
  const b = ref(0)
  const history = ref([])

  const increment = () => {
    count.value += 1
  }

  watch([a, b], ([newA, newB], [oldA, oldB]) => {
    if (newA !== oldA) {
      history.value.push(`a: ${oldA} -> ${newA}`)
    }

    if (newB !== oldB) {
      history.value.push(`b: ${oldB} -> ${newB}`)
    }
  })

  return {
    a,
    b,
    count,
    history,
    increment
  }
}
