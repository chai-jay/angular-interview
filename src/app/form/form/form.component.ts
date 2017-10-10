import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { FormService } from './../form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  loginForm: FormGroup;
  user$: Observable<any>;

  constructor(private formBuilder: FormBuilder, private formService: FormService) { }

  ngOnInit() {
    // Use FormBuilder to build FormGroup
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    // Or define FormGroup and FormControls more explicitly
    // this.loginForm = new FormGroup({
    //   username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    //   password: new FormControl('', [Validators.required, Validators.minLength(8)])
    // });
  }

  public onSubmit(): void {
    const username = this.loginForm.get('username').value,
      password = this.loginForm.get('password').value;

    this.user$ = this.formService.login(username, password);
  }

}
