import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { RegistroComponent } from './registro/registro.component';
import { RecuperacionComponent } from './recuperacion/recuperacion.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponentComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'recuperacion', component: RecuperacionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
