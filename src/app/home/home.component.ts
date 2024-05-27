import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherCardComponent } from '../weather-card/weather-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WeatherCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  globalValue;
  constructor(private router: Router) {
    this.globalValue = "globalValue";
  }

  startComputation() {
    let value = 0;
    console.log("startComputation");
  }
}
