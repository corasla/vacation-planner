import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule, MatButtonModule, MatTooltipModule, MatDialogModule } from '@angular/material'

import { MatDialogRef } from '@angular/material/dialog'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPlacesComponent } from './places/pages/all-places/all-places.component';
import { UpcomingVacationsComponent } from './places/pages/upcoming-vacations/upcoming-vacations.component';
import { PastVacationsComponent } from './places/pages/past-vacations/past-vacations.component';
import { PlaceComponent } from './places/components/place/place.component';
import { ConfirmationModalComponent } from './modals/confirmation-modal/confirmation-modal.component';
import { CharCountPipe } from './pipes/char-count.pipe';
import { MyUnlessDirective } from './directives/my-unless.directive';
import { ViewPlaceComponent } from './places/pages/view-place/view-place.component';
import { EditPlaceComponent } from './places/pages/edit-place/edit-place.component';

@NgModule({
  declarations: [
    AppComponent,
    AllPlacesComponent,
    UpcomingVacationsComponent,
    PastVacationsComponent,
    PlaceComponent,
    ConfirmationModalComponent,
    CharCountPipe,
    MyUnlessDirective,
    ViewPlaceComponent,
    EditPlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule
  ],
  providers: [{provide: MatDialogRef}],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationModalComponent]
})
export class AppModule { }
