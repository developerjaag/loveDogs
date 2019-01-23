import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// firebase
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FullCalendarModule } from 'ng-fullcalendar';



import { LoginComponent } from './modules/auth/login/login.component';
import { NewOwnerComponent } from './modules/owners/new-owner/new-owner.component';
import { NewPetComponent } from './modules/pets/new-pet/new-pet.component';
import { ListPetsComponent } from './modules/pets/list-pets/list-pets.component';
import { PetComponent } from './modules/pets/pet/pet.component';
import { ListOwnersComponent } from './modules/owners/list-owners/list-owners.component';
import { OwnerComponent } from './modules/owners/owner/owner.component';
import { NavBarComponent } from './modules/shared/nav-bar/nav-bar.component';
import { CalendarComponent } from './modules/dashboard/calendar/calendar.component';
import { HomeComponent } from './modules/dashboard/home/home.component';
import { IndexComponent } from './modules/landing-page/index/index.component';
import { FooterComponent } from './modules/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewOwnerComponent,
    NewPetComponent,
    ListPetsComponent,
    PetComponent,
    ListOwnersComponent,
    OwnerComponent,
    NavBarComponent,
    CalendarComponent,
    HomeComponent,
    IndexComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule

  ],
  providers: [
    AngularFireAuth,
    AngularFirestore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
