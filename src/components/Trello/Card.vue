<template>
  <div class="list-card">
    <div class="list-card-details">
      <div class="list-card-header">
        <div class="card-labels" v-if="card.labels.length">
          <Label v-for="label in card.labels" :key="label.id" :label="label"></Label>
        </div>

        <CardActions :card="card"></CardActions>
      </div>

      <a :href="card.url" target="trello" class="list-card-title" dir="auto">
        {{ card.name }}
      </a>

      <div class="list-card-footer">
        <div class="badges"><small>in <strong>{{ card.list.name }}</strong></small></div>
        <div class="list-card-members" v-if="card.idMembers">
          <Member v-for="memberId in card.idMembers" :key="memberId" :memberId="memberId"></Member>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Label from '@/components/Trello/Label'
import Member from '@/components/Trello/Member'
import CardActions from '@/components/Trello/CardActions'

export default {
  name: 'Card',
  components: {
    Label,
    Member,
    CardActions
  },
  props: {
    card: Object
  },
  mounted () {
    // console.log(this.card)
  }
}
</script>
