import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { LoginComponent } from './modules/auth/login/login.component';
import { CalendarComponent } from './modules/dashboard/calendar/calendar.component';
import { HomeComponent } from './modules/dashboard/home/home.component';
import { IndexComponent } from './modules/landing-page/index/index.component';
import { ListOwnersComponent } from './modules/owners/list-owners/list-owners.component';
import { NewOwnerComponent } from './modules/owners/new-owner/new-owner.component';
import { ListPetsComponent } from './modules/pets/list-pets/list-pets.component';
import { PetComponent } from './modules/pets/pet/pet.component';
import { OwnerComponent } from './modules/owners/owner/owner.component';
import { NewPetComponent } from './modules/pets/new-pet/new-pet.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'home', component: HomeComponent },

  { path: '', component: IndexComponent },

  { path: 'owners', component: ListOwnersComponent },
  { path: 'new-owner', component: NewOwnerComponent },
  { path: 'owner/:id', component: OwnerComponent },

  { path: 'pets', component: ListPetsComponent },
  { path: 'new-pet', component: NewPetComponent },
  { path: 'pet/:id', component: PetComponent },

  { path: '**', redirectTo: '' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
