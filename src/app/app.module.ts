import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { CreateComponent } from './create/create.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { BuilderComponent } from './builder/builder.component';
import { CookieService } from 'ngx-cookie-service';
import { NgxPaginationModule } from 'ngx-pagination';
import { PatientinfoComponent } from './create/patientinfo/patientinfo.component';
import { EncountersComponent } from './create/encounters/encounters.component';

const appRoute: Routes = [
  { path: '', component: LoginComponent },
  // {path:'', redirectTo:'Home', pathMatch:'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'Find', component: CreateComponent },
  { path: 'patientinfo', component: PatientinfoComponent },
  


  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    CreateComponent,
    AdminComponent,
    NavComponent,
    BuilderComponent,
    PatientinfoComponent,
    EncountersComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    CommonModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
