// import store from "../../src/store/index"
// import api from './api'
//
// function fetchUserData() {
//   return api.getUserProfile()
// }
//
// function fetchCompaniesData() {
//   return api.fetchCompaniesData()
// }
//
// function fetchCompanyInfo (permalink) {
//   return api.fetchCompanyInfo(permalink)
// }
//
// function validateResetLink (value) {
//   return api.validateResetLink(value)
// }
//
// function getCompainesByLocation (location, type) {
//   return api.getCompainesByLocation(location, type)
// }
//
// function sendLoginData (email, password) {
//   return api.login(email, password)
// }
//
// function checkIsEmailValid (email) {
//   return api.checkIsEmailValid(email)
// }
//
// function sendNewPassword (token) {
//   return api.sendNewPassword(token)
// }
//
// function getVideo (url) {
//   return api.getVideo(url)
// }
// function checkIsSignUpEmailValid (email) {
//   return api.checkIsSignUpEmailValid(email)
// }
//
// // keywords start
// function submitKeywords () {
//   return api.submitKeywords()
// }
// // keywords end
//
// //  settings start
// function fetchSignUpDataOfUser () {
//   return api.fetchSignUpDataOfUser()
// }
//
// function sendSettingsData (data) {
//   return api.sendSettingsData(data)
// }
// // settings end
//
// function sendSignUpData(data) {
//   let item
//   for (item in data) {
//     if (!data[item]) {
//       delete data[item]
//     }
//   }
//   return api.sendSignUpData(data)
// }
//
// function getCoordinates (city) {
//   return api.getCoordinates(city)
// }
//
// export default {
//   sendLoginData,
//   fetchUserData,
//   fetchCompaniesData,
//   getCoordinates,
//   fetchCompanyInfo,
//   sendSignUpData,
//   sendSettingsData,
//   getVideo,
//   getCompainesByLocation,
//   checkIsEmailValid,
//   submitKeywords,
//   sendNewPassword,
//   validateResetLink,
//   checkIsSignUpEmailValid,
//   fetchSignUpDataOfUser
// }
