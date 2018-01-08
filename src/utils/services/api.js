// import axios from 'axios'
// import getConstants from '../constants'
// import storage from '../services/localStorageService'
// import getErrorStatus from '../methods/getErrorStatus'
// import router from '../../src/router'
// import store from '../../src/store'
// import FilterTypes from '../../src/store/modules/filter/types'
//
// const {
//   F1, F2, F3, F4, F5
// } = FilterTypes.getConstantFiltration()
//
// const {
//   CLIENT_ID,
//   API_URL,
//   GOOGLE_API,
//   API_HOST,
//   CLIENT_SECRET,
//   MAINTENANCE_STATUS_ERROR
// } = getConstants()
//
// function getHeader () {
//   let headers = {
//     'Content-Type': 'application/json',
//       'Accept': 'application/json'
//   }
//   return headers
// }
// function getHeaderWithToken () {
//   let token = storage('access_token')
//   let headers = {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//     'Authorization': 'Bearer ' + token
//   }
//   return headers
// }
// function getFilterParams () {
//   let filter = store.state.filter
//   let params = {
//     "investmentRecency": filter[F1],
//     "investmentFrequency": filter[F2],
//     "overallVCRelevancy": filter[F3],
//     "relevancyVCDescription": filter[F4],
//     "relevancyVCPortfolio": filter[F5]
//   }
//   return params
// }
//
// // Auth
// function getUserProfile () {
//   const url = `${API_URL}/${API_HOST}/user`
//   let options = {}
//   options.headers = getHeaderWithToken()
//   return _get(url, options)
// }
//
// function login (email, password) {
//   let data = {
//     "client_secret": CLIENT_SECRET,
//     'client_id' : CLIENT_ID,
//     "grant_type": "password",
//     "username": email,
//     "password": password,
//     "scope": "*"
//   }
//   let url = API_URL + '/oauth/token'
//   return _post(url, data)
// }
//
// function sendSignUpData (data) {
//   let url = `${API_URL}/${API_HOST}/register`
//   return _post(url, data)
// }
//
// function checkIsEmailValid (email) {
//   let value = email.trim()
//   let data = {
//     'email': value
//   }
//   let url = `${API_URL}/${API_HOST}/password/email`
//   return _post(url, data)
// }
//
// function checkIsSignUpEmailValid (email) {
//   let value = email.trim()
//   let options = {
//     params: {
//       'email': value
//     }
//   }
//   options.headers = getHeader()
//   let url = `${API_URL}/${API_HOST}/validate/email`
//   return _get(url, options)
// }
//
// function validateResetLink (value) {
//   let token = value[0]
//   let email = value[1]
//   let data = {
//     'email': email,
//     'token': token
//   }
//   let config = {}
//   config.headers = getHeader()
//   let url = `${API_URL}/${API_HOST}/password/reset/validate`
//   return _post(url, data, config)
// }
//
// function sendNewPassword (data) {
//   let email = data[0]
//   let token = data[1]
//   let password = store.state.auth.processes['resetPassword'].fields.newPassword.value
//   let password_confirmation = store.state.auth.processes['resetPassword'].fields.repeatPassword.value
//   let payload = {
//     'email': email,
//     'token': token,
//     'password': password,
//     'password_confirmation': password_confirmation
//   }
//   let config = {}
//   config.headers = getHeader()
//   let url = `${API_URL}/${API_HOST}/password/reset`
//   return _post(url, payload, config)
// }
// // Auth end
//
// // Companies Info
// function fetchCompaniesData () {
//   const url = `${API_URL}/${API_HOST}/investors`
//   let options = {}
//   options.params = getFilterParams()
//   options.headers = getHeaderWithToken()
//   return _get(url, options)
// }
//
// function fetchCompanyInfo (permalink) {
//   const url = `${API_URL}/${API_HOST}/investors/${permalink}`
//   let options = {}
//   options.headers = getHeaderWithToken()
//   return _get(url, options)
// }
//
// function getCompainesByLocation (locations, type) {
//   let options = {}
//   options.params = getFilterParams()
//   options.headers = getHeaderWithToken()
//   locations.forEach((locationObj) => {
//     let key = Object.keys(locationObj)[0]
//     let value = locationObj[key].length ? locationObj[key].join() : ''
//     if (value) {
//       options.params[key] = value
//     }
//   })
//   console.log(options.params)
//   const url = `${API_URL}/${API_HOST}/search/${type}`
//   return _get(url, options)
// }
//
// // map requests start
// function getVideo (url) {
//   return axios.get('https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/76979871&width=1000&height=1000')
// }
//
// function getCoordinates (city) {
//   return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${GOOGLE_API}&language=en`)
// }
// // map requests end
//
// // Companies Info end
//
// // keywords start
// function submitKeywords () {
//   let keywordsArray = [...store.state.keywords.keywordsList]
//   let data = {
//     'keywords': keywordsArray.join()
//   }
//   let config = {}
//   config.headers = getHeaderWithToken()
//   let url = `${API_URL}/${API_HOST}/user/keywords`
//   return _post(url, data, config)
// }
// //  keywords end
//
// // settings start
// function fetchSignUpDataOfUser () {
//   return new Promise ((resolve) => {
//     let data = {}
//     data.data = {
//       'raising': '1,000,000',
//       'first_name': 'Lorenzo',
//       'last_name': 'Sozzi',
//       'title': 'Designer',
//       'email': 'Lorenzo@aingel.ai',
//       'startup_name': 'Aingel',
//       'website': 'https://vclist.aingel.ai/',
//       'crunchbase_url': 'https://www.crunchbase.com/organization/aingel',
//       'raising_stage': 'Seed',
//       'raising_time': 'Already Raising'
//     }
//     resolve(data)
//   })
//   // let url = `${API_URL}/${API_HOST}/?????`
//   // let options = {}
//   // options.headers = getHeaderWithToken()
//   // return _get(url, options)
// }
// function sendSettingsData (data) {
//   let options = {}
//   options.headers = getHeaderWithToken()
//   let url = `${API_URL}/${API_HOST}/?????`
//   return _post(url, data, options)
// }
// // settings end
// function _get (url, options) {
//   return axios.get(url, options)
//     .then((response) => {
//       if (response) {
//         return response
//       }
//     }).catch((error) => {
//       if (error) {
//         _handleError(error)
//         return Promise.reject(error)
//       }
//     })
// }
//
// function _post (url, data, options) {
//   return axios.post(url, data, options)
//     .then((response) => {
//     if (response) {
//       return Promise.resolve(response)
//     }
//     }).catch((error) => {
//     if (error) {
//       _handleError(error)
//       return Promise.reject(error)
//     }
//   })
// }
//
// function _handleError (error) {
//   if (error.response.status === MAINTENANCE_STATUS_ERROR) {
//     router.push({path: '/maintenance'})
//   }
// }
//
// export default {
//   getCoordinates,
//   fetchCompaniesData,
//   fetchCompanyInfo,
//   fetchSignUpDataOfUser,
//   getUserProfile,
//   sendSignUpData,
//   sendSettingsData,
//   checkIsEmailValid,
//   getCompainesByLocation,
//   validateResetLink,
//   getVideo,
//   login,
//   submitKeywords,
//   sendNewPassword,
//   checkIsSignUpEmailValid
// }
//
