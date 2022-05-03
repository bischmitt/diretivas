import { ListApiComponent } from 'src/app/components/list-api/list-api.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { ListPeopleComponent } from './shared/components/list-people/list-people.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'diretivas', component: DiretivasComponent },
  { path: 'api', component: ListApiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
