import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './shared/angular-material.module';

import { AppComponent } from './app.component';

import { MarcaTextoDirective } from './shared/directives/marca-texto.directive';
import { PeopleService } from './shared/services/people.service';
import { ListPeopleComponent } from './components/list-people/list-people.component';
import { ListApiComponent } from './components/list-api/list-api.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { UsersListComponent } from './components/pages/users/users-list/users-list.component';
import { UsersFormComponent } from './components/pages/users/users-form/users-form.component';
import { DataBindingComponent } from './components/pages/data-binding/data-binding.component';
import { ToDoItemComponent} from './components/pages/to-do/to-do-item/to-do-item.component';
import { ToDoListComponent } from './components/pages/to-do/to-do-list/to-do-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcaTextoDirective,
    ListPeopleComponent,
    ListApiComponent,
    NavbarComponent,
    DiretivasComponent,
    HomeComponent,
    UsersListComponent,
    UsersFormComponent,
    DataBindingComponent,
    ToDoItemComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,



  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
