import { Component, OnInit } from '@angular/core';
import { CollectionCatalog, CollectionItem } from 'src/app/models/Collection.model';

import { CollectionService } from 'src/services/collection.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.scss']
})
export class CollectionHomeComponent implements OnInit {

  title: String = '';
  name: String = '';
  imgSrc: String = '';
  catalogItem: CollectionCatalog | undefined;
  collectionItems: Array<CollectionItem> | undefined;

  constructor(private collectionService: CollectionService) { }


  ngOnInit(): void {
    this.collectionItems = [{
      content: 'Customized Jersey 011',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/WhatsAppImage2023-02-11at4.40.30PM_360x.jpg?v=1677225646',
      price: 'Rs. 625'
    },
    {
      content: 'Customized Jersey 001',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/WhatsAppImage2023-02-11at4.46.28PM_360x.jpg?v=1677213133',
      price: 'Rs.625'
    },
    {
      content: 'Customized Jersey 002',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/WhatsAppImage2023-02-11at4.30.57PM_360x.jpg?v=1677224912',
      price: 'Rs.625'
    },
    {
      content: 'Customized Jersey 003',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/WhatsAppImage2023-02-11at4.30.58PM_360x.jpg?v=1677225035',
      price: 'Rs.625'
    },
    {
      content: 'Customized Jacket 001',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/WhatsAppImage2023-02-11at4.46.00PM_360x.jpg?v=1677225794',
      price: 'Rs.625'
    },
    {
      content: 'Customized Jacket 002',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/WhatsAppImage2023-02-11at4.46.13PM_2_360x.jpg?v=1677565363',
      price: 'Rs.625'
    },
    {
      content: 'Customized Jacket 003',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/WhatsAppImage2023-02-11at4.46.16PM_360x.jpg?v=1677576201',
      price: 'Rs.625'
    },
    {
      content: 'Customized Jacket 004',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/WhatsAppImage2023-02-11at4.46.44PM_360x.jpg?v=1677578666',
      price: 'Rs.625'
    },
    {
      content: 'Customized Jacket 005',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/WhatsAppImage2023-02-11at4.46.49PM_360x.jpg?v=1677580256',
      price: 'Rs.625'
    },
    {
      content: 'Customized Jersey 006',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/WhatsAppImage2023-02-11at4.31.00PM_1_360x.jpg?v=1677225111',
      price: 'Rs.625'
    },
    {
      content: 'Customized Jersey 007',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/WhatsAppImage2023-02-11at4.31.02PM_1_360x.jpg?v=1677225481',
      price: 'Rs.625'
    },
    {
      content: 'Customized Jersey 008',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/WhatsAppImage2023-02-11at4.31.02PM_360x.jpg?v=1677225510',
      price: 'Rs.625'
    },
    {
      content: 'Customized Jersey 009',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/WhatsAppImage2023-02-11at4.40.26PM_360x.jpg?v=1677225536',
      price: 'Rs.625'
    },
    {
      content: 'Customized Jersey 010',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/WhatsAppImage2023-02-11at4.40.27PM_360x.jpg?v=1677225580',
      price: 'Rs.625'
    },
    {
      content: 'Customized Jersey 012',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/WhatsAppImage2023-02-11at4.40.28PM_360x.jpg?v=1677225607',
      price: 'Rs.625'
    },
    {
      content: 'Customized Jersey 013',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/WhatsAppImage2023-02-11at4.41.26PM_360x.jpg?v=1677225672',
      price: 'Rs.625'
    },
    {
      content: 'Customized Jersey 014',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/WhatsAppImage2023-02-11at4.45.56PM_1_360x.jpg?v=1677225697',
      price: 'Rs.625'
    },
    {
      content: 'Customized Jersey 015',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/WhatsAppImage2023-02-11at4.45.56PM_360x.jpg?v=1677225727',
      price: 'Rs.625'
    },
    {
      content: 'Customized Jersey 018',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/WhatsAppImage2023-02-11at4.45.59PM_360x.jpg?v=1677225756',
      price: 'Rs.625'
    }
  ]
  }


  onSubmit(collectionForm: NgForm): void {
    this.catalogItem = {
      name: collectionForm.form.value.name,
      imgUrl: collectionForm.form.value.collectionUrl,
      title: collectionForm.form.value.title,
      collectionItems: this.collectionItems
    }
    this.collectionService.addCollectionCatalog(this.catalogItem);
    // collectionForm.resetForm();
  }
}
