import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Watchlist } from './watchlist/watchlist';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'watch-list',
    component: Watchlist,
  },
  {
    path: '**',
    component: NotFound,
  },
];
