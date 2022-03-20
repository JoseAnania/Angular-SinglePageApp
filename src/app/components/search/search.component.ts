// aquí se configura todo lo relacionado al SEARCH (para usarlo, deberemos declararlo en APP.MODULE.TS)

// decorador
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService } from 'src/app/services/heroes.service';

// configuración del decorador
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})

// clase SEARCH
export class SearchComponent implements OnInit {

  // variable arreglo del tipo ANY (es un arreglo porque puede existir varias coincidencias en el SEARCH)
  heroes:any[] = [];
  termino:string = "";

  // constructor que recibe por parámetro lo que se introduce en el SEARCH
  constructor( private activateRoute: ActivatedRoute,
               private _heroesService: HeroeService
             ){

    
   }

  ngOnInit(): void {

    this.activateRoute.params.subscribe( params => {

      this.heroes = this._heroesService.buscarHeroes( params ['termino'] );
      this.termino=params['termino'];
      

    })
  }

}
