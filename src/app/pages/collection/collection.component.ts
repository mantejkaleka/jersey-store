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
    // this.collectionGrid = [
    //   {
    //     id: 'collection_card_activewear',
    //     img: '../../../assets/images/collection_card_activewear.webp',
    //     title: 'Activewear'
    //   },

    //   {
    //     id: 'collection_card_badge',
    //     img: '../../../assets/images/collection_card_badge.webp',
    //     title: 'Bulk Cusomisation'
    //   },
    //   {
    //     id: 'collection_card_bottle',
    //     img: '../../../assets/images/collection_card_bottle.png',
    //     title: 'Club Badges'
    //   },
    //   {
    //     id: 'collection_card_caps',
    //     img: '../../../assets/images/collection_card_caps.webp',
    //     title: 'Club Caps'
    //   },
    //   {
    //     id: 'collection_card_jackets',
    //     img: '../../../assets/images/collection_card_jackets.webp',
    //     title: 'Club Jackets'
    //   },
    //   {
    //     id: 'collection_card_cotton_tshirsts',
    //     img: '../../../assets/images/collection_card_cotton_tshirsts.webp',
    //     title: 'Cotton tshirts'
    //   },
    //   {
    //     id: 'collection_card_hoodies',
    //     img: '../../../assets/images/collection_card_hoodies.webp',
    //     title: 'Club Hoodies'
    //   },
    //   {
    //     id: 'collection_card_jersey_season',
    //     img: '../../../assets/images/collection_card_jersey_season.webp',
    //     title: 'Seasion Jerseys'
    //   },
    //   {
    //     id: 'collection_card_jerseys_fan_version',
    //     img: '../../../assets/images/collection_card_jerseys_fan_version.jpg',
    //     title: 'Printed Fan Jerseys'
    //   },
    //   {
    //     id: 'collection_card_jerseys_player_version',
    //     img: '../../../assets/images/collection_card_jerseys_player_version.webp',
    //     title: 'Player Jerseys'
    //   },
    //   {
    //     id: 'collection_card_kids_jerseys',
    //     img: '../../../assets/images/collection_card_kids_jerseys.webp',
    //     title: 'Kids Jerseys'
    //   },
    //   {
    //     id: 'collection_card_mugs_newSeason',
    //     img: '../../../assets/images/collection_card_mugs_newSeason.webp',
    //     title: 'Mugs(New Season)'
    //   },
    //   {
    //     id: 'collection_card_mugs',
    //     img: '../../../assets/images/collection_card_mugs.webp',
    //     title: 'Bulk Cusomisation'
    //   },
    //   {
    //     id: 'collection_card_polo',
    //     img: '../../../assets/images/collection_card_polo.webp',
    //     title: 'Polo tshirt'
    //   },
    //   {
    //     id: 'collection_card_scarf',
    //     img: '../../../assets/images/collection_card_scarf.webp',
    //     title: 'Club Scarfs'
    //   },
    //   {
    //     id: 'collection_card_stickers',
    //     img: '../../../assets/images/collection_card_stickers.webp',
    //     title: 'Card Stickers'
    //   },
    //   {
    //     id: 'collection_card_t20_stickers',
    //     img: '../../../assets/images/collection_card_t20_stickers.webp',
    //     title: 't20 stickers'
    //   },
    //   {
    //     id: 'collection_card_wooden_crest',
    //     img: '../../../assets/images/collection_card_wooden_crest.webp',
    //     title: 'Wooden Crests'
    //   }
    // ];
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
      console.log(this.collectionGrid);

    })
  }


}
