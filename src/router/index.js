import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ExamSelect from '@/pages/index/ExamSelect'
import RandomExam from '@/pages/examType/RandomExam'
import Index from '@/pages/index/Index'
import SubjectOne from '@/pages/index/SubjectOne'
import trys from '@/pages/try/trys'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/exam',
      name: 'RandomExam',
      component: RandomExam
    },
    {
      path: '/home',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/home/one',
          component: SubjectOne
        }
      ]
    },
   
    {
      path: '/ExamSelect',
      name: 'ExamSelect',
      component: HelloWorld
    },
    {
      path: '/trys',
      name: 'try',
      component: trys
    }
  ]
})
