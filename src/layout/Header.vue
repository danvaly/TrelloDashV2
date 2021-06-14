<template>
  <div id="header" v-if="isActive">
    <div class="header-left">
      <Avatar :url="avatar" v-if="avatar"></Avatar>
      <span id="greetings" v-if="fullName">
        Hi {{ fullName }}
      </span>

      <div class="menu">
        <router-link to="/" class="header-btn with-icon">Home</router-link>
<!--        <router-link to="/queue" class="header-btn with-icon">My Queue</router-link>-->
      </div>
    </div>
    <div class="header-right">
      <div class="hiddenBoards" style="float: right; margin-right: 10px;color:#fff;"></div>

      <a id="disconnect" class="header-btn with-icon"
         href="#" @click="logout">
        <span class="icon-md icon-log-out"></span>
        Log Out</a>
    </div>

  </div>
</template>

<script>
import { AuthService } from '@/services/auth.service'
import $store from '@/store'
import Avatar from '@/components/Trello/Avatar'

export default {
  name: 'Header',
  components: {
    Avatar
  },
  data () {
    return {
      isActive: false
    }
  },

  computed: {
    fullName: () => {
      return $store.state.user.currentUser.fullName
    },
    avatar: () => {
      return $store.state.user.currentUser.avatarUrl
    }
  },
  mounted () {
    $store.subscribe((mutation, state) => {
      if (mutation.type === 'user/SET_CURRENT_USER') {
        this.isActive = AuthService.authenticated()
      }
    })
    this.isActive = AuthService.authenticated()
  },
  methods: {
    async logout () {
      await AuthService.makeLogout()
    }
  }
}
</script>

<style lang="scss">
#header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: #fff;
  background: #0067a3;
  height: auto;
}

.header-left {
  display: flex;
  justify-content: flex-start;
  align-content: center;
  align-items: center;

  #greetings {
    margin-left: 10px;
  }
}

.header-btn {
  padding-left: 10px !important;
  padding-right: 10px !important;

  .icon-md {
    color: #fff;
  }
}

.menu {
  margin-left: 20px;

}

</style>
