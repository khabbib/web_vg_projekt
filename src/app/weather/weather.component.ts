import { Component } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  city!: string;
  weather: any;
  constructor(private weatherApiService: WeatherApiService) {
    this.weather = '';
  }

  ngOnInit(){}
  getWeather() {
    // Send the city 
    this.weatherApiService.getRandomJoke()
    .then(res => {
      console.log(res)
      this.weather = res.data.joke;
    })
    .catch(error => {
      console.log(error);
    })
  }
}
