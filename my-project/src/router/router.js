import IndexPage from '../pages/IndexPage.vue'
import LogFrom from '../components/LogFrom'
import RegFrom from '../components/RegFrom'
export default {
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
        default: IndexPage,
        log: LogFrom,
        reg: RegFrom
      }
    }
  ]

}
