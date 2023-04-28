import { Component, OnInit } from '@angular/core';
import { CollectionItem } from 'src/app/models/Collection.model';
import { CollectionService } from 'src/services/collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  collectionGrid: Array<any> | undefined;
  collectionItems: Array<CollectionItem> | undefined;

  constructor(private collectionService: CollectionService) {
    this.getCollection();
    this.getCollectionGrid();
  }

  ngOnInit(): void {

  }

  getCollection(): void {
    this.collectionService.getAllCollectionItems()
      .subscribe((_items) => {
        this.collectionItems = _items;
        console.log('collection items', this.collectionItems);
      })
  }

  getCollectionGrid():void {
    this.collectionService.getCollectionCatalog()
    .subscribe((_items) => {
      this.collectionGrid = _items;
    })
  }


}
