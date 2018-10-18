import { Poi } from './../../../shared/models/poi.model';
import { Trip } from './../../../shared/models/trip.model';
import { TripService } from './../../../shared/services/trip.service';
import { User } from './../../../shared/models/user.model';
import { SessionService } from './../../../shared/services/session.service';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInfo } from '../../../shared/models/user-info.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User = new User();
  userId: string;
  userTrips: Array<Trip> = [];
  userPois: Array<Poi> =[];
  inUserProfile: boolean = true;
  showTrips: boolean = true;
  showPois: boolean = false;
  
  constructor(private userService: UserService, private sessionService: SessionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.sessionService.getItemLocalStorage();
    const userId = this.user.id;
    
    this.route.params.pipe(
      map(params => this.userId = params.id),
      switchMap((userId: string) => this.userService.getUserInfo(userId))
      ).subscribe((userInfo: UserInfo) => {
        this.userTrips = userInfo.trips;
        this.userPois = userInfo.pois;
      })
  }

  onClickShowTrips(): void {
    debugger;
    this.showTrips = true;
    this.showPois = false;
  }
  onClickShowPois(): void {
    this.showPois = true;
    this.showTrips = false;
  }



}


