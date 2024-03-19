import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnimeMangaComponent } from './anime-manga/anime-manga.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: DashboardComponent },
  { path: 'anime-manga', component: AnimeMangaComponent },
];
