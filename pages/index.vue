<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card v-if="isLogin">
        <v-card-title class="headline" max-width="1000">
          整理番号
        </v-card-title>
        <v-card class="mx-auto" max-width="344">
          <v-card-text>
            <div>Word of the Day</div>
            <p class="display-3 text--primary">
              15
            </p>
            <p>adjective</p>
            <div class="text--primary">
              well meaning and kindly.<br />
              "a benevolent smile"
            </div>
          </v-card-text>
          <v-card-actions>
            <div class="text-center">
              <v-btn block width="330" color="primary" dark>受付</v-btn>
            </div>
          </v-card-actions>
        </v-card>
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
