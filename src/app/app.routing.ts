import {Routes, RouterModule, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { RegisterComponent } from './register/register.component';


import {HomeComponent} from './home/home.component';


export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'about', component: AboutComponent, data: {title: 'About'}},
  {path: 'gallerie', component: GallerieComponent, data: {title: 'Gallerie'}},
  {path: 'register', component: RegisterComponent, data: {title: 'Registrieren'}},


];

export const appRouting = RouterModule.forRoot(appRoutes);

export const routingComponents = [HomeComponent];
