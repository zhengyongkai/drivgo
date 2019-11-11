import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ExamSelect from '@/pages/index/ExamSelect'
import RandomExam from '@/pages/examType/RandomExam'
import Index from '@/pages/index/Index'
import ExamExtance from '@/pages/index/ExamExtance'
import SubjectOne from '@/pages/index/SubjectOne'
import SubjectFour from '@/pages/index/SubjectFour'
import SubjectTwo from '@/pages/index/skill/SubjectTwo'
import SkillExtance from '@/pages/index/skill/SkillExtance'
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
          path: '/home/ExamExtance' ,
          component: ExamExtance,
          children: [
            {
              path: '/one',
              component: SubjectOne
            },
            {
              path: '/four',
              component: SubjectFour
            },
          ]
        },

        {
          path: '/home/SkillExam',
          component: SkillExtance
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
