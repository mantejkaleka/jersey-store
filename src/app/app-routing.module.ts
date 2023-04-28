import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { CollectionFormComponent } from './pages/collection-form/collection-form.component';
import { CollectionDetailsComponent } from './pages/collection-details/collection-details.component';
import { CollectionHomeComponent } from './pages/collection-home/collection-home.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'collection', component: CollectionComponent
  },
  {
    path: 'collection/:id', component: CollectionDetailsComponent
  },
  {
    path:'collectionForm', component: CollectionFormComponent
  },
  {
    path:'collectionHomeForm', component: CollectionHomeComponent
  },
  {
    path:'itemDetails/:id', component: ItemDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
