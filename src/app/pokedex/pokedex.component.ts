import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent implements OnInit {
  // a list of all picked pokemon
  pickedPokemon = []
  // the most recent pokemon
  selectedPokemon = {}

  showPokemon = false;

  constructor() { }

  ngOnInit() {
    this.getPokemon(1);
  }

  getPokemon(id) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((pokemon) => {
      this.selectedPokemon = pokemon.data;
      this.pickedPokemon.push(pokemon.data);
    })
  }

  togglePokemon() {
    if (!this.showPokemon) {
      return this.showPokemon = true;
    } else {
      return this.showPokemon = false;
    }
  }

}
