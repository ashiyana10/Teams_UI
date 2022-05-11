import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSectionComponent } from './main-section/main-section.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [

  {path:':Content',component:Sidebar2Component},
  { path:'Teams', component: TeamComponent, children: [{ path:':main', component: MainSectionComponent}]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
