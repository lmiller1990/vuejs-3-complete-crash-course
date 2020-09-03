<template>
  <layout>
    <template v-slot:header>
      Header
    </template>

    <template v-slot:sidebar>
      Sidebar
    </template>

    <template v-slot:content>
      Content
    </template>
  </layout>
</template>

<script>
import Layout from './Layout.vue'

export default {
  components: {
    Layout,
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
