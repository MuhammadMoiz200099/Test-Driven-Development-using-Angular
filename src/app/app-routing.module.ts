import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { HomeComponent } from './components/home/home.component';
import { TemperatureComponent } from './components/temperature/temperature.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'calculator',
        component: CalculatorComponent
      },
      {
        path: 'temperature',
        component: TemperatureComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
