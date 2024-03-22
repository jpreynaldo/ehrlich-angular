import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './home-layout.component';


const routes: Routes = [
  { path: '', component: HomeLayoutComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    HomeLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeLayoutModule { }
