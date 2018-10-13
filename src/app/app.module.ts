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
import { PoiFormComponent } from './components/pois/poi-form/poi-form.component';
import { PoiCreateComponent } from './components/pois/poi-create/poi-create.component';
import { PoiDetailComponent } from './components/pois/poi-detail/poi-detail.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { ReviewCreateComponent } from './components/reviews/review-create/review-create.component';
import { ReviewListComponent } from './components/reviews/review-list/review-list.component';
import { PoisFilterPipe } from './shared/pipes/pois-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MapComponent,
    ListComponent,
    LoginComponent,
    UserDetailComponent,
    PoiFormComponent,
    PoiCreateComponent,
    PoiDetailComponent,
    UserCreateComponent,
    ReviewCreateComponent,
    ReviewListComponent,
    PoisFilterPipe,
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
