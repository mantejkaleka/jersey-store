import { Component, OnInit } from '@angular/core';
import { CollectionService } from 'src/services/collection.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  itemQuantity  = 0;
  subtotal: number = 0;

  constructor(
    private collectionService: CollectionService
  ) { }

  price: number = 100;

  ngOnInit(): void {
    this.getCollectionMenu();
  }

  collectionMenu : Array<any> | undefined;
  formContent = [{
    title: 'add collection items',
    url: 'collectionForm'
  },
  {
    title: 'add collection catalog',
    url: 'collectionHomeForm'
  },
  ];

  private getCollectionMenu():void {
    this.collectionService.getCollectionCatalog()
    .subscribe((_items) => {
      this.collectionMenu = _items;
      console.log('collection menu', this.collectionMenu);
    })
  }

  addRemovItem(action: string) {
    
    switch(action) {
      case 'remove':{
        this.itemQuantity-=1;
        this.subtotal-=this.price;
        if(this.itemQuantity < 0) {
          this.itemQuantity = 0;
        }
      }     
        break;
        case 'add':  
          this.itemQuantity+=1;
          this.subtotal+=this.price;
    }
  }
}
