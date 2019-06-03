import Vue from 'vue'
import Router from 'vue-router'
import baiyajin from '@/components/baiyajin'
import bai20 from '@/components/20.组件-组件中的data.vue'

import yungou_index from '@/components/yungou_index.vue'
import Foodie from '@/components/Foodie.vue'
import Hotel from '@/components/Hotel.vue'
import Tourism from '@/components/Tourism.vue'
import Map from '@/components/Map.vue'
import excelTest from '@/components/excelTest.vue'

import ProvinceTemplate from '@/components/ProvinceTemplate.vue'
import ShoppingTemplate from '@/components/ShoppingTemplate.vue'


import imageTemplate from '@/components/imageTemplate.vue'


Vue.use(Router)

/*解决跨域*/


export default new Router({
  menus:[
    {
      icon:"",
      name:"",
      path:"/bai20",
    }
  ],
  /*项目不以#号访问*/
  mode:'history',
  routes: [
    {
      path: '/index.html',
      name: 'index.html',
      component: yungou_index
    },{
      path: '/bai20',
      name: 'bai20',
      component: bai20
    },{
      path: '/baiyajin',
      name: 'baiyajin',
      component: baiyajin
    },{
      path: '/Tourism',
      name: 'Tourism',
      component: Tourism
    },{
      path: '/Hotel',
      name: 'Hotel',
      component: Hotel
    },{
      path: '/Foodie',
      name: 'Foodie',
      component: Foodie
    },{
      path: '/Map',
      name: 'Map',
      component: Map
    },{
      path: '/ProvinceTemplate',
      name: 'ProvinceTemplate',
      component: ProvinceTemplate
    },{
      path: '/ShoppingTemplate',
      name: 'ShoppingTemplate',
      component: ShoppingTemplate
    },{
      path: '/imageTemplate',
      name: 'imageTemplate',
      component: imageTemplate
    },{
      path: '/excelTest',
      name: 'excelTest',
      component: excelTest
    }
  ]


})

