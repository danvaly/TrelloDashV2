<template>
  <div>
    <organization-list></organization-list>
    <div id="content" tabindex="-1">
      <board-list :boards="boards"></board-list>
    </div>
  </div>
</template>

<script>

import $store from '@/store'
import { TrelloService } from '@/services/trello.service'
import BoardList from '@/components/Trello/BoardList'
import OrganizationList from '@/components/Trello/OrganizationList'

export default {
  name: 'Dashboard',
  data () {
    return {
      boards: []
    }
  },
  components: {
    BoardList,
    OrganizationList
  },
  mounted () {
    $store.subscribe((mutation, state) => {
      if (mutation.type === 'organizationFilter/SET_STATE' || mutation.type === 'organizationFilter/SET_CURRENT_FILTER') {
        this.loadBoards()
      }
    })
  },
  methods: {
    async loadBoards () {
      this.boards = []
      for (const id in $store.state.organizationFilter.currentFilters) {
        if ($store.state.organizationFilter.currentFilters[id]) {
          const response = await TrelloService.getOrganizationBoards(id)
          this.boards = this.boards.concat(response.data)
        }
      }
    }
  }

}
</script>

<style lang="scss">
#content {
  height: calc(100vh - 80px);
}
</style>
