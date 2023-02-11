import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { SigninComponent } from './components/signin/signin.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
  // {path:'',pathMatch: 'full', redirectTo: '/signin'},
  {path:'signin',component: SigninComponent},
  {path:'register',component: RegisterComponent},
  {path:'mainpage',component: MainPageComponent},
  {path:'survey', component: SurveyComponent,},

  {
    path:'',redirectTo: '/signin',pathMatch: 'full'
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
