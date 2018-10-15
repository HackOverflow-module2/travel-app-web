import { UserEditComponent } from './components/users/user-edit/user-edit.component';
import { TripDetailComponent } from './components/trips/trip-detail/trip-detail.component';
import { PoiDetailComponent } from './components/pois/poi-detail/poi-detail.component';
import { PoiCreateComponent } from './components/pois/poi-create/poi-create.component';
import { LoginComponent } from './components/misc/login/login.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/misc/home/home.component';
import { MapComponent } from './components/map/map.component';
import { ListComponent } from './components/pois/list/list.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { IsAuthenticatedGuard } from './shared/guards/is-authenticated.guard';


const routes: Routes = [
  { path: '', canActivate: [IsAuthenticatedGuard], component: HomeComponent },
  { path: 'maps', canActivate: [IsAuthenticatedGuard], component: MapComponent },
  { path: 'route', canActivate: [IsAuthenticatedGuard], component: ListComponent },
  { path: 'profile', canActivate: [IsAuthenticatedGuard], component: UserDetailComponent  },
  { path: 'profile/edit', canActivate: [IsAuthenticatedGuard], component:   UserEditComponent },

  { path: 'login', component: LoginComponent },
  { path: 'pois',  canActivate: [IsAuthenticatedGuard], component: PoiCreateComponent },
  { path: 'pois/:id', canActivate: [IsAuthenticatedGuard], component: PoiDetailComponent },
  { path: 'register', component: UserCreateComponent },
  { path: 'trips/:id', canActivate: [IsAuthenticatedGuard], component: TripDetailComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
