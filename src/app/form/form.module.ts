import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FormRoutingModule } from './form-routing.module';

import { FormService } from './form.service';

import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormRoutingModule
  ],
  declarations: [FormComponent],
  providers: [FormService]
})
export class FormModule { }
