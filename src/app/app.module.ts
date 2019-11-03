import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPlacesComponent } from './places/components/all-places/all-places.component';
import { UpcomingVacationsComponent } from './places/components/upcoming-vacations/upcoming-vacations.component';
import { PastVacationsComponent } from './places/components/past-vacations/past-vacations.component';
import { PlaceComponent } from './places/components/place/place.component';

@NgModule({
  declarations: [
    AppComponent,
    AllPlacesComponent,
    UpcomingVacationsComponent,
    PastVacationsComponent,
    PlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
