import Vue from 'vue';
import Router from 'vue-router';
import PreviewPage from '@/components/PreviewPage';
import PlannerPage from '@/components/PlannerPage';
import Conditional from '@/components/examples/conditional';
import Lifecycle from '@/components/examples/lifecycle';
import Looping from '@/components/examples/looping';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/preview',
      name: 'PreviewPage',
      component: PreviewPage
    },
    {
      path: '/',
      name: 'PlannerPage',
      component: PlannerPage
    },
    {
      path: '/conditional',
      name: 'Conditional',
      component: Conditional
    },
    {
      path: '/looping',
      name: 'Looping',
      component: Looping
    },
    {
      path: '/lifecycle',
      name: 'Lifecycle',
      component: Lifecycle
    }
  ]
});
