import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/misc/header/header.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/misc/home/home.component';
import { MapComponent } from './components/map/map.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/pois/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/misc/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MapComponent,
    ListComponent,
    LoginComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAEkL-jlLHB19M2VVbD52QgO2VkeMERovI',
      libraries: ['places']
    }),
    AgmDirectionModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
