<template>
  <div id="organization-list">
    <ul class="list-items">
      <li v-for="organization in organizations" :key="organization.id">
        <Organization @stateChange="childUpdate" :organization-id="organization.id"
                      :organization="organization.displayName"></Organization>
      </li>
    </ul>
  </div>
</template>

<script>
import { TrelloService } from '@/services/trello.service'
import $store from '@/store'
import Organization from '@/components/Trello/Organization'

export default {
  components: {
    Organization
  },
  data () {
    return {
      organizations: []
    }
  },
  async mounted () {
    const response = await TrelloService.organizations($store.state.user.currentUser.id)
    this.organizations = response.data
  },
  methods: {
    childUpdate (value) {
      $store.commit('organizationFilter/SET_STATE', value)
    }
  }
}
</script>

<style>
#organization-list {

  width: 100%;
  background: #0079BF;
}

.list-items {
  display: flex;
  padding: 0 5px;
}
</style>
