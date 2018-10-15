import { User } from './../../../shared/models/user.model';
import { SessionService } from './../../../shared/services/session.service';
import { map } from 'rxjs/operators';
import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User = new User();
  
  constructor(private userService: UserService, private sessionService: SessionService) { }

  ngOnInit() {

    this.user = this.sessionService.user;
    console.log(this.user);
    const userId = this.user.id;
  }


}
