import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  // En tu componente
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private router:Router) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required]],
      contraseña: ['', [Validators.required]]
    });

    this.consultarUsuarios();
    this.inicio();
    this.guardarSesion();
  }



  inicio() {
    let quemao = [{ nombre: "andrea", apellido: "peña", contraseña: "12345" }, { nombre: "juan", apellido: "salinas", contraseña: "12345" }]

    localStorage.setItem("personas", JSON.stringify(quemao));
  }

  consultarUsuarios() {

    let validation;

    const nom = this.formulario.get('nombre');
    const con = this.formulario.get('contraseña');
  
    if (nom && con) {
      const nombreRecogido = nom.value;
      const contraseñaRecogida = con.value;
      
      const usu = localStorage.getItem("personas");

      if (usu !== null) {
        let usuarios = JSON.parse(usu);        
        
        for(let i=0; i< 2; i++){
          console.log(usuarios[i].nombre);
          
          if(nombreRecogido == usuarios[i].nombre && contraseñaRecogida == usuarios[i].contraseña){
            validation = true;
          }
    
        }
       
      }

    }

    if(validation==true){
      this.router.navigate(['/dashboard'])
      this.guardarSesion();
    }

  }

  guardarSesion(){

    const nom = this.formulario.get('nombre');
    const con = this.formulario.get('contraseña');
  
    if (nom && con) {
      const nombreRecogido = nom.value;
      const contraseñaRecogida = con.value;

      localStorage.setItem("nombreUsuario", JSON.stringify(nombreRecogido));
  }
}

}
