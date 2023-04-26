import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CollectionCatalog, CollectionItem } from 'src/app/models/Collection.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// const COLLECTION_BASE_URL = '/collectionItems';
const COLLECTION_CATALOG_BASE_URL = 'https://jersey-store.onrender.com/api/collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private httpClient: HttpClient) { }

  // collectionGrid = [{
  //   id: 'collection_card_activewear',
  //   items: [{
  //     id: 1,
  //     url: '',
  //     content: 'Dri-fit Round Neck T-Shirts- White',
  //     img: '../../../assets/images/activewear_1.png',
  //     price: 'Rs.399'
  //   },
  //   {
  //     id: 2,
  //     url: '',
  //     content: 'Dri-fit Round Neck T-Shirts- Black',
  //     img: '../../../assets/images/activewear_black.webp',
  //     price: 'Rs.399'
  //   },
  //   {
  //     id: 1,
  //     url: '',
  //     content: 'Dri-fit Round Neck T-Shirts- Grey',
  //     img: '../../../assets/images/activewear_grey.webp',
  //     price: 'Rs.399'
  //   },
  //   {
  //     id: 1,
  //     url: '',
  //     content: 'Dri-fit Round Neck T-Shirts- Light Blue',
  //     img: '../../../assets/images/activewear_lightBlue.webp',
  //     price: 'Rs.399'
  //   },
  //   {
  //     id: 1,
  //     url: '',
  //     content: 'Dri-fit Round Neck T-Shirts- Navy Blue',
  //     img: '../../../assets/images/activewear_navyBlue.webp',
  //     price: 'Rs.399'
  //   },
  //   {
  //     id: 1,
  //     url: '',
  //     content: 'Dri-fit Round Neck T-Shirts- Neo Green',
  //     img: '../../../assets/images/activewear_neogreen.webp',
  //     price: 'Rs.399'
  //   },
  //   {
  //     id: 1,
  //     url: '',
  //     content: 'Dri-fit Round Neck T-Shirts- Orange',
  //     img: '../../../assets/images/activewear_orange.webp',
  //     price: 'Rs.399'
  //   },
  //   {
  //     id: 1,
  //     url: '',
  //     content: 'Dri-fit Round Neck T-Shirts- Red',
  //     img: '../../../assets/images/activewear_read.webp',
  //     price: 'Rs.399'
  //   },
  //   {
  //     id: 1,
  //     url: '',
  //     content: 'Dri-fit Round Neck T-Shirts- Royal Blue',
  //     img: '../../../assets/images/activewear_royalblue.webp',
  //     price: 'Rs.399'
  //   },
  //   {
  //     id: 1,
  //     url: '',
  //     content: 'Dri-fit Round Neck T-Shirts- Yellow',
  //     img: '../../../assets/images/activewear_yellow.webp',
  //     price: 'Rs.399'
  //   }]
  // }
  // ];

  getAllCollectionItems(): Observable<Array<CollectionItem>> {
    return this.httpClient.get<Array<CollectionItem>>(`${environment.baseURL}/collectionItems`);
  }

  addCollectionItems(collectionItems: CollectionItem): void {
    this.httpClient.post('http://localhost:3000/api/collection/collectionItems', collectionItems).subscribe(async (response: any) => {
      if (response) {
        console.log('success', response);
      }
    }
    )
  }

  addCollectionCatalog(items: CollectionCatalog): void {
    this.httpClient.post(`${COLLECTION_CATALOG_BASE_URL}`, items).subscribe(async (response: any) => {
      if (response) {
        console.log('success', response);
      }
    }
    )
  }

  getCollectionCatalog(): Observable<Array<CollectionCatalog>> {
    return this.httpClient.get<Array<CollectionCatalog>>(`${environment.baseURL}/collectionCatalog`);
  }

  getCollectionCatalogById(id: String): Observable<CollectionCatalog> {
    return this.httpClient.get<CollectionCatalog>(`${environment.baseURL}/collectionCatalog/${id}`);
  }
}
