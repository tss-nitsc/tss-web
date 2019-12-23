<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card v-if="isLogin">
        <v-card-title class="headline">発券完了</v-card-title>
        <v-list-item>
          <v-list-item-content>
            <div>組織名</div>
            <v-list-item-title>{{
              organization.organizationName
            }}</v-list-item-title>
            <div>整理番号</div>
            <v-list-item-title>{{
              organization.currentTicketNumber
            }}</v-list-item-title>
          </v-list-item-content>
          <vue-qrcode
            v-if="qr.value"
            v-bind:options="qr.option"
            v-bind:value="qr.value"
          ></vue-qrcode>
        </v-list-item>
        <v-form @submit.prevent="clickOK" class="text-center">
          <v-btn block width="330" color="primary" dark type="submit">OK</v-btn>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import VueQrcode from '@chenfengyuan/vue-qrcode'
import apiJobMixin from '@/mixins/apiJobMixin'

export default {
  components: {
    VueQrcode
  },
  mixins: [apiJobMixin],
  computed: {
    qr() {
      const obj = this.$store.getters['organization/organization']
      let json = JSON.stringify(obj, function(key, value) {
        let ret = value
        // replacer: 数値も文字列に変換する
        if (typeof value === 'number') {
          ret = String(value)
        }
        return ret
      })
      if (obj == null) {
        json = ''
      }
      return {
        value: json,
        option: {
          errorCorrectionLevel: 'M',
          maskPattern: 0,
          margin: 10,
          scale: 2,
          width: 300,
          color: {
            dark: '#000000FF',
            light: '#FFFFFFFF'
          }
        }
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
    clickOK() {
      this.$router.replace('/')
    }
  }
}
</script>
