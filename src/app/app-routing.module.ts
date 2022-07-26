import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
 import { CreateComponent } from './create/create.component';

import { BuilderComponent } from './builder/builder.component';
import { AdminComponent } from './admin/admin.component';
import { PatientinfoComponent } from './create/patientinfo/patientinfo.component';


const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
 { path: 'Find', component: CreateComponent },
 { path: 'PatientInfo', component: PatientinfoComponent },
 


  { path: 'Cohort', component: BuilderComponent },
  { path: 'Administration', component: AdminComponent },
  { path: 'Login', component: LoginComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
