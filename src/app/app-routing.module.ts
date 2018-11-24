import { TripListComponent } from './components/trips/trip-list/trip-list.component';
import { PoiListTextComponent } from './components/pois/poi-list-text/poi-list-text.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
import { TripDetailComponent } from './components/trips/trip-detail/trip-detail.component';
import { PoiDetailComponent } from './components/pois/poi-detail/poi-detail.component';
import { PoiCreateComponent } from './components/pois/poi-create/poi-create.component';
import { LoginComponent } from './components/misc/login/login.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/misc/home/home.component';
import { ListComponent } from './components/pois/list/list.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { IsAuthenticatedGuard } from './shared/guards/is-authenticated.guard';
import { TripEditComponent } from './components/trips/trip-edit/trip-edit.component';


const routes: Routes = [
  { path: '', canActivate: [IsAuthenticatedGuard], component: HomeComponent },
  { path: 'route', canActivate: [IsAuthenticatedGuard], component: ListComponent },
  { path: 'profile/:id', canActivate: [IsAuthenticatedGuard], component: UserDetailComponent  },
  { path: 'profile/:id/edit', canActivate: [IsAuthenticatedGuard], component:   UserEditComponent },

  { path: 'login', component: LoginComponent },
  { path: 'pois',  canActivate: [IsAuthenticatedGuard], component: PoiCreateComponent },
  { path: 'pois/list',  canActivate: [IsAuthenticatedGuard], component: PoiListTextComponent },

  { path: 'pois/:id', canActivate: [IsAuthenticatedGuard], component: PoiDetailComponent },
  { path: 'register', component: UserCreateComponent },
  { path: 'trips/list', canActivate: [IsAuthenticatedGuard], component: TripListComponent },
  { path: 'trips/:id', canActivate: [IsAuthenticatedGuard], component: TripDetailComponent },
  { path: 'trips/:id/edit', canActivate: [IsAuthenticatedGuard], component: ListComponent },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
