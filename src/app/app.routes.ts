import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnimeMangaComponent } from './anime-manga/anime-manga.component';
import { CienciasComponent } from './ciencias/ciencias.component';
import { DeportesComponent } from './deportes/deportes.component';
import { GeneralComponent } from './general/general.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: DashboardComponent },
  { path: 'anime-manga', component: AnimeMangaComponent },
  { path: 'ciencias', component: CienciasComponent },
  { path: 'deportes', component: DeportesComponent },
  { path: 'general', component: GeneralComponent },
];
