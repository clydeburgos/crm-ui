import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { MatSnackBar } from '@angular/material';

// import { ApiService } from 'src/app/_shared/services/api.service';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.scss']
})
export class ActivationComponent implements OnInit {
  private _formGroup: FormGroup;

  constructor(
    // private api: ApiService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    // private snackBar: MatSnackBar
  ) {
    // this._formGroup = new FormGroup({
    //   id: new FormControl(null),
    //   username: new FormControl(null, [Validators.required]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    //   confirmPassword: new FormControl(null, [Validators.required])
    // }, {
    //   validators: (control: AbstractControl): { [key: string]: boolean } => {
    //     var password = control.get('password').value;
    //     var confirmPassword = control.get('confirmPassword').value;

    //     return password === confirmPassword ? null : { passwordMismatch: true };
    //   }
    // });
  }

  ngOnInit() {
    let username = this.activeRoute.snapshot.params["username"];
    let code = this.activeRoute.snapshot.params["code"];
  }

  get form() {
    return this._formGroup;
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  public submit() {
    if (this.form.invalid) {
      (<any>Object).values(this.form.controls).forEach(control => {
        control.markAsTouched();
      });

      return;
    }
  }
}
