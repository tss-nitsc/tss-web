<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card v-if="isLogin" color="#ffffff">
        <v-card-title class="headline">
          整理番号
        </v-card-title>
        <v-card class="mx-auto" color="#ffffff" dark max-width="344">
          <v-card-text>
            <p class="display-3 text--primary">
              15
            </p>
            <div class="text--primary">
              ただ今のお呼出し番号は〇番です<br />
            </div>
          </v-card-text>
          <v-card-actions>
            <div class="text-center">
              <v-btn block width="330" color="#ff6347" dark>受付</v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-card>
      <v-card v-else>
        <v-card-title class="headline">This is LP.</v-card-title>
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

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  position: relative;
  font-weight: 300;
  font-size: 100px;
  color: #0d0d0e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
  font-size: 100px;
}

.body {
  background-color: aquamarine;
  color: blueviolet;
}
</style>
