import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  collectionMenu = ['Fan Version 22/23 Jerseys', 'Player Version 22 / 23 Jerseys', 'International Jerseys 22/23', 'Printed Fan Version',
    'Club Jackets',
    'Football Hoodies',
    'Club Bottles',
    'Kids Jerseys 22/23',
    'Club Scarfs',
    'Activewear',
    'Club Badges',
    'Club Stickers',
    'Football T-Shirt',
    'Football Mugs',
    'Club Polo T-shirts',
    'Wooden Crests',
    'T20 Stickers',
    'Club Caps'
  ];
  formContent = [{
    title: 'add collection items',
    url: 'collectionForm'
  },
  {
    title: 'add collection catalog',
    url: 'collectionHomeForm'
  },
  ];
}
