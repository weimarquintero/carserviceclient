import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { addOwnerComponent } from './add-owner/add-owner.component';
import { ownerlistcomponent } from './owner-list/owner-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/car-list', pathMatch: 'full' },
  {
    path: 'car-list',
    component: CarListComponent
  },
  {
    path: 'car-add',
    component: CarEditComponent
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent
  },
  {
    path: 'add-owner',
    component : addOwnerComponent
  },
  {
    path: 'owner-edit/:dni',
    component : addOwnerComponent
  },
  {
    path : 'owner-list',
    component : ownerlistcomponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
