import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPlacesComponent } from './places/pages/all-places/all-places.component';
import { UpcomingVacationsComponent } from './places/pages/upcoming-vacations/upcoming-vacations.component';
import { PastVacationsComponent } from './places/pages/past-vacations/past-vacations.component';
import { ViewPlaceComponent } from './places/pages/view-place/view-place.component';
import { EditPlaceComponent } from './places/pages/edit-place/edit-place.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { EditPlaceFormComponent } from './places/components/edit-place-form/edit-place-form.component';
import { AuthComponent } from './authentication/pages/auth/auth.component';
import { AuthFormComponent } from './authentication/components/auth-form/auth-form.component';
import { RegisterFormComponent } from './authentication/components/register-form/register-form.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/all',
    pathMatch: 'full'
  },
  { 
    path: 'auth', 
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: AuthFormComponent
      },
      {
        path: 'register',
        component: RegisterFormComponent
      }
    ]
  },
  { path: 'all', component: AllPlacesComponent},
  { path: 'place',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/all',
        pathMatch: 'full',
      },
      {
        path: 'create',
        pathMatch: 'full',
        component: EditPlaceFormComponent
      },
      {
        path: ':id',
        component: ViewPlaceComponent,
      },
      {
        path: ':id/edit',
        component: EditPlaceComponent,
      },
  ]},
  { path: 'upcoming', component: UpcomingVacationsComponent, canActivate: [AuthGuard] },
  { path: 'past', component: PastVacationsComponent, canActivate: [AuthGuard] },
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
