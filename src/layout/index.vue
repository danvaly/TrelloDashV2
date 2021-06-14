<template>
  <div id="app">
    <div id="surface">
      <AppHeader></AppHeader>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import AppHeader from './Header.vue'

export default {
  name: 'AppLayout',
  components: {
    AppHeader
  }
}
</script>
