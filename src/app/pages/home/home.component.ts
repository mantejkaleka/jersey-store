import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  cols: number = 4;
  rowHeight: number = 335;
  slides = [
    '../../../assets/images/football-jersey.webp',
    '../../../assets/images/football-jersey-2.webp',
    '../../../assets/images/football-jersey-3.jpg',
    '../../../assets/images/emirates_jersey.webp'
  ];

  newLaunchSlides = ['../../../assets/images/football-jersey.webp',
    '../../../assets/images/football-jersey-2.webp',
    '../../../assets/images/football-jersey-3.jpg',
    '../../../assets/images/emirates_jersey.webp'];

  clubJackets = ['../../../assets/images/club_slide_1.webp',
    '../../../assets/images/club_slide_2.webp',
    '../../../assets/images/club_slide_3.webp',
    '../../../assets/images/club_slide_4.webp',
    '../../../assets/images/club_slide_5.webp',
    '../../../assets/images/club_slide_6.webp',
    '../../../assets/images/club_slide_7.webp',
    '../../../assets/images/club_slide_8.webp'
  ]

  matList = [{
    img: '../../../assets/images/dri-fit.jpg.webp',
    category: 'Activewear'
  },
  {
    img: '../../../assets/images/footbal_scarf.webp',
    category: 'Club Scarfs'
  }];

  mugList = [{
    img: '../../../assets/images/round-neck.webp'
  }, {
    img: '../../../assets/images/mugs.webp'
  },
  {
    img: '../../../assets/images/hoodies.webp'
  },
  {
    img: '../../../assets/images/wooden_wall_crest.webp'
  }];

  tendingOffers
    = [{
      img: '../../../assets/images/New_Season_Jersey.webp'
    }, {
      img: '../../../assets/images/Stickers-new-tile.webp'
    },
    {
      img: '../../../assets/images/Caps-new-tile.webp'
    }];

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 3,
    "dots": false,
    "infinite": true,
    "autoplay": false,
    "autoplaySpeed": 3000,
    "nav": true,
    "arrows": true
  };
  images: Array<string> = ['../../../assets/images/manchester.jpg', '../../../assets/images/fifa_1.webp', '../../../assets/images/liverpool.webp'];
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(element: any): void {
  }

  afterChange(element: any) {
  }

}
