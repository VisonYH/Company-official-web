import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../components/IndexPage.vue'
import detail from '../components/detail'
import detailForPage from '../components/detail/detaillForPage.vue'
import detailAnaPage from '../components/detail/detailAnaPage.vue'
import detailPubPage from '../components/detail/detailPubPage.vue'
import detailCouPage from '../components/detail/detailCouPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail,
      redirect: 'detail/analysis',
      children:[
        {
          path: 'analysis',
          component: detailAnaPage
        },
        {
          path: 'count',
          component: detailCouPage
        },
        {
          path: 'forecast',
          component: detailForPage
        },
        {
          path: 'publish',
          component: detailPubPage
        }
      ]
    }
  ]
})
