<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <v-toolbar color="primary" flat>
          <v-toolbar-title class="white--text">Signin form</v-toolbar-title>
          <v-spacer />
        </v-toolbar>
        <v-card-text>
          <v-form @submit.prevent="onSignIn">
            <v-text-field
              v-model="email"
              label="Email"
              name="email"
              prepend-icon="mdi-email"
              type="text"
            />
            <v-text-field
              id="password"
              v-model="password"
              label="Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
            />
            <v-spacer />
            <v-btn color="primary" type="submit">Signin</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import apiJobMixin from '@/mixins/apiJobMixin'

export default {
  mixins: [apiJobMixin],
  data() {
    return {
      email: '',
      password: ''
    }
  },
  beforeCreate() {
    const loggedIn = this.$store.getters.loginStatus
    if (loggedIn) {
      // ログイン済みならルートページへ遷移
      this.$router.replace('/')
    }
  },
  methods: {
    onSignIn() {
      const signInData = {
        email: this.email,
        password: this.password
      }
      // storeに作成したloginUserへdispatch
      this.$store.dispatch('signInUser', signInData)
    },
    jobsDone() {
      this.removeErrors()
      this.$router.replace('/')
    }
  }
}
</script>
