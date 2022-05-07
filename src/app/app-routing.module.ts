import { UsersListComponent } from './components/pages/users/users-list/users-list.component';
import { ListApiComponent } from 'src/app/components/list-api/list-api.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { ListPeopleComponent } from './components/list-people/list-people.component';
import { HomeComponent } from './components/home/home.component';
import { UsersFormComponent } from './components/pages/users/users-form/users-form.component';
import { DataBindingComponent } from './components/pages/data-binding/data-binding.component';
import { ToDoListComponent } from './components/pages/to-do/to-do-list/to-do-list.component';

const routes: Routes = [
  { path: 'home', component: UsersListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'user-form', component: UsersFormComponent },
  { path: 'user-form/:id', component: UsersFormComponent },
  { path: 'to-do', component: ToDoListComponent },
  { path: 'diretivas', component: DiretivasComponent },
  { path: 'api', component: ListApiComponent },
  { path: 'data-binding', component: DataBindingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
