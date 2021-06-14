<template>
  <div class="filter-container">
    <label>List Filter</label>
    <input type="text" v-model="filter" @change="updateFilter" placeholder="List Filter"/>
  </div>
</template>

<script>
export default {
  name: 'ListFilter',
  data () {
    return {
      filter: ''
    }
  },
  mounted () {
    if (localStorage.getItem('list_filter')) {
      this.filter = localStorage.getItem('list_filter')
    }
  },
  methods: {
    updateFilter () {
      localStorage.setItem('list_filter', this.filter)
      window.location.reload()
    }
  }
}
</script>
<style lang="scss">

</style>
