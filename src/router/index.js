import showBlogs from '../components/showBlogs.vue';
import newTest from '../components/newTest.vue';
import question from '../components/question.vue';
import panas from '../components/panas.vue';
import colortest from '../components/colortest.vue';

export default [
  {path:'/',component: newTest},
  {path:'/show',component: showBlogs},
  {path:'/add', component: newTest},
  {path: '/question', component: question},
  {path: '/panas/:is_before', component: panas},
  {path: '/colortest', component:colortest }

]
