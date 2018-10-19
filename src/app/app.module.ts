import { TripDetailComponent } from './components/trips/trip-detail/trip-detail.component';
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
import { PoiRatingFilterPipe } from './shared/pipes/poi-rating-filter.pipe';
import { TripCreateComponent } from './components/trips/trip-create/trip-create.component';
import { TripFormComponent } from './components/trips/trip-form/trip-form.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
import { TripListComponent } from './components/trips/trip-list/trip-list.component';
import { PoiListTextComponent } from './components/pois/poi-list-text/poi-list-text.component';
import { environment } from './../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
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
    PoiRatingFilterPipe,
    TripCreateComponent,
    TripFormComponent,
    TripDetailComponent,
    UserEditComponent,
    TripListComponent,
    PoiListTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapApi,
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
