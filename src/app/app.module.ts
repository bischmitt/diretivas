import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './shared/angular-material.module';

import { AppComponent } from './app.component';

import { MarcaTextoDirective } from './directives/marca-texto.directive';
import { PeopleService } from './shared/services/people.service';
import { ListPeopleComponent } from './shared/components/list-people/list-people.component';
import { ListApiComponent } from './components/list-api/list-api.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MarcaTextoDirective,
    ListPeopleComponent,
    ListApiComponent,
    NavbarComponent,
    DiretivasComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularMaterialModule,
    AppRoutingModule,

  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
