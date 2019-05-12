import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private _formGroup: FormGroup;

  constructor(
    private router: Router,
  ) {
    this._formGroup = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      remember: new FormControl(true)
    });
  }

  ngOnInit() {
    if (localStorage.getItem("Authorization")) {
      this.router.navigate(["/portal"]);
    }
  }

  get form() {
    return this._formGroup;
  }

  public isAuthenticating: boolean = false;

  public login() {
    this.isAuthenticating = true;
    this.form.disable();
    this.form.enable();
  }
}
