
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

export const APP_ROUTES: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '', redirectTo: '/shopping-list', pathMatch: 'full' },
  { path: '**', component: ShoppingListComponent }

];
