import { Component, OnInit } from '@angular/core';
import { CollectionItem } from 'src/app/models/Collection.model';
import { CollectionService } from 'src/services/collection.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-collection-form',
  templateUrl: './collection-form.component.html',
  styleUrls: ['./collection-form.component.scss']
})
export class CollectionFormComponent implements OnInit {

  collectionUrl: String = '';
  collectionContent: String = '';
  imgSrc: String = '';
  price: String = '';
  collectionItem: CollectionItem | undefined;
  constructor(private collectionService: CollectionService) { }

  ngOnInit(): void {
  }

  onSubmit(collectionForm: NgForm): void {
    this.collectionItem = {
      url: collectionForm.form.value.collectionUrl,
      content: collectionForm.form.value.collectionContent,
      img: collectionForm.form.value.imgSrc,
      price: collectionForm.form.value.price,
      catalogId: collectionForm.form.value.parentId
    }
    this.collectionService.addCollectionItems(this.collectionItem);
  }

}
