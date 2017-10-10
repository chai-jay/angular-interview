import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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

}
