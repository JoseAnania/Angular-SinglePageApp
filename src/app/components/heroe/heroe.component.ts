// aquí se configura todo lo relacionado a cada HEROE (para usarlo, deberemos declararlo en APP.MODULE.TS)

// decorador
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService } from 'src/app/services/heroes.service';

// configuración del decorador
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})

// clase de HEROE
export class HeroeComponent implements OnInit {

  // propiedad objeto HEROE del tipo ANY
  heroe:any = {};

  // en el contructor recibimos el parámetro según el HEROE seleccionado en la pantalla HEROES
  constructor( private activateRoute: ActivatedRoute,
               private _heroesService: HeroeService 
             ){

    this.activateRoute.params.subscribe( params => {

      this.heroe = this._heroesService.getHeroe(params['id']);
    } )

   }

  ngOnInit(): void {
  }

}
