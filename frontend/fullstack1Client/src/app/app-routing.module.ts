import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Lazy load the 'infodb' module
  {
    path: 'infodb',
    loadChildren: () => import('./infodb/infodb.module').then(m => m.InfodbModule)
  },

  {
    path: '', redirectTo: 'infodb/addStudent', pathMatch: 'full'
  },

  {
    path: '**', redirectTo: 'infodb/addStudent'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
