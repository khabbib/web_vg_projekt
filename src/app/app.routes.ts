import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'weather', component: WeatherComponent},
    {path: 'about', component: AboutComponent},
];
