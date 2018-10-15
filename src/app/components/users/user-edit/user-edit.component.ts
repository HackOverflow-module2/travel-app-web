import { Router } from '@angular/router';
import { SessionService } from './../../../shared/services/session.service';
import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.less']
})
export class UserEditComponent implements OnInit {

  @Input() user: User = new User();

  constructor(private userService: UserService, private sessionService: SessionService, private router: Router) { }

  ngOnInit() {

  }

  onClickEditUser() {
    this.userService.edit(this.user.id, this.user).subscribe((user: User)=>{
      this.router.navigate(['/profile'])
    })

    
  }

}
