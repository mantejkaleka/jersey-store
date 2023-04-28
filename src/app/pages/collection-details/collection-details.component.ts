import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionService } from 'src/services/collection.service';
import { CollectionCatalog, CollectionItem } from '../../models/Collection.model';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-collection-details',
  templateUrl: './collection-details.component.html',
  styleUrls: ['./collection-details.component.scss']
})
export class CollectionDetailsComponent implements OnInit {
  collectionId: String = '';
  collectionList: Array<any> | undefined;
  catalog: any;

  constructor(private collectionService: CollectionService, private router: Router, private route: ActivatedRoute,
    private cartService: CartService) {
    this.route.params.subscribe(
      (params) => {
        this.collectionId = params['id'];
        this.collectionService.getCollectionCatalogById(this.collectionId)
          .subscribe((_items: CollectionCatalog) => {
            this.catalog = _items;
            console.log('catalog', this.catalog);
             this.collectionList = _items.collectionItems;
          });
        // this.collectionList = this.collectionService.getCollectionGrid(this.collectionId).items;
      });

    // this.collectionService.collectionItems();    
  }

  ngOnInit(): void { }

  getCollectionDetails(listElement: any) {
    console.log('list element', listElement);
    this.cartService.addToCart(listElement);
  //  this.router.navigate(['/itemDetails', listElement._id]);  
  }

}
