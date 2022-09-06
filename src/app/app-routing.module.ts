import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { EducationalDetailsComponent } from './educational-details/educational-details.component';

import { InnovationDetailsComponent } from './innovation-details/innovation-details.component';

import { ResponsibilityComponent } from './responsibility/responsibility.component';

import { FacultyDashboardComponent } from './faculty-dashboard/faculty-dashboard.component';
import { AssociationComponent } from './association/association.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'dashboard', component: FacultyDashboardComponent
  },


  { path: 'educational-details', component: EducationalDetailsComponent },
  { path: 'association', component: AssociationComponent },

  { path: 'innovation-details', component: InnovationDetailsComponent },

  { path: 'responsibility', component: ResponsibilityComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AssociationComponent, ResponsibilityComponent, EducationalDetailsComponent, InnovationDetailsComponent, LoginComponent]
