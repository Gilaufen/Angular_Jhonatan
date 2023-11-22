import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-foto-pokemo',
  templateUrl: './foto-pokemo.component.html',
  styleUrls: ['./foto-pokemo.component.css']
})
export class FotoPokemoComponent {

  @Input() pokemon?: Pokemon;


  

}
