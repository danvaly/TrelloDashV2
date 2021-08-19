<template>
  <div class="list-card-actions">
    <div class="dropdown">
      <a @click="visible=!visible" type="button" id="dropdownMenuButton"
         data-toggle="dropdown"
         aria-haspopup="true" aria-expanded="false">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
        </svg>
      </a>
      <div class="dropdown-menu" v-if="visible" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardActions',
  data: function () {
    return {
      visible: false
    }
  },
  props: {
    card: Object
  },
  mounted () {
    // console.log(this.card)
  }
}
</script>
