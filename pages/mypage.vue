<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
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
    }
  }
}
</script>
