import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pickedPokemon = []

  constructor() { }

  ngOnInit() {
    this.getPokemon(1)
  }

  getPokemon(id) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((pokemon) => {
      this.pickedPokemon.pop()
      this.pickedPokemon.push(pokemon.data)
    })
  }

}
