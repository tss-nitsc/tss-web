<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card v-if="isLogin">
        <v-card-title class="headline">
          This is Logged in page.
        </v-card-title>
      </v-card>
      <v-card v-else>
        <v-card-title class="headline">
          This is LP.
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
// 以下をimportしておかないとmixinsのisLogin()のcomputedが使えない
import apiJobMixin from '@/mixins/apiJobMixin'
export default {
  mixins: [apiJobMixin]
}
</script>
