// aquí se configura todo lo relacionado al ABOUT (para usarlo, deberemos declararlo en APP.MODULE.TS)

// decorador
import { Component, OnInit } from '@angular/core';

// configuración del decorador
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})

// clase ABOUT
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
