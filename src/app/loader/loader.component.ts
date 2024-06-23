import { AfterViewInit, Component } from '@angular/core';
import anime from 'animejs';


@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    // Wrap every letter in a span
const textWrapper = document.querySelector('.an-1') as Element;
textWrapper.innerHTML = textWrapper.innerHTML.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
.add({
  targets: '.an-1 .letter',
  scale: [4,1],
  opacity: [0,1],
  translateZ: 0,
  easing: "easeOutExpo",
  duration: 950,
  delay: (_el: any, i: number) => 70*i
})


}
}
