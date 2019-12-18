<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <v-toolbar color="primary" flat>
          <v-toolbar-title class="white--text">Signup form</v-toolbar-title>
          <v-spacer />
        </v-toolbar>
        <v-card-text>
          <v-form @submit.prevent="onSignUp">
            <v-text-field
              v-model="organizationName"
              label="OrganizationName"
              name="organizationName"
              prepend-icon="mdi-account"
              type="text"
            />
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
            <v-btn color="primary" type="submit">Signup</v-btn>
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
      organizationName: '',
      email: '',
      password: ''
    }
  },
  methods: {
    onSignUp() {
      const signUpData = {
        organizationName: this.organizationName,
        email: this.email,
        password: this.password
      }
      // storeで定義したsignUpUserアクションにdispatch
      this.$store.dispatch('signUpUser', signUpData)
    },
    jobsDone() {
      // apiJobMixinで叩かれる
      this.removeErrors()
      // アカウント登録が完了したのでルートパスにリダイレクトします。
      this.$router.replace('/')
    }
  }
}
</script>
