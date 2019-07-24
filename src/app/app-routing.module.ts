import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MystarsComponent } from './mystars/mystars.component';

const routes: Routes = [
  {path:'',component:HomeComponent },
{path:'home',component:HomeComponent},
{path:'stars',component:MystarsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

