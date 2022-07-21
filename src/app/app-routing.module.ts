import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './base/main/main.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { WorkRangeComponent } from './components/work-range/work-range.component';
import { ContactsComponent } from './components/contacts/contacts.component';
const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'about',component:AboutUsComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'workRange',component:WorkRangeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
