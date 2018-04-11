const API_URL = '/api/'
export default {
  getNewList (context, params) {
    return context.$http.get(API_URL + 'newList', {params})
  },
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
