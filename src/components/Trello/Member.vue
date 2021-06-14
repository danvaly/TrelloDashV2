<template>
  <div v-if="member">
    <div class="member" v-if="member.avatarHash">
      <img
        :src="avatar"
        :alt="member.fullName" class="member-avatar" width="30" height="30">
    </div>
    <div class="member" v-if="!member.avatarHash">
      <span style="width: 30px; height: 30px" class="userinitials">
        {{ member.initials }}
      </span>
    </div>
  </div>
</template>
<script>
import { TrelloService } from '@/services/trello.service'

export default {
  name: 'Member',
  data () {
    return {
      member: null
    }
  },
  props: {
    memberId: String
  },
  mounted () {
    this.loadMember()
  },
  computed: {
    avatar () {
      return this.member.avatarUrl + '/30.png'
    }
  },
  methods: {
    async loadMember () {
      if (this.memberId) {
        const response = await TrelloService.getMember(this.memberId)
        this.member = response.data
      }
    }
  }
}
</script>
