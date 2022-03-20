// aquí se configura todo lo relacionado al NAVBAR (para usarlo, deberemos declararlo en APP.MODULE.TS)

// decorador
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// configuración del decorador
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})

// clase NAVBAR
export class NavbarComponent implements OnInit {
  
  // constructor que recibe por parámetro lo que se introduce en el SEARCH
  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  // función que permitirá buscar Heroes desde el buscador del NAVBAR
  buscarHeroe( termino: string ) {

    // redirección del SEARCH (sea click del mouse o enter)
    this.router.navigate( ['/search', termino] );
  }
}
