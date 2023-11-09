import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  ingresar: FormGroup;

  constructor(private fb: FormBuilder, private router:Router){
    this.ingresar = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      contraseña: ['', [Validators.required]]
    });

    this.registrarUsuario();
  }


  registrarUsuario(){
    const nom = this.ingresar.get('nombre');
    const ape = this.ingresar.get('apellido');
    const con = this.ingresar.get('contraseña');
  
    if (nom && con && ape) {
      const nombreRecogido = nom.value;
      const apellidoRecogido = ape.value;
      const contraseñaRecogida = con.value;

      const us = localStorage.getItem("personas");

      if(us != null){

        let nuevoRegistro={
          nombre: nombreRecogido,
          apellido: apellidoRecogido,
          contraseña: contraseñaRecogida
        }

        let usuarios = JSON.parse(us);

        if(nuevoRegistro != null){
        console.log(usuarios);
        
        usuarios.push(nuevoRegistro);

        localStorage.setItem("personas", JSON.stringify(usuarios))

        const usu = localStorage.getItem("personas");

    }

    

    
   
  }
}

}}