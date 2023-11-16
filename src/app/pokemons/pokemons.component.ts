import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent  {
  constructor(private http:HttpClient){

  }

  async ngOnInit(){
    let resp = this.http.get("https://pokeapi.co/api/v2/pokemon");
    resp.subscribe(resp =>{
      
      return resp.results
    })

    
      let poke = this.http.get("https://pokeapi.co/api/v2/pokemon/res")
    
  }
}
