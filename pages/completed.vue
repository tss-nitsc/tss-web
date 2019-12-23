<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card v-if="isLogin">
        <v-card-title class="headline">発券完了</v-card-title>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{
              organization.organizationName
            }}</v-list-item-title>
            <v-list-item-title>{{
              organization.currentTicketNumber
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
        currentTicketNumber: ''
      }
    }
  }
}
</script>
