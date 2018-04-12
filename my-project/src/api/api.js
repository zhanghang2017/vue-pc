const API_URL = '/api/'
// const CODE_URL = '/CaptchaImgPass'
// const LOGIN_URL = ''
export default {
  getNewList (context, params) {
    return context.$http.get(API_URL + 'newList', {params})
  },
  // getImg (context, params) {
  //   return context.$http.get(CODE_URL, {params, responseType: 'arraybuffer'})
  // }
  getProductList (context, params) {
    return context.$http.get(API_URL + 'productList', {params})
  },
  getBoardList  (context, params) {
    return context.$http.get(API_URL + 'boardList', {params})
  },
  getLogin (context, params) {
    return context.$http.post(API_URL + 'login', {params})
  }
}
