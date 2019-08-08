import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardListComponent } from './card-list/card-list.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: CardListComponent, pathMatch: 'full' },
  { path: 'details/:cnpj', component: DetailsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
