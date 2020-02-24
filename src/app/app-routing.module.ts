import { LandingComponent } from './landing/landing.component';
import { PanelComponent } from './admin/panel/panel.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children:[
      {path: '', component: LoginComponent},
      {path: 'panel', component: PanelComponent}
    ]
  },
  {
    path: '',
    component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
