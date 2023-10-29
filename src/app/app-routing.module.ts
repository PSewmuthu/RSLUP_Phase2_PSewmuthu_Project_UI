import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RestuarentdashComponent } from './restuarentdash/restuarentdash.component';
import { MaterialComponent } from './material/material.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // {path: '**', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'restuarent', component: RestuarentdashComponent },
  { path: 'material', component: MaterialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
