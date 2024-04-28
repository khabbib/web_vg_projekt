import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../service/weather-api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  city: string = '';
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
          console.log(this.weatherData);
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
      }, error => {
        console.error('Error getting location:', error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
  getWeatherByCity() {
    if (this.city.trim() === '') {
      console.error('Please enter a city name.');
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
}
