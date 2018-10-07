import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/misc/home/home.component';
import { MapComponent } from './components/map/map.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'maps', component: MapComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
