import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { User } from './../../../shared/models/user.model';
import { PoiCreateComponent } from './../../pois/poi-create/poi-create.component';
import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.less']
})
export class UserCreateComponent implements OnInit {

  user: User = new User();

  constructor(private UserService, private router: Router) { }

  ngOnInit() {
  }

  // onSubmitCreateUser():void {
  //   this.UserService.create(this.user).subscribe(()=> {
  //     this.router.navigate(['/']);
  //   }); 
  // }

}
