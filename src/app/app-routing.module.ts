import { LoginComponent } from './components/misc/login/login.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/misc/home/home.component';
import { MapComponent } from './components/map/map.component';
import { ListComponent } from './components/pois/list/list.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'maps', component: MapComponent },
  { path: 'route', component: ListComponent },
  { path: 'profile', component: UserDetailComponent  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
