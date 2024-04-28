import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  active: string = '';
  constructor(private router: Router) {}
  ngOnInit(): void {
    // Get the current route
    const currentRoute = window.location.href;

    // Determine which navigation link should be marked as active based on the route
    if (currentRoute.endsWith('/weather')) {
      this.active = 'Weather';
    } else if (currentRoute.endsWith('/about')) {
      this.active = 'About';
    } else {
      this.active = 'Home'; // Default to 'home' if the route doesn't match any specific route
    }
    // Set the active link and reset the rest
    this.#setActiveLink();
  }

  navigateHome(e: MouseEvent) {
    this.active = "Home";
    this.#setActiveLink();
    this.router.navigate([""]);
  }
  navigateWeather(e: MouseEvent) {
    this.active = "Weather";
    this.#setActiveLink();
    this.router.navigate(["weather"]);
  }
  #setActiveLink(){
    const navItems = document.querySelectorAll('.nav-link'); 
    navItems.forEach(item => {
      if(item.innerHTML === this.active) {
        item.classList.add("active");
      } else {
        item.classList.remove('active');
      }
    });
  }

}
