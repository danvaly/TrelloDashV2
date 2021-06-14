<template>
  <div class="filter-container">
    <input type="text" v-model="filter" @change="updateFilter" placeholder="Card Filter"/>
  </div>
</template>

<script>
export default {
  name: 'CardFilter',
  data () {
    return {
      filter: ''
    }
  },
  mounted () {
    if (localStorage.getItem('card_filter')) {
      this.filter = localStorage.getItem('card_filter')
    }
  },
  methods: {
    updateFilter () {
      localStorage.setItem('card_filter', this.filter)
      this.$emit('filterUpdated', this.filter)
    }
  }
}
</script>
<style lang="scss">
.filter-container {
  padding: 5px;
}
</style>
