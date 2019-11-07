import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ExamSelect from '@/pages/index/ExamSelect'
import RandomExam from '@/pages/examType/RandomExam'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/exam',
      name: 'RandomExam',
      component: RandomExam
    },
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/ExamSelect',
      name: 'ExamSelect',
      component: ExamSelect
    }
  ]
})
