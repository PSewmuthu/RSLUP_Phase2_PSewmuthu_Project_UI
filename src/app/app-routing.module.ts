import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RestuarentdashComponent } from './restuarentdash/restuarentdash.component';
import { MaterialComponent } from './material/material.component';
import { AuthGuard } from './share/auth.guard';
import { UsersComponent } from './users/users.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // {path: '**', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'restuarent',
    component: RestuarentdashComponent,
    canActivate: [AuthGuard],
  },
  { path: 'material', component: MaterialComponent },
  { path: 'users', component: UsersComponent },
  { path: 'viewusers/:id', component: ViewUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
