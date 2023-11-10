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

  constructor(private fb: FormBuilder, private router: Router) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required]],
      contraseña: ['', [Validators.required]]
    });

    this.consultarUsuarios();
    this.guardarSesion();
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

        for (const element of usuarios) {

          if (nombreRecogido == element.nombre && contraseñaRecogida == element.contraseña && nombreRecogido != '' && contraseñaRecogida != '') {
            validation = true;
          }

        }

      }

    }

    if (validation) {
      this.router.navigate(['/dashboard'])
      this.guardarSesion();
    }

  }

  guardarSesion() {

    const nom = this.formulario.get('nombre');
    const con = this.formulario.get('contraseña');

    if (nom && con) {
      const nombreRecogido = nom.value;

      localStorage.setItem("nombreUsuario", JSON.stringify(nombreRecogido));
    }
  }

}
