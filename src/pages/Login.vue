<template>
  <div id="login">
    <span class="icon-lg icon-taco"></span>

    <div class="login-page">
      <h3> Access required</h3>
      <p>You need to authorize <strong>Trello Dash</strong> to connect to your profile!<br/>
        Go to the authorization page and copy the token in the field bellow to give the app access to your account!</p>
      <p>Don't worry, we don't store your token! Your data is safe!</p>
      <a class="button" :href="loginLink" target="_blank">Open authorization page</a>
      <br>
      <input type="text" v-model="token" placeholder="Authorization token">
      <a class="button primary" @click="save">
        <i class="icon-sm icon-send"></i>
        Log in
      </a>
      <a class="copyright" href="https://github.com/danvaly">&copy; danvaly</a>
    </div>

    <p>
      Trello Dash v1 is deprecated and is <a href="https://www.activeline.ro/trellodashv1/" target="_blank">available
      here!</a>
    </p>
  </div>
</template>

<script>
import { AuthService } from '@/services/auth.service'

export default {
  name: 'Login',
  data () {
    return {
      token: ''
    }
  },
  computed: {
    loginLink: () => AuthService.getLoginLink()
  },
  methods: {
    async save () {
      try {
        await AuthService.login(this.token)
        await this.$router.push({ name: 'index' })
      } catch (error) {
        this.error = error.status === 404 ? 'User with same email not found' : error.message
      }
    }
  },
  mounted () {
    if (AuthService.authenticated()) {
      AuthService.init()
      this.$router.push({ name: 'index' })
    }
  }
}
</script>

<style lang="scss">
.copyright {
  text-decoration: none;
  color: #999999;
}

#login {
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;

  .icon-lg {
    font-size: 48px;
  }

  .login-page {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: #FFFFFF;
    max-width: 400px;
    border-radius: 3px;

    input {
      width: 100%;
    }
  }
}
</style>
