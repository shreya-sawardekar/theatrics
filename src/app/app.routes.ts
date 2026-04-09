import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Watchlist } from './watchlist/watchlist';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home Page',
  },
  {
    path: 'watch-list',
    component: Watchlist,
    title: 'Watch List Page',
  },
  {
    path: 'watchlist',
    redirectTo: 'watch-list',
  },
  {
    path: '**',
    component: NotFound,
    title: 'Not Found Page',
  },
];
