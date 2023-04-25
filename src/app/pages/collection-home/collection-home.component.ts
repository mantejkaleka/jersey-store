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
      content: 'New Jersey 22/23',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/Aregn3StarJersey02_360x.png?v=1673285104',
      price: 'Rs. 625'
    },
    {
      content: 'Argg (2 Star) Away Jersey 22/23',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/WhatsAppImage2023-01-16at15.29.25_360x.jpg?v=1673937011',
      price: 'Rs.625'
    },
    {
      content: 'Argg (2 Star) Home Jersey 22/23',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/2STARFV_360x.jpg?v=1673936702',
      price: 'Rs.625'
    },
    {
      content: 'Argg CAMPEONES New Fan Version Jersey 22/23',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/WhatsAppImage2023-01-10at16.45.02_360x.jpg?v=1673353821',
      price: 'Rs.625'
    },
    {
      content: 'Por New Jersey 22/23',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/84b58df1bb213e375d5236aab0d40455_360x.webp?v=1661159199',
      price: 'Rs.625'
    },
    {
      content: 'Itta New Season Jersey 22/23',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/Italy-2022-home-jersey-3_360x.jpg?v=1664353527',
      price: 'Rs.625'
    },
    {
      content: 'Brazilia New Jersey 22/23',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/ac1f344c-min_360x.jpg?v=1665141402',
      price: 'Rs.499'
    },
    {
      content: 'Lion New Jersey 22/23',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/d3c89cc9-min_360x.jpg?v=1669273202',
      price: 'Rs.499'
    },
    {
      content: 'Deutscher New Jersey 22/23',  
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/www.imagehandler_480x_14a09cf5-bb00-4751-8f1f-ee4a80f9ee13_360x.webp?v=1665234515',
      price: 'Rs.499'
    },
    {
      content: 'Les Bleus New Jersey 22/23',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/e344772dd94bfc5c_360x.webp?v=1665646282',
      price: 'Rs.499'
    },
    {
      content: 'La Roja Fan Version 22/23',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/Spain-Home-2022-Worldcup-Football-Jersey-1-scaled_360x.jpg?v=1668162578',
      price: 'Rs.499'
    },
    {
      content: 'Urbsfa Fan Version 22/23',
      img: 'https://cdn.shopify.com/s/files/1/0612/6472/4149/products/Belgium-22-23-home-jersey-2_360x.jpg?v=1668162764',
      price: 'Rs.499'
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
