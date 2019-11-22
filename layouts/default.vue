<template>
  <v-app>
    <v-app-bar :clipped-left="false" fixed app color="primary">
      <v-toolbar-title>
        <nuxt-link
          to="/"
          class="toolbar-title, white--text"
          style="text-decoration: none"
          >My Ticket</nuxt-link
        ></v-toolbar-title
      >
      <v-spacer />
      <v-toolbar-items>
        <v-btn v-if="!isLogin" text class="white--text" to="/signin" nuxt
          >SignIn</v-btn
        >
        <v-btn v-else text class="white--text" to="/mypage" nuxt>{{
          userName
        }}</v-btn>
        <v-btn v-if="!isLogin" text class="white--text" to="/signup" nuxt
          >SignUp</v-btn
        >
        <v-btn v-else @click="logOut" text class="white--text">Logout</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container class="fill-height" fluid>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  computed: {
    isLogin() {
      // テンプレート側でログイン状態を判定したいのでcomputedを作成
      const loggedIn = this.$store.getters.loginStatus
      if (loggedIn) {
        return true
      } else {
        return false
      }
    },
    userName() {
      // storeからのユーザーネーム取得処理
      return this.$store.getters.user ? this.$store.getters.user.name : ''
    }
  },
  created() {
    // pluginsでinjectしたfirebaseは次のように呼び出せます
    // onAuthStateChangedでログイン状態を判定できます
    this.$fireApp.auth().onAuthStateChanged((user) => {
      if (user) {
        const authUser = {
          id: user.uid,
          email: user.email,
          name: user.displayName
        }
        this.setUser(authUser)
      }
    })
  },
  methods: {
    logOut() {
      this.$store.dispatch('logOut')
      this.$router.push('/')
    },
    ...mapMutations({
      setUser: 'setUser'
    })
  }
}
</script>
