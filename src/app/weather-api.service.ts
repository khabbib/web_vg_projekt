import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor() { }

  getRandomJoke() {
    return axios.get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=7fcb103b9d1dbeefdd35f1d670c7512b');
  }
}
