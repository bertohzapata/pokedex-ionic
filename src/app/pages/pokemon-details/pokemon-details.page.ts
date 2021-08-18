import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
})
export class PokemonDetailsPage implements OnInit {

  pokemon: any = {};
  sprites: any = {};
  abilities: any = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService
    ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      let id_pokemon = params['id'];
      if (id_pokemon != '' || id_pokemon != undefined) {
        this.cargarPokemon(id_pokemon);
      } else {
        this.router.navigate(['home']);
      }
    })
  }


  cargarPokemon(id_pokemon){
    this.pokemonService.getPokemonById(id_pokemon).subscribe((resp: any) => {
      this.pokemon = resp;
      this.sprites = resp.sprites;
      this.abilities = resp.abilities;
      console.log(this.pokemon);
      
      
    })
  }

}
