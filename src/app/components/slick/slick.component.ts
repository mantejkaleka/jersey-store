import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-slick',
  templateUrl: './slick.component.html',
  styleUrls: ['./slick.component.scss']
})
export class SlickComponent implements OnInit {
   @Input() newSlides: Array<string> = [];
  constructor() { }

  ngOnInit(): void {
  }
  slideConfig = { "slidesToShow" : 3,
  "slidesToScroll" : 3,
  "dots" : false,
  "infinite" : true,
  "autoplay" : false,
  "autoplaySpeed" : 3000,
  "nav":true,
  "arrows" : true};
  images: Array<string> =  ['../../../assets/images/manchester.jpg','../../../assets/images/fifa_1.webp','../../../assets/images/liverpool.webp'];

  removeSlide() {
    this.newSlides.length = this.newSlides.length - 1;
  }

  slickInit(element: any): void {
    console.log('slick carouse initiated', element);
  }

  afterChange(element: any) {
    console.log('afterChange');
  }
}
