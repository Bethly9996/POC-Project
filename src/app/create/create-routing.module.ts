import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create.component';
import { PatientinfoComponent } from './patientinfo/patientinfo.component';

const routes: Routes = [
  { path: 'Find', component: CreateComponent},
  {path : 'patientinfo/:id', component: PatientinfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule { }
