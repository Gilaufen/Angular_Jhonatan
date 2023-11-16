import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';
import { RecuperacionComponent } from './recuperacion/recuperacion.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponentComponent,
    RegistroComponent,
    RecuperacionComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
