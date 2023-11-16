import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.component.html',
  styleUrls: ['./recuperacion.component.css']
})
export class RecuperacionComponent {

  formulario: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required]],
      contraseña: ['', [Validators.required]]
    });
    this.recuperarContrasena();
  }

  recuperarContrasena() {
    const nombreRecogido = this.formulario.get('nombre');
    const nuevaContraseña = this.formulario.get('contraseña');
    const u = localStorage.getItem('personas');



    if (u != null && nombreRecogido && nuevaContraseña) {
      console.log("entro 1");

      const nombre = nombreRecogido.value;
      const contraseña = nuevaContraseña.value;

      const usu = JSON.parse(u);

      console.log("usuarios:", usu);
      console.log("nombreRecogido:", nombre);
      console.log("nuevaContraseña:", contraseña);


      if (nombre !== '' && contraseña !== '') {
        for (const element of usu) {
          console.log("entro 2");
          console.log(element.nombre);

          if (element.nombre.toLowerCase() === nombre.toLowerCase()) {

            console.log("entro 3")
            nuevaContraseña.setValue('');

            element.contraseña = contraseña;
            localStorage.setItem("personas", JSON.stringify(usu));

            alert("Contraseña cambiada");
            return;
          }
        }
      }
    }
  }

}
