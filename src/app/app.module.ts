import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { NextMatchComponent } from './components/next-match/next-match.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableMatchesComponent } from './components/table-matches/table-matches.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { SignupComponent } from './components/signup/signup.component';
import { BannerComponent } from './components/banner/banner.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchComponent } from './components/match/match.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { MyFilterPipe } from './pipes/my-filter.pipe';
import { ColorDirective } from './directives/color.directive';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { TableTeamsComponent } from './components/table-teams/table-teams.component';
import { DashboardComponent } from './components/dashbord/dashbord.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { TablePlayersComponent } from './components/table-players/table-players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { LoginComponent } from './components/login/login.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlayersComponent } from './components/players/players.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeroComponent,
    NextMatchComponent,
    ScoreComponent,
    NewsComponent,
    VideosComponent,
    BlogComponent,
    ContactComponent,
    AddMatchComponent,
    TableMatchesComponent,
    EditMatchComponent,
    MatchInfoComponent,
    SignupComponent,
    BannerComponent,
    MatchesComponent,
    MatchComponent,
    ReversePipe,
    MyFilterPipe,
    ColorDirective,
    AddTeamComponent,
    TableTeamsComponent,
    DashboardComponent,
    AddPlayerComponent,
    TablePlayersComponent,
    TeamsComponent,
    LoginComponent,
    NotFoundComponent,
    PlayersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule , // TDF Form
    ReactiveFormsModule , // RF Form
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), 
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
