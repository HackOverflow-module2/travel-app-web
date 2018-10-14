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


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'maps', component: MapComponent },
  { path: 'route', component: ListComponent },
  { path: 'profile', component: UserDetailComponent  },
  { path: 'login', component: LoginComponent },
  { path: 'pois', component: PoiCreateComponent },
  { path: 'pois/:id', component: PoiDetailComponent },
  { path: 'users', component: UserCreateComponent },
  { path: 'trips/:id', component: TripDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
