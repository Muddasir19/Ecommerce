import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../app-services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private _authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  public onSubmit() {
    const payload = this.loginForm.getRawValue();
    this.checkUser(payload.userName, payload.password);
  }

  public checkUser(username: any, password: any) {
    const userFound: any = this._authService.users.find(
      (user) => user.username == username && user.password == password
    );
    if (!userFound) {
      this.show('Enter Correct Username & password');
      return;
    }
    userFound.isLoggedIn = true;
    this.show('Sucessfully login');

    this._authService.loggedInUsername.next(userFound.username);
    localStorage.setItem('username', userFound.username);
    this._authService.loggedInUser.next(userFound);

    this._authService.loggedInUser
      .pipe(take(1))
      .subscribe((e) => this.router.navigate(['/home']));
  }

  public show(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  getuser() {
    this._authService.getSingleUser().subscribe((resp) => {
      console.log(resp);
    });
  }
}
