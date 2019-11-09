import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPlacesComponent } from './places/pages/all-places/all-places.component';
import { UpcomingVacationsComponent } from './places/pages/upcoming-vacations/upcoming-vacations.component';
import { PastVacationsComponent } from './places/pages/past-vacations/past-vacations.component';
import { ViewPlaceComponent } from './places/pages/view-place/view-place.component';
import { EditPlaceComponent } from './places/pages/edit-place/edit-place.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/all',
    pathMatch: 'full'
  },
  { path: 'all', component: AllPlacesComponent},
  { path: 'place',
    children: [
      {
        path: '',
        redirectTo: '/all',
        pathMatch: 'full',
      },
      {
        path: ':id',
        component: ViewPlaceComponent
      },
      {
        path: ':id/edit',
        component: EditPlaceComponent
      },
  ]},
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
