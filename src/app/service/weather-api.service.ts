import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  #apiKey = '7fcb103b9d1dbeefdd35f1d670c7512b'; // Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
  constructor() { }


  getWeatherByLocation(lat: number, lon: number) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.#apiKey}`;
    return axios.get(apiUrl);
  }

  getFourDaysWeatherByLocation(lat: number, lon: number) {
    // const apiUrl = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${this.#apiKey}`;
    const apiUrl = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${this.#apiKey}`;
    return axios.get(apiUrl);
  }
  
  getWeatherData(city: string) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.#apiKey}`;
    return axios.get(apiUrl);
  }
}
