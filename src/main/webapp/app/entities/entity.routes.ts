import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'task',
    data: { pageTitle: 'Tasks' },
    loadChildren: () => import('./task/task.routes'),
  },
  {
    path: 'category',
    data: { pageTitle: 'Categories' },
    loadChildren: () => import('./category/category.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
