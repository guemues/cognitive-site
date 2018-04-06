import showBlogs from '../components/showBlogs.vue';
import newTest from '../components/newTest.vue';
import question from '../components/question.vue';
import panas from '../components/Panas.vue';
import panasfinal from '../components/Panasfinal.vue';
import colortest from '../components/colortest.vue';

export default [
  {path:'/',component: newTest},
  {path:'/show',component: showBlogs},
  {path:'/add', component: newTest},
  {path: '/question', component: question},
  {path: '/panas', component: panas},
  {path: '/panasfinal', component: panasfinal},
  {path: '/colortest', component:colortest }

]
