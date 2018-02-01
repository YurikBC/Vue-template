// import store from '../../src/store'
import router from '../../src/router'

export const activate = () => {
  router.beforeEach((to, from, next) => {
    next()
    ensureState(to, from, next)
  })
}

function ensureState (route, from, next) {
  // let routeName = route.name
  // 3. Activate function with route settings
  // switch (routeName) {
  //   case RESET_PASSWORD_PAGE:
  //     return resetPasswordPageHandler(route)
  //   case RESET_PASSWORD_MESSAGE:
  //     return resetPasswordMessageHandler(from)
  //   case MAINTENANCE_PAGE:
  //     return maintenancePageHandler(route)
  //   case PROFILE:
  //     return profileSettingsHandler()
  //   case HOME:
  //     return homeHandler()
  //   case SIGN_UP_PAGE:
  //     return signUpPagehandler(route)
  //   case FILTER_PAGE:
  //     return filterPagehandler()
  //   case PASSWORD_PAGE:
  //     return passwordPagehandler()
  //   case SIGN_IN_PAGE:
  //     return loginPageHandler()
  //   default:
  //     return Promise.resolve()
  // }
}
//
// function profileSettingsHandler () {
//   store.dispatch('user/fetchUserProfile')
//   store.dispatch('user/FETCH_SIGN_UP_DATA_OF_USER')
// }
//
// function homeHandler () {
//   store.dispatch('user/fetchUserProfile')
//   if (store.state.activeCompany) {
//     store.dispatch('setActiveCompany', null)
//   }
//   store.dispatch('filter/UPDATE_FILTER_COUNTER')
//   store.commit('changeCompaniesLoadingStatus', ['companiesLoading', true])
//   store.dispatch('fetchCompaniesData')
// }
//
// function signUpPagehandler (route) {
//   if (route.query.email) {
//     store.commit('auth/setAuthData', [store.state.auth.questions[10].name, route.query.email])
//   }
//   let url = route.path
//   if (url !== `/signup/${1}-${store.state.auth.questions[0].name}` && !Object.keys(store.state.auth.authData).length) {
//     router.push(`/signup/${1}-${store.state.auth.questions[0].name}`)
//   }
// }
//
// function passwordPagehandler () {
//   store.commit('auth/setSignupErrorMessage', [])
//   store.commit('auth/setPasswordError', false)
//   let auth = storage('authData')
//   if (!auth || auth === 'null') {
//     let currentQuestionNumber = store.state.auth.currentQuestionNumber
//     router.push(`/signup/${currentQuestionNumber + 1}-${store.state.auth.questions[currentQuestionNumber].name}`)
//   }
// }
//
// function loginPageHandler () {
//   store.commit('auth/clearForm')
// }
//
// function filterPagehandler () {
//   store.dispatch('user/fetchUserProfile')
// }
//
// function maintenancePageHandler () {
//   network.fetchUserData().then(() => {
//     router.push('/')
//   }).catch(error => {
//     let errorStatus = getErrorStatus(error)
//     if (errorStatus && errorStatus !== MAINTENANCE_STATUS_ERROR) {
//       router.push('/')
//     }
//   })
// }
//
// function resetPasswordMessageHandler (from) {
//   if (from.name !== 'SignInPage' || !store.state.auth.processes.login.fields.email.value) {
//     router.push('/login')
//   }
// }
//
// function resetPasswordPageHandler (to) {
//   if (to.query.token && to.query.email) {
//     store.dispatch('auth/validateResetLink', [to.query.token, to.query.email])
//   } else {
//     router.push({ path: '/login' })
//   }
// }
