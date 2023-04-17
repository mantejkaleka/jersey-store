import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionService } from 'src/services/collection.service';
import { CollectionCatalog, CollectionItem } from '../../models/Collection.model';

@Component({
  selector: 'app-collection-details',
  templateUrl: './collection-details.component.html',
  styleUrls: ['./collection-details.component.scss']
})
export class CollectionDetailsComponent implements OnInit {
  collectionId: String = '';
  collectionList: Array<CollectionItem> | undefined;

  constructor(private collectionService: CollectionService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params) => {
        this.collectionId = params['id'];
        this.collectionService.getCollectionCatalogById(this.collectionId)
          .subscribe((_items: CollectionCatalog) => {
            console.log(_items);
             this.collectionList = _items.collectionItems;
          });
        // this.collectionList = this.collectionService.getCollectionGrid(this.collectionId).items;
      });

    // this.collectionService.collectionItems();    
  }

  ngOnInit(): void { }

}
