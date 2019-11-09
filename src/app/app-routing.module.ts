import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPlacesComponent } from './places/pages/all-places/all-places.component';
import { UpcomingVacationsComponent } from './places/pages/upcoming-vacations/upcoming-vacations.component';
import { PastVacationsComponent } from './places/pages/past-vacations/past-vacations.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/all',
    pathMatch: 'full'
  },
  { path: 'all', component: AllPlacesComponent },
  { path: 'upcoming', component: UpcomingVacationsComponent },
  { path: 'past', component: PastVacationsComponent },
  { 
    path: '**',
    redirectTo: '/all',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
