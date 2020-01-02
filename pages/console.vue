<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card v-if="isLogin">
        <v-card-title class="headline" max-width="1000">
          管理画面
        </v-card-title>
        <v-card class="mx-auto" max-width="344">
          <v-card-text>
            <div>組織名</div>
            <p class="display-1 text--primary text-center">
              {{ organization.organizationName }}
            </p>
          </v-card-text>
          <v-card-text>
            <div>整理番号</div>
            <p class="display-3 text--primary text-center">
              {{ organization.currentTicketNumber }}
            </p>
          </v-card-text>
          <v-card-text>
            <div>確認済み整理番号</div>
            <p class="display-3 text--primary text-center">
              {{ organization.confirmedTicketNumber }}
            </p>
          </v-card-text>
          <v-form
            @submit.prevent="incrementConfirmedTicketNumber"
            class="text-center"
          >
            <v-btn block width="330" color="primary" dark type="submit"
              >確認済み整理番号の更新</v-btn
            >
          </v-form>
          <v-card-text>
            <div>DANGER</div>
          </v-card-text>
          <v-form @submit.prevent="resetTicketNumber" class="text-center">
            <v-btn block width="330" color="error" dark type="submit"
              >Reset</v-btn
            >
          </v-form>
        </v-card>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
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
        currentTicketNumber: '',
        confirmedTicketNumber: ''
      }
    }
  },
  methods: {
    resetTicketNumber() {
      const payload = this.$store.getters.user
      this.$store.dispatch('organization/resetTicketNumber', payload)
    },
    incrementConfirmedTicketNumber() {
      const payload = this.$store.getters.user
      this.$store.dispatch(
        'organization/incrementConfirmedTicketNumber',
        payload
      )
    },
    jobsDone() {
      this.removeErrors()
      // this.$router.replace('/completed')
    }
  }
}
</script>
