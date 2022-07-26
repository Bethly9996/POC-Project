import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create.component';
import { PatientinfoComponent } from './patientinfo/patientinfo.component';


import { CreateRoutingModule } from './create-routing.module';


@NgModule({
  declarations: [
    // CreateComponent,

  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    FormsModule
  ]
})
export class CreateModule { }
