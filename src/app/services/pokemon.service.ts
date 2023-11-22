import { Injectable } from '@angular/core';
import { Resultado } from '../interfaces/pokeApi';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  async getByPage( pagina:number, size:number = 1292,): Promise <Resultado[]> {
    const offset = size*(pagina-1);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${size}&offset=${offset}`)
    const resJson = await res.json();
    if(resJson.results.length > 0) return resJson.results
    return [];
  }



  async getById(id:String): Promise <Pokemon>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return await res.json();
  }

  getDescripcion(){

  }
}
