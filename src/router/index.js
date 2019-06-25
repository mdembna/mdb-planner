import Vue from 'vue';
import Router from 'vue-router';
import PreviewPage from '@/components/PreviewPage';
import PlannerPage from '@/components/PlannerPage';

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
    }
  ]
});
