import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(){
    this.inicio();
  }

  inicio() {
    if(localStorage.getItem('personas') === null){
      let quemao = [
        { nombre: "andrea", contraseña: "12345" }, 
        { nombre: "juan", contraseña: "12345" }
      ];
  
      localStorage.setItem("personas", JSON.stringify(quemao));
    }
  }
  

  
  
}
