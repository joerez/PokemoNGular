import { Component, OnInit } from '@angular/core';
import { PokedexComponent } from '../pokedex.component';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
