import { ApiError } from './../../../shared/models/api-error.model';
import { Router } from '@angular/router';
import { SessionService } from './../../../shared/services/session.service';
import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.less']
})
export class UserEditComponent implements OnInit {

  user: User = new User();
  apiError: ApiError;

  constructor(private userService: UserService, private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
    this.user = this.sessionService.user;
  }

  onChangeImage(image: HTMLInputElement): void {
    if (image.files) {
      this.user.image = image.files[0];
    }
  }


  onClickEditUser(editForm) {
    if(editForm.valid) {
      const userId = this.user.id;
      this.userService.edit(userId, this.user).subscribe((user: User) => {
        this.router.navigate(['/profile'])
      },
      (error: ApiError) => this.apiError = error)
    }

  }


}
