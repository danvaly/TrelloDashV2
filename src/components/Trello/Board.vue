<template>
  <a class="button primary" @click="changeState">
    <span class="icon-sm icon-checkbox-checked" v-if="state"></span>
    <span class="icon-sm icon-checkbox-unchecked" v-if="!state"></span>
    {{ organization }}
  </a>
</template>

<script>
export default {
  name: 'Organization',
  data () {
    return {
      state: false
    }
  },
  props: {
    organization: String,
    organizationId: String
  },
  computed: {
    name: () => {
      return this.organization ? this.organization.name : ''
    }
  },
  methods: {
    changeState () {
      this.state = !this.state
      this.$emit('stateChange', {
        organizationId: this.organizationId,
        state: this.state
      })
    }
  }
}
</script>
