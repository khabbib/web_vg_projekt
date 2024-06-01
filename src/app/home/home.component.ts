import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoaderComponent],
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
