<template>
  <div class="list-card">
    <div class="list-card-details">
      <div class="card-labels" v-if="card.labels.length">
        <Label v-for="label in card.labels" :key="label.id" :label="label"></Label>
      </div>
      <a :href="card.url" target="trello" class="list-card-title" dir="auto">
        {{ card.name }}
      </a>
      <div class="badges"><small>in <strong>{{ card.list.name }}</strong></small></div>
      <div class="list-card-members" v-if="card.idMembers">
        <Member v-for="memberId in card.idMembers" :key="memberId" :memberId="memberId"></Member>
      </div>
    </div>
  </div>
</template>
<script>
import Label from '@/components/Trello/Label'
import Member from '@/components/Trello/Member'

export default {
  name: 'Card',
  components: {
    Label,
    Member
  },
  props: {
    card: Object
  },
  mounted () {
    // console.log(this.card)
  }
}
</script>
