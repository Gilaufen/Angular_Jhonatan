import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Resultado } from 'src/app/interfaces/pokeApi';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-tarjeta-pokemo',
  templateUrl: './tarjeta-pokemo.component.html',
  styleUrls: ['./tarjeta-pokemo.component.css']
})
export class TarjetaPokemoComponent implements OnChanges{

  constructor(private pokemonService:PokemonService){

  }

  ngOnChanges(changes: SimpleChanges): void {
      this.extraerInfo();
  }

  @Input() data?:Resultado;
  @Input() select?:boolean = false; 

  @Output() clickeado = new EventEmitter<string>()
  id:string = "0";

  extraerInfo(){
    if(this.data ){
      this.id =this.data.url.substring(34, this.data.url.length-1)
    }
  }
}
