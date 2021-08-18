import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pokemon: any = [];
  limite: number = 20;
  desde: number = 0;

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit(){
    this.pokemon = [];
    this.pokemonService.getPokemonChunck(this.limite, this.desde).subscribe((resp: any) => {
      resp.results.forEach(pokemon_result => {
        this.pokemon.push(pokemon_result);
      });
      this.desde = 20;
    });
  }

  cargarPokemon(event){
    setTimeout(() => {
      this.pokemonService.getPokemonChunck(this.limite, this.desde).subscribe((resp: any) => {
        resp.results.forEach(pokemon_result => {
          this.pokemon.push(pokemon_result);
        });
        event.target.complete();
        this.desde += 20;
      });

    },500)
  }

  detalle(id){
    console.log(id);
    this.router.navigate(['/pokemon', id]);
  }

}
