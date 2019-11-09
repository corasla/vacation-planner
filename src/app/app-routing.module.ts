import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPlacesComponent } from './places/components/all-places/all-places.component';
import { UpcomingVacationsComponent } from './places/components/upcoming-vacations/upcoming-vacations.component';
import { PastVacationsComponent } from './places/components/past-vacations/past-vacations.component';

const routes: Routes = [
  { path: 'all', component: AllPlacesComponent },
  { path: 'upcoming', component: UpcomingVacationsComponent },
  { path: 'past', component: PastVacationsComponent },
  { 
    path: '',
    redirectTo: '/all',
    pathMatch: 'full'
  },
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
