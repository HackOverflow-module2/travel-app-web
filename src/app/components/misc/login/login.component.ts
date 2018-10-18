import { User } from './../../../shared/models/user.model';
import { SessionService } from './../../../shared/services/session.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  apiError;


  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
  }

  onClickLogin(loginForm): void {
    if(loginForm.valid) {
      this.sessionService.authenticate(this.user)
      .subscribe((user) => {
        this.router.navigate(['/']);
      });
    }
  }
}
