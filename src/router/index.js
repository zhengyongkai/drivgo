import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ExamSelect from '@/pages/index/ExamSelect'
import RandomExam from '@/pages/examType/RandomExam'
import Index from '@/pages/index/Index'
import ExamExtance from '@/pages/index/ExamExtance'
import SubjectOne from '@/pages/index/SubjectOne'
import SubjectFour from '@/pages/index/SubjectFour'
import SkillTwo from '@/pages/index/skill/SubjectTwo'
import SkillOne from '@/pages/index/skill/SubjectOne'
import SkillThree from '@/pages/index/skill/SubjectThree'
import SkillFour from '@/pages/index/skill/SubjectFour'
import SkillExtance from '@/pages/index/skill/SkillExtance'
import My from '@/pages/index/my/My'
import MajorExtance from '@/pages/index/majorpratice/MajorExtance'
import PageChange  from '@/pages/examType/PageChange';
import ErrorCollect from '@/pages/index/errorcollection/index';
import Collection from '@/pages/index/errorcollection/collection';
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
      path: '/exampc',
      name: 'PageChange',
      component: PageChange
    },
    {
      path: '/error',
      name:"errorcollection",
      component:ErrorCollect
    },
    {
      path: '/collection',
      name:"collection",
      component:Collection
    },
    {
      path: '/',
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
          component: SkillExtance,
          children:[
            {
              path: '/skill/one',
              component: SkillOne
            },
            {
              path: '/skill/two',
              component: SkillTwo
            },
            {
              path: '/skill/three',
              component: SkillThree
            },
            {
              path: '/skill/four',
              component: SkillFour
            },
          ]
        },{
           path: '/home/my',
           component: My
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
    },{
      path: '/major/extance',
      name: 'MajorExtance',
      component: MajorExtance
    }
  ]
})
