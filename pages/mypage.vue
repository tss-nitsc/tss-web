<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{ user.name }}</v-list-item-title>
            <v-list-item-title>{{ user.email }}</v-list-item-title>
            <v-list-item-title>{{
              organization.organizationName
            }}</v-list-item-title>
            <v-list-item-title>{{
              organization.currentTicketNumber
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-form @submit.prevent="incrementCurrentTicketNumber">
          <v-btn color="primary" type="submit">button</v-btn>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import apiJobMixin from '@/mixins/apiJobMixin'

export default {
  mixins: [apiJobMixin],
  computed: {
    user() {
      if (this.$store.getters.user) {
        return this.$store.getters.user
      }
      return {
        name: '',
        email: ''
      }
    },
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
  methods: {
    incrementCurrentTicketNumber() {
      const payload = this.$store.getters.user
      this.$store.dispatch('organization/incrementCurrentTicketNumber', payload)
    },
    jobsDone() {
      this.removeErrors()
    }
  }
}
</script>
