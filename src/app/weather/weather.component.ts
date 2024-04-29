import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../service/weather-api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';

type MessageType = {type: 'success' | 'error' | 'default', msg: string};
@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [FormsModule, CommonModule, LoaderComponent],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  city: string = '';
  message: MessageType = {type: "default", msg: ""};
  constructor(private weatherApiService: WeatherApiService) {}

  ngOnInit(): void {
    this.getCurrentLocationWeather();
  }
  getCurrentLocationWeather() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        this.weatherApiService.getWeatherByLocation(latitude, longitude)
        .then(response => {
          this.weatherData = response.data;
          this.message = {type: "success", msg: `Weather for ${response.data.name}`}
          console.log(this.weatherData);
        })
        .catch(error => {
          this.message = {type: "error", msg: `Weather for ${error}`}
          console.error('Error fetching weather data:', error);
        });
      }, error => {
        this.message = {type: "error", msg: `Error getting location: ${error}`}
        console.error('Error getting location:', error);
      });
    } else {
      this.message = {type: "error", msg: `Geolocation is not supported by this browser.`}
      console.error('Geolocation is not supported by this browser.');
    }
  }
  
  getWeatherByCity() {
    if (this.city.trim() === '') {
      alert('Please enter a city name.');
      return;
    }
    this.weatherApiService.getWeatherData(this.city)
    .then(response => {
      this.weatherData = response.data;
      console.log(this.weatherData);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
  }

  clearMessage() {
    this.message = { type: 'default', msg: '' };
  }
}
