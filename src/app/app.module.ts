import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { InformationComponent } from './landing/information/information.component';
import { CarouselComponent } from './landing/carousel/carousel.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { PanelComponent } from './admin/panel/panel.component';
import { NavbarComponent } from './landing/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    InformationComponent,
    CarouselComponent,
    AdminComponent,
    LoginComponent,
    PanelComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
