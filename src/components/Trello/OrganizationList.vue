<template>
  <div id="organization-list" v-if="organizations.length">
    <ul class="list-items">
      <li>
        <span class="list-title">Organizations</span>
      </li>
      <li v-for="organization in organizations" :key="organization.id">
        <Organization @stateChange="childUpdate" :organization-id="organization.id"
                      :organization="organization.displayName"></Organization>
      </li>
    </ul>
    <ul class="list-items">
      <li>
        <list-filter></list-filter>
      </li>
      <li>
        <card-filter></card-filter>
      </li>
    </ul>
  </div>
</template>

<script>
import { TrelloService } from '@/services/trello.service'
import $store from '@/store'
import Organization from '@/components/Trello/Organization'
import CardFilter from '@/components/Trello/CardFilter'
import ListFilter from '@/components/Trello/ListFilter'

export default {
  components: {
    Organization,
    CardFilter,
    ListFilter
  },
  data () {
    return {
      organizations: []
    }
  },
  mounted () {
    this.loadOrganizations()
  },
  methods: {
    async loadOrganizations () {
      const response = await TrelloService.organizations($store.state.user.currentUser.id)
      this.organizations = response.data

      if (localStorage.getItem('organizationFilter')) {
        const cacheFilters = JSON.parse(localStorage.getItem('organizationFilter'))
        if (cacheFilters) {
          $store.commit('organizationFilter/SET_CURRENT_FILTER', cacheFilters)
        }
      }

      this.organizations.forEach((organization) => {
        TrelloService.getOrganizationMembers(organization.id).then((members) => {
          members.data.forEach((member) => {
            TrelloService.getMember(member.id)
          })
        })
      })
    },
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
  display: flex;
  justify-content: space-between;
}

.list-items {
  display: flex;
  padding: 0 5px;
}
</style>
