export default {
  computed: {
    $selectedBoards () {
      return this.$store.state.user.currentUser
    }
  }
}
