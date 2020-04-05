import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from '../login/login.component';
//import {DashboardComponent} from './feature/dashboard/dashboard.component';


const routes: Routes = [
//   {
//     path: '',
//     component: DashboardComponent,
//    // canActivate: [AuthGuard]
// },
{
    path: '',
    component: LoginComponent
},

// otherwise redirect to home
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
