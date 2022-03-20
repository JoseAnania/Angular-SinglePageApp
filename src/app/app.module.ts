import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// RUTAS
// importamos las rutas desde APP.ROUTES.TS
import { APP_ROUTING } from './app.routes';

// SERVICIOS
//importamos el servicio HEROES
import { HeroeService } from './services/heroes.service';

// COMPONENTES
import { AppComponent } from './app.component';
// importamos el componente NAVBAR
import { NavbarComponent } from './components/shared/navbar/navbar.component';
// importamos el componente HOME
import { HomeComponent } from './components/home/home.component';
// importamos el componente ABOUT
import { AboutComponent } from './components/about/about.component';
// importamos el componente HEORES
import { HeroesComponent } from './components/heroes/heroes.component';
// importamos el componente HEORE
import { HeroeComponent } from './components/heroe/heroe.component';
// importamos el componente SEARCH
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    // declaramos el componente NAVBAR
    NavbarComponent, 
    // declaramos el componente HOME
    HomeComponent, 
    // declaramos el componente ABOUT
    AboutComponent,
    // declaramos el componente HEROES
    HeroesComponent,
    // declaramos el componente HEROE
    HeroeComponent,
    // declaramos el componente SEARCH
    SearchComponent, 
  ],
  imports: [
    BrowserModule,
    // declaramos la importación de las rutas
    APP_ROUTING,
  ],
  providers: [
    // declaramos el servicio HEROES
    HeroeService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
