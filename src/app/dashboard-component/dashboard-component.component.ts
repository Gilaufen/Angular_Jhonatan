import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent {
  usuario:String="";

  constructor(){
    this.consultarUsuario();
  }

  consultarUsuario(){
    const usuario = localStorage.getItem("nombreUsuario");

    if (usuario !== null) {
      let u = JSON.parse(usuario);
      this.usuario = usuario ? JSON.parse(usuario) : null;
    }
    
  }
}
