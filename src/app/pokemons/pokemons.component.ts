import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonService } from '../services/pokemon.service';
import { Resultado } from '../interfaces/pokeApi';
import { Pokemon } from '../interfaces/pokemon';



@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  constructor(private http: HttpClient, private pokemonService: PokemonService) {

  }

  listaPokemon:Resultado[] = []
  pagina:number=1;
  pokemonSelect?:Pokemon;

  ngOnInit(): void {
    this.cargarLista();

  }

  async cargarLista() {
    this.listaPokemon = [...this.listaPokemon, ... await this.pokemonService.getByPage(this.pagina)]
    console.log(this.listaPokemon);
    this.pagina++;
  }

  async tarjetaClick(id:string){
    console.log(id)
    this.pokemonSelect = await this.pokemonService.getById(id)
    console.log(this.pokemonSelect)
  }


}
