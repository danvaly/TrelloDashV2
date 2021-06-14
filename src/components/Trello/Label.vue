<template>
  <span class="card-label  mod-card-front" :class="labelClass">
    <span class="label-text">{{ label.name }}</span>
  </span>
</template>
<script>
export default {
  name: 'Label',
  props: {
    label: Object
  },
  computed: {
    labelClass () {
      return 'card-label-' + this.label.color
    }
  }
}
</script>
