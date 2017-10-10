import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';

import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule
  ],
  declarations: [FormComponent]
})
export class FormModule { }
