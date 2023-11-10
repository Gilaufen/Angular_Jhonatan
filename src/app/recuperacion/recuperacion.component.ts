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

  constructor(private fb: FormBuilder, private router: Router){
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required]],
      contraseña: ['', [Validators.required]]
    });
  }

  recuperarContrasena(){
    const nombreRecogido = this.formulario.get('nombre');
    const nuevaContraseña = this.formulario.get('constraseña');
    const u = localStorage.getItem('personas');

)

  console.log("usuarios:", u);
  console.log("nombreRecogido:", nombreRecogido);
  console.log("nuevaContraseña:", nuevaContraseña);

    if(u != null && nombreRecogido && nuevaContraseña){

      console.log("entro 1");
      

      const nombre = nombreRecogido.value;
      const contraseña = nuevaContraseña.value;

      

      const usu = JSON.parse(u);

      if(nombre !== '' && contraseña !==''){

      for(let i = 0; i < usu.length; i++){
        console.log("entro 2");
        
        if(usu[i].nombre === nombre){
          // Cambiar la contraseña del usuario
          usu[i].contraseña = contraseña;
          // Actualizar el localStorage
          localStorage.setItem("personas", JSON.stringify(usu));

          alert("Contraseña cambiada");
          return; // Terminar el bucle después de encontrar el usuario
        }
      }
    }
  }

  }
}
