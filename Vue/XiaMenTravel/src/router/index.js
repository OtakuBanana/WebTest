import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import xmgk from '@/components/xmgk'
import lyzx from '@/components/lyzx'
import jq from '@/components/jq'
import ms from '@/components/ms'
import List1 from '@/components/index/list1'
import List2 from '@/components/index/list2'
import List3 from '@/components/index/list3'
import List4 from '@/components/index/list4'
import List5 from '@/components/index/list5'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  linkActiveClass: 'active', //自定义active类名
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: index,
      children: [
        {path: '/', redirect: 'list1'},
        {path: 'list1', component: List1, meta: {title: '海上花园，诗意厦门', index:0}},
        {path: 'list2', component: List2, meta: {index: 0}},
        {path: 'list3', component: List3, meta: {index: 0}},
        {path: 'list4', component: List4, meta: {index: 0}},
        {path: 'list5', component: List5, meta: {index: 0}},
      ],
      meta: {title: '海上花园，诗意厦门', index: 0}
    },
    {
      path: '/xmgk',
      name: 'xmgk',
      component: xmgk,
      meta: {title: '厦门概况', index: 1}
    },
    {
      path: '/lyzx',
      name: 'lyzx',
      component: lyzx,
      meta: {title: '旅游资讯', index: 2}
    },
    {
      path: '/jq',
      name: 'jq',
      component: jq,
      meta: {title: '景区', index: 3}
    },
    {
      path: '/ms',
      name: 'ms',
      component: ms,
      meta: {title: '美食', index: 4}
    }
  ]
})
router.beforeEach((to, from, next) => {
  if(to.meta.title)
      document.title = to.meta.title
  next()
})
export default router
