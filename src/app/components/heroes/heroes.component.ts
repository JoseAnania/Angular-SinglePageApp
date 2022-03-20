// aquí se configura todo lo relacionado a los HEROES (para usarlo, deberemos declararlo en APP.MODULE.TS)

// decorador
import { Component, OnInit } from '@angular/core';
// importación del SERVICIO e INTERFACE de HEROES 
import { HeroeService, Heroe } from 'src/app/services/heroes.service';

// configuración del decorador
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})

// clase HEROES
export class HeroesComponent implements OnInit {

  // declaramos una variable arreglo del tipo ANY vacía
  heroes: Heroe[] = [];

  // usamos el SERVICIO de HEROES declarado en HEROES.SERVICE.TS
  constructor( private _heroesService: HeroeService ) { }

  ngOnInit(): void {

    // llenamos la variable arreglo con los heroes
    this.heroes = this._heroesService.getHeroes();

  }

}
