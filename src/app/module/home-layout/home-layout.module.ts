import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './home-layout.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { WeatherComponent } from './components/weather/weather.component';


const routes: Routes = [
  { path: '', component: HomeLayoutComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    HomeLayoutComponent,
    HomeComponent,
    WeatherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeLayoutModule { }
