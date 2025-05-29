import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { TableMatchesComponent } from './components/table-matches/table-matches.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AddTeamComponent } from './components/add-team/add-team.component';

import { DashboardComponent } from './components/dashbord/dashbord.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { TeamsComponent } from './components/teams/teams.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './services/auth.guard';
import { PlayersComponent } from './components/players/players.component';

const routes: Routes = [
  {path:'' , component:HomeComponent}, // http://localhost:4200 <app-home>
  {path:'contact' , component:ContactComponent}, // http://localhost:4200/contact <app-con>
  {path:'add-match' , component:AddMatchComponent, canActivate: [AuthGuard] , data: { role: ['admin'] }}, 
  {path:'edit-match/:id' , component:EditMatchComponent , canActivate: [AuthGuard], data: { role: ['admin'] }}, 
  {path:'match-info/:idMatch' , component:MatchInfoComponent , canActivate: [AuthGuard] ,data: { role: ['admin'] }}, 
  // {path:'table-matches' , component:TableMatchesComponent}, 
  {path:'signup' , component:SignupComponent}, 
  {path:'signup/admin' , component:SignupComponent}, 
  {path:'login' , component:LoginComponent}, 
  {path:'matches' , component:MatchesComponent , canActivate: [AuthGuard] ,data: { role: ['admin','user'] }}, 
  {path:'teams' , component:TeamsComponent , canActivate: [AuthGuard] ,data: { role: ['admin'] }}, 
  {path:'add-team' , component:AddTeamComponent , canActivate: [AuthGuard] ,data: { role: ['admin'] }}, 
  {path:'edit-team/:id' , component:AddTeamComponent , canActivate: [AuthGuard] ,data: { role: ['admin'] }}, 
  {path:'dashboard' , component:DashboardComponent , canActivate: [AuthGuard] ,data: { role: ['admin'] }}, 
  {path:'add-player' , component:AddPlayerComponent , canActivate: [AuthGuard],data: { role: ['admin'] }}, 
  {path:'edit-player/:id' , component:AddPlayerComponent , canActivate: [AuthGuard],data: { role: ['admin'] }}, 
  {path:'not-found' , component:NotFoundComponent}, 
  {path:'players' , component:PlayersComponent},
  {
    path: '**',
    redirectTo: '/not-found' //Error 404 - Page not found
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
