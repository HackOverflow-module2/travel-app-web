import { UserService } from './../../../shared/services/user.service';
import { User } from './../../../shared/models/user.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.less']
})
export class UserCreateComponent implements OnInit {

  user: User = new User()

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmitCreateUser(registerForm): void {
    if(registerForm.valid) {
      this.userService.create(this.user).subscribe(()=> {
        this.router.navigate(['profile', this.user.id])
      })
    }
  }

}
