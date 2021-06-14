<template>
  <a class="list-card" :href="card.url">
    <div class="list-card-details">
      <div class="card-labels"><span class="card-label card-label-blue mod-card-front"><span
        class="label-text">TBD GB</span></span><span class="card-label card-label-orange mod-card-front"><span
        class="label-text">in Progress</span></span><span class="card-label card-label-yellow mod-card-front"><span
        class="label-text">on hold</span></span><span class="card-label card-label-purple mod-card-front"><span
        class="label-text">TBD Bocris</span></span><span class="card-label card-label-lime mod-card-front"><span
        class="label-text">TBD SU</span></span>
      </div>

      <span class="list-card-title" dir="auto">Data Migration</span>

      <div class="badges"><small>in <strong>Template Migration</strong></small></div>
      <div class="list-card-members">
        <div class="member"><img
          src="https://trello-members.s3.amazonaws.com/5c13adfcf4ab28318dc3700a/4ae6e8fe22561a942ea7089276609858/30.png"
          alt="Gerald" class="member-avatar" width="30" height="30"></div>
        <div class="member"><img
          src="https://trello-members.s3.amazonaws.com/5ba39947630e2936107b3f4d/590e2a028ba2154cd44aed8a40d9ac3d/30.png"
          alt="Ghica Valentin" class="member-avatar" width="30" height="30"></div>
      </div>
      {{ JSON.stringify(card) }}
    </div>
  </a>
</template>
<script>
export default {
  name: 'Card',
  props: {
    card: Object
  }
}
</script>
