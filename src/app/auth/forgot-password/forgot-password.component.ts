import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
// import { ApiService } from '../../_shared/services/api.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public sendToEmail(email: string) {

  }
}
