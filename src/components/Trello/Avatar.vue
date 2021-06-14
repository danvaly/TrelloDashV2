<template>
  <div class="avatar" v-if="url">
    <img :src=" url + '/50.png'" v-if="url"/>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    url: String
  }
}
</script>

<style lang="scss">
.avatar {
  width: 32px;
  height: 32px;
  line-height: 32px;
  overflow: hidden;
  border-radius: 50px;
  display: inline-block;

  img {
    width: 32px;
    height: 32px;
  }
}
</style>
