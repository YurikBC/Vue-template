// export default function getConstants () {
//   // Available routes
//   const LOGIN = 'login'
//   const RESET = 'reset'
//   const FORGOT = 'forgot'
//   const HOME = 'Home'
//   const COMPANIES = 'companies'
//   const HISTORY = 'history'
//   const RESET_PASSWORD_MESSAGE = 'ResetMessagePage'
//   const RESET_PASSWORD_PAGE = 'ResetPasswordPage'
//   const MAINTENANCE_PAGE = 'MaintenancePage'
//   const SIGN_UP_PAGE = 'SignUpPage'
//   const PASSWORD_PAGE = 'PasswordPage'
//   const SIGN_IN_PAGE = 'SignInPage'
//   const LICENSE_PAGE = 'LicensePage'
//   const REPORT_PAGE = 'ReportPage'
//   const FILTER_PAGE = 'FilterPage'
//   const PROFILE = 'Profile'
//   const ROUTES = [
//     LOGIN,
//     RESET,
//     FORGOT,
//     COMPANIES,
//     HISTORY
//   ]
//   const AUTH_PROCESSES = [
//     RESET_PASSWORD_MESSAGE,
//     RESET_PASSWORD_PAGE,
//     MAINTENANCE_PAGE,
//     SIGN_UP_PAGE,
//     PASSWORD_PAGE,
//     SIGN_IN_PAGE,
//     LICENSE_PAGE,
//     REPORT_PAGE
//   ]
//
//   // Available field names
//   const EMAIL = 'email'
//   const PASSWORD = 'password'
//   const FULL_NAME = 'name'
//   const PASSWORD_CONFIRM = 'passwordConfirm'
//   const ROLE = 'role'
//
//   const SCRIPTS = {
//     ANALYTICS: "https://www.google-analytics.com/analytics.js"
//   }
//
//   let API_URL = ''
//   let API_HOST = 'api'
//   let CLIENT_SECRET = ''
//   let CLIENT_ID = ''
//
//   if (process.env.NODE_ENV === 'development') {
//     CLIENT_SECRET = 'gsJtwI6EGbyJg37tg5B6hafVc6KymfbSCfFd4Z7i'
//     CLIENT_ID = 2
//     API_URL = window.location.origin
//     API_HOST = 'api'
//   }
//
//   if (process.env.NODE_ENV === 'production') {
//     CLIENT_SECRET = 'l5iFCgiRzs4NIJo4Eo66fLSZPcaBaQdcBjihNTNx'
//     CLIENT_ID = 2
//     API_URL = window.location.origin
//     API_HOST = 'api'
//   }
//   // http://vclist.exposit.com
//   // https://192.168.5.13
//   if (process.env.NODE_ENV === 'local') {
//     CLIENT_SECRET = 'gsJtwI6EGbyJg37tg5B6hafVc6KymfbSCfFd4Z7i'
//     CLIENT_ID = 2
//     // API_URL = 'http://vclist.exposit.com'
//     API_URL = 'http://localhost:8080'
//     API_HOST = 'api'
//   }
//
//
//   const GOOGLE_API = 'AIzaSyAzfsrgavHXGI40fsPDRhkusePiWWykprg'
//   const ACCESS_TOKEN = 'accessToken'
//   const REFRESH_TOKEN = 'refreshToken'
//   const ACCESS_TOKEN_EXPIRES = 'accessEexpires'
//   const REFRESH_TOKEN_EXPIRES = 'refreshEexpires'
//   const BEFORE_ACTIVE_ROUTER = 'beforeActiveRouter'
//
//   // Errors
//   const UNAUTHORIZED = 'Unauthorized'
//   const LOGIN_ERROR = 307
//   const SIGNUP_ERROR = 304
//   const MAINTENANCE_STATUS_ERROR = 503
//
//   const validationMessages = {
//     'name': {
//       'required': "Don't be shy, share your name here",
//       'minlength': 'Hmm, your name is too short',
//       'maxlength': 'Hmm, your name is too long',
//       'pattern': 'Hmm, sure this is a valid name?'
//     },
//     'email': {
//       'required': 'We need a valid email for you',
//       'pattern': 'We need a valid email for you'
//     },
//     'password': {
//       'required': 'You are missing a password',
//       'minlength': 'Too short of a password',
//       'maxlength': 'Too large of a password'
//     },
//     'passwordConfirm': {
//       'required': 'You are missing a password',
//       'minlength': 'Too short of a password',
//       'validateEqual': "Passwords don't match"
//     }
//   }
//
//   return {
//     LOGIN,
//     RESET,
//     FORGOT,
//     HOME,
//     COMPANIES,
//     HISTORY,
//     AUTH_PROCESSES,
//     EMAIL,
//     PASSWORD,
//     FULL_NAME,
//     PASSWORD_CONFIRM,
//     ROLE,
//     ROUTES,
//     CLIENT_ID,
//     ACCESS_TOKEN,
//     ACCESS_TOKEN_EXPIRES,
//     REFRESH_TOKEN_EXPIRES,
//     REFRESH_TOKEN,
//     BEFORE_ACTIVE_ROUTER,
//     UNAUTHORIZED,
//     LOGIN_ERROR,
//     SIGNUP_ERROR,
//     API_URL,
//     GOOGLE_API,
//     validationMessages,
//     CLIENT_SECRET,
//     API_HOST,
//     MAINTENANCE_STATUS_ERROR,
//     RESET_PASSWORD_MESSAGE,
//     RESET_PASSWORD_PAGE,
//     MAINTENANCE_PAGE,
//     SIGN_UP_PAGE,
//     PASSWORD_PAGE,
//     SIGN_IN_PAGE,
//     LICENSE_PAGE,
//     REPORT_PAGE,
//     HOME,
//     FILTER_PAGE,
//     PROFILE,
//     SCRIPTS
//   }
// }
