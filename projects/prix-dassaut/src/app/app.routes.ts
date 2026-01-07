import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Product } from './product/product';
import { Detail } from './detail/detail';
import { Legals } from './legals/legals';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'products', component: Product }, // l'url /products est dans le code de la library
  { path: 'offers/:category/:id', component: Detail }, // l'url /offers est dans le code de la library
  { path: 'legals/:legalType', component: Legals },
  { path: '**', component: NotFound },
];
