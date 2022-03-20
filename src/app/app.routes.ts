// archivo de RUTAS

// importación de RUTA especial
import { RouterModule, Routes } from "@angular/router";
// importación del HOME COMPONENT
import { HomeComponent } from "./components/home/home.component";
// importación del ABOUT COMPONENT
import { AboutComponent } from "./components/about/about.component";
// importación del HEROE COMPONENT
import { HeroesComponent } from "./components/heroes/heroes.component";
// importación del HEROE COMPONENT
import { HeroeComponent } from "./components/heroe/heroe.component";
// importación del SEARCH COMPONENT
import { SearchComponent } from "./components/search/search.component";

// arreglo de Rutas
const APP_ROUTES: Routes = [

    {path: 'home', component: HomeComponent}, // redirección a HOME
    {path: 'about', component: AboutComponent}, // redirección a ABOUT
    {path: 'heroes', component: HeroesComponent}, // redirección a HEROES
    {path: 'heroe/:id', component: HeroeComponent}, // redirección a HEROE según el ID
    {path: 'search/:termino', component:SearchComponent}, // redirección del SEARCH según el término introducido
    {path: '**', pathMatch: 'full', redirectTo: 'home'} // ruta especial por si fallan las anteriores rutas
];

// exportamos las rutas con el nombre de la constante APP_ROUTING
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);