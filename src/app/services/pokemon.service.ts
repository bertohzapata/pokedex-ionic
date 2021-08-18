import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  header = new HttpHeaders().set('Content-Type', 'application/json');
  URL_API = 'https://pokeapi.co/api/v2'
  
  constructor(private _http: HttpClient) { }


  // Consultas
  getPokemonById(id_pokemon){
    const url = `${this.URL_API}/pokemon/${id_pokemon}`;
    return this._http.get(url, {headers: this.header});
  }

  getPokemonChunck(limite = 20, desde = 0){
    const url = `${this.URL_API}/pokemon/?limit=${limite}&offset=${desde}`;
    return this._http.get(url, {headers: this.header});
  }
}
