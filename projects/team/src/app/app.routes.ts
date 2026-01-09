import { Routes } from '@angular/router';
import { Layout, NotFound, SignIn } from 'library';
import { Dashboard } from './admin/dashboard/dashboard';
import { Advertisers } from './admin/advertisers/advertisers';
import { Database } from './admin/database/database';
import { Settings } from './admin/settings/settings';
import { Account } from './admin/account/account';
import { Users } from './admin/users/users';
import { Edit } from './admin/edit/edit';
import { Create } from './admin/create/create';
import { Products } from './admin/products/products';
import { AffiliateLinks } from './admin/affiliate-links/affiliate-links';
import { Details } from './admin/details/details';
import { Platforms } from './admin/platforms/platforms';
import { Transactions } from './admin/transactions/transactions';
import { Alerts } from './admin/alerts/alerts';

export const routes: Routes = [

  // redirection par défaut
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // login
  {
    path: 'login',
    component: Layout,
    data: { layoutType: 'sign-in' },
    children: [
      {
        path: '',
        component: SignIn
      }
    ]
  },

  // admin ASIDE
  {
    path: 'admin/dashboard', component: Layout, data: { layoutType: 'admin' },
    children: [
      { path: '', component: Dashboard } // <-- données directement ici
    ]
  },
  {
    path: 'admin/database', component: Layout, data: { layoutType: 'admin' },
    children: [
      { path: '', component: Database }
    ]
  },
  {
    path: 'admin/settings', component: Layout, data: { layoutType: 'admin' },
    children: [
      { path: '', component: Settings }
    ]
  },

  // admin SUBSLINKS
  {
    path: 'admin/database/account', component: Layout, data: { layoutType: 'admin' },
    children: [
      { path: '', component: Account }
    ]
  },
  {
    path: 'admin/database/users', component: Layout, data: { layoutType: 'admin' },
    children: [
      { path: '', component: Users }
    ]
  },
  {
    path: 'admin/database/users/:id/edit', component: Layout, data: { layoutType: 'admin' },
    children: [
      { path: '', component: Edit }
    ]
  },
  {
    path: 'admin/database/users/create', component: Layout, data: { layoutType: 'admin' },
    children: [
      { path: '', component: Create }
    ]
  },
  {
    path: 'admin/database/products', component: Layout, data: { layoutType: 'admin' },
    children: [
      { path: '', component: Products }
    ]
  },
  {
    path: 'admin/database/products', component: Layout, data: { layoutType: 'admin' },
    children: [
      { path: ':id', component: Details }
    ]
  },
  {
    path: 'admin/database/advertisers', component: Layout, data: { layoutType: 'admin' },
    children: [
      { path: '', component: Advertisers }
    ]
  },
  {
    path: 'admin/database/affiliate-links', component: Layout, data: { layoutType: 'admin' },
    children: [
      { path: '', component: AffiliateLinks }
    ]
  },
  {
    path: 'admin/database/platforms', component: Layout, data: { layoutType: 'admin' },
    children: [
      { path: '', component: Platforms }
    ]
  },
  {
    path: 'admin/database/transactions', component: Layout, data: { layoutType: 'admin' },
    children: [
      { path: '', component: Transactions }
    ]
  },
  {
    path: 'admin/database/alerts', component: Layout, data: { layoutType: 'admin' },
    children: [
      { path: '', component: Alerts }
    ]
  },






  // page 404 (NotFound)
  {
    path: '**',
    component: Layout,
    data: { layoutType: 'not-found' },
    children: [
      { path: '', component: NotFound }
    ]
  }
];
