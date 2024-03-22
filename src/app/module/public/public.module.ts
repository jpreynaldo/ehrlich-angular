import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { AuthGuard } from '../../core/guards/auth.guard';


const routes: Routes = [
  { 
    path: '', 
    component: PublicComponent,
  }
];

@NgModule({
  declarations: [
    PublicComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicModule { }
