<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card v-if="isLogin">
        <v-card-title class="headline" max-width="1000">
          整理券を発券します
        </v-card-title>
        <v-card class="mx-auto" color="#ffffff" dark max-width="344">
          <v-card-text>
            <div>受付中の整理番号</div>
            <p class="display-3 text--primary text-center">
              {{ organization.currentTicketNumber + 1 }}
            </p>
          </v-card-text>
          <v-form
            @submit.prevent="incrementCurrentTicketNumber"
            class="text-center"
          >
            <v-btn block width="330" color="primary" dark type="submit"
              >受付</v-btn
            >
          </v-form>
        </v-card>
      </v-card>
      <v-card v-else width="500" height="200">
        <v-card-title class="headline"
          ><span style="font-size:150%;">TSSとは・・・</span></v-card-title
        >
        <p style="position:absolute;left:100px;">
          混雑時に、お客様が店頭で待つことなく<br />
          時間を有効に使っていただけるように<br />
          するためのシステムです。
        </p>
        <h1 style="position:absolute;top:150px;left:100px;">
          <span style="color:red;">登録</span>をお願いします。
        </h1>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
// 以下をimportしておかないとmixinsのisLogin()のcomputedが使えない
import apiJobMixin from '@/mixins/apiJobMixin'
export default {
  mixins: [apiJobMixin],
  computed: {
    organization() {
      if (this.$store.getters['organization/organization']) {
        return this.$store.getters['organization/organization']
      }
      return {
        organizationName: '',
        currentTicketNumber: ''
      }
    }
  },
  created() {
    // DOMが作られた後に実行される
    const payload = this.$store.getters.user
    this.$store.dispatch('organization/fetchOrganization', payload)
  },
  updated() {
    // DOMが更新された（リロード）後実行される
    const payload = this.$store.getters.user
    this.$store.dispatch('organization/fetchOrganization', payload)
  },
  methods: {
    incrementCurrentTicketNumber() {
      const payload = this.$store.getters.user
      this.$store.dispatch('organization/incrementCurrentTicketNumber', payload)
    },
    jobsDone() {
      this.removeErrors()
      this.$router.replace('/completed')
    }
  }
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
