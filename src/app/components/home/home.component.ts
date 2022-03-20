// aquí se configura todo lo relacionado al HOME (para usarlo, deberemos declararlo en APP.MODULE.TS)

// decorador
import { Component, OnInit } from '@angular/core';

// configuración del decorador
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

// clase HOME
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
