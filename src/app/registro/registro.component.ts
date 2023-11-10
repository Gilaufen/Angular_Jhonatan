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

  constructor(private fb: FormBuilder, private router: Router) {
    this.ingresar = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      contraseña: ['', [Validators.required, Validators.pattern(/^(?=.*[!@#$%^&*,.-])[\w!@#$%^&*,.-]{6,}$/)]]
    });
  }

  authUsuario() {
    const nom = this.ingresar.get('nombre');
    const con = this.ingresar.get('contraseña');
    const usua = localStorage.getItem("personas");

    if (nom && con && usua != null) {

      const usuarios = JSON.parse(usua)
      const nombreRecogido = nom.value;
      const contraseñaRecogida = con.value;

      if (usuarios) {
        for (const element of usuarios) {
          if (nombreRecogido == element.nombre  && contraseñaRecogida == element.contraseña) {
            return false;
          }
        }
      }
    }

    return true;
  }

  registrarUsuario() {
    const us = localStorage.getItem("personas");
    const nom = this.ingresar.get('nombre');
    const con = this.ingresar.get('contraseña');

    if (us && nom && con) {
      const usuarios = JSON.parse(us);
      const nombreRecogido = nom.value;
      const contraseñaRecogida = con.value;

      if (nom.valid && con.valid) {

        if (nombreRecogido !== ''  && contraseñaRecogida !== '' && this.authUsuario()) {
          let nuevoRegistro = {
            nombre: nombreRecogido,
            contraseña: contraseñaRecogida
          }

          usuarios.push(nuevoRegistro);
          localStorage.setItem("personas", JSON.stringify(usuarios));
          console.log(usuarios);
        } else {
          alert("ese usuario ya existe")
        }
      }
    }
  }


}
