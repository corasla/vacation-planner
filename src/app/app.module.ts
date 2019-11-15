import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
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
import { EditPlaceFormComponent } from './places/components/edit-place-form/edit-place-form.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { AuthComponent } from './authentication/pages/auth/auth.component';
import { AuthFormComponent } from './authentication/components/auth-form/auth-form.component';
import { RegisterFormComponent } from './authentication/components/register-form/register-form.component';


// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAi1aYMlans4AtbdHWMVZMkE2PvJeIcBtw",
  authDomain: "vacation-planner-ecd82.firebaseapp.com",
  databaseURL: "https://vacation-planner-ecd82.firebaseio.com",
  projectId: "vacation-planner-ecd82",
  storageBucket: "vacation-planner-ecd82.appspot.com",
  messagingSenderId: "989011464698",
  appId: "1:989011464698:web:d2e8dc634a02aa5bbd1443",
  measurementId: "G-0Q7XYQRQ2B"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


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
    EditPlaceComponent,
    EditPlaceFormComponent,
    AuthComponent,
    AuthFormComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [
    {provide: MatDialogRef},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationModalComponent]
})
export class AppModule { }
