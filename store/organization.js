import firebase from 'firebase/app'

export const state = () => ({
  organization: null
})

export const mutations = {
  setOrganization(state, payload) {
    state.organization = payload
  }
}

export const actions = {
  incrementCurrentTicketNumber({ commit, state, dispatch }, payload) {
    commit('setBusy', true, { root: true })
    commit('clearError', null, { root: true })
    const db = this.$fireApp.firestore()
    db.collection('organizations')
      .doc(payload.id)
      .update({
        currentTicketNumber: firebase.firestore.FieldValue.increment(1),
        updateAt: new Date().toISOString()
      })
      .then(() => {
        dispatch('fetchOrganization', payload)
        commit('setJobDone', true, { root: true })
        commit('setBusy', false, { root: true })
      })
  },
  async fetchOrganization({ commit, state }, payload) {
    const db = this.$fireApp.firestore()
    const querySnapshot = await db
      .collection('organizations')
      .doc(payload.id)
      .get()

    const organization = {
      organizationName: querySnapshot.data().name,
      currentTicketNumber: querySnapshot.data().currentTicketNumber,
      confirmedTicketNumber: querySnapshot.data().confirmedTicketNumber
    }
    commit('setOrganization', organization)
  },
  async resetTicketNumber({ commit, state, dispatch }, payload) {
    commit('setBusy', true, { root: true })
    commit('clearError', null, { root: true })
    const db = this.$fireApp.firestore()
    await db
      .collection('organizations')
      .doc(payload.id)
      .update({
        currentTicketNumber: 0,
        confirmedTicketNumber: 0,
        updateAt: new Date().toISOString()
      })
      .then(() => {
        dispatch('fetchOrganization', payload)
        commit('setBusy', false, { root: true })
        commit('setJobDone', true, { root: true })
      })
  },
  incrementConfirmedTicketNumber({ commit, state, dispatch }, payload) {
    commit('setBusy', true, { root: true })
    commit('clearError', null, { root: true })
    const db = this.$fireApp.firestore()
    db.collection('organizations')
      .doc(payload.id)
      .update({
        confirmedTicketNumber: firebase.firestore.FieldValue.increment(1),
        updateAt: new Date().toISOString()
      })
      .then(() => {
        dispatch('fetchOrganization', payload)
        commit('setJobDone', true, { root: true })
        commit('setBusy', false, { root: true })
      })
  }
}

export const getters = {
  organization(state) {
    return state.organization
  }
}
