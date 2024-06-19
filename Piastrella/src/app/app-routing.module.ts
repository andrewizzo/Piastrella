import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    loadChildren:() => import('./home/home.module').then(h => h.HomeModule)
  },
  {
    path:'calculator',
    loadChildren:() => import('./calculator/calculator.module').then(c => c.CalculatorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
