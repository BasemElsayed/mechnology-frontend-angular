import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core'

import { AppComponent } from './app.component';
import { NavbarComponent } from './client/navbar/navbar.component';
import { HomeComponent } from './client/home/home.component';
import { ServiceComponent } from './client/service/service.component';
import { TeamComponent } from './client/team/team.component';
import { FooterComponent } from './client/footer/footer.component';
import { AboutComponent } from './client/about/about.component';
import { ContactComponent } from './client/contact/contact.component';
import { OffersComponent } from './client/offers/offers.component';
import { PortfolioComponent } from './client/portfolio/portfolio.component';
import { AddServiceComponent } from './admin/add-service/add-service.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AdminViewServicesComponent } from './admin/admin-view-services/admin-view-services.component';
import { AdminViewTeamsComponent } from './admin/admin-view-teams/admin-view-teams.component';
import { AddTeamComponent } from './admin/add-team/add-team.component';
import { AddPortfolioComponent } from './admin/add-portfolio/add-portfolio.component';
import { AdminViewPortfolioComponent } from './admin/admin-view-portfolio/admin-view-portfolio.component';
import { LoginComponent } from './admin/login/login.component';

import { AuthService } from './auth.service';
import { AuthGuard } from "./auth.guard";
import { MapComponent } from './client/map/map.component';
import { EditContactComponent } from './admin/edit-contact/edit-contact.component';

const appRoutes:Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home', component:HomeComponent },
  { path:'about', component:AboutComponent },
  { path:'contact', component:ContactComponent },
  { path:'offers', component:OffersComponent },
  { path:'portfolio', component:PortfolioComponent },
  { path:'addService', component:AddServiceComponent, canActivate: [AuthGuard] },
  { path:'manageServices', component:AdminViewServicesComponent, canActivate: [AuthGuard] },
  { path:'manageTeams', component:AdminViewTeamsComponent, canActivate: [AuthGuard] },
  { path:'addTeam', component:AddTeamComponent, canActivate: [AuthGuard] },
  { path:'addPortfolio', component:AddPortfolioComponent, canActivate: [AuthGuard] },
  { path:'managePortfolios', component:AdminViewPortfolioComponent, canActivate: [AuthGuard] },
  { path:'editContacts', component:EditContactComponent, canActivate: [AuthGuard] },
  { path:'admin', component:LoginComponent },
  //{ path:'homeAdmin', component:AdminHomeComponent, canActivate: [AuthAdminGuard] },
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServiceComponent,
    TeamComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    OffersComponent,
    PortfolioComponent,
    AddServiceComponent,
    AdminNavbarComponent,
    AdminViewServicesComponent,
    AdminViewTeamsComponent,
    AddTeamComponent,
    AddPortfolioComponent,
    AdminViewPortfolioComponent,
    LoginComponent,
    MapComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCd-GAylS3-aA4gn_rBAIdDMyqY8czf-HE'
    }),
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
