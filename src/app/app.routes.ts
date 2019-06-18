import {RouterModule , Routes  } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { HeroesComponent } from './components/heroes/heroes.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}

];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
