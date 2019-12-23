<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card v-if="isLogin">
        <v-card-title class="headline">発券完了</v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import apiJobMixin from '@/mixins/apiJobMixin'
export default {
  mixins: [apiJobMixin]
}
</script>
