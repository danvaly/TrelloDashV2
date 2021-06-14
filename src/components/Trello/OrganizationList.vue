<template>
  <a>{{ name }}</a>
</template>

<script>
export default {
  props: {
    organization: null
  },
  computed: {
    name: () => {
      return this.organization ? this.organization.name : ''
    }
  }
}
</script>
