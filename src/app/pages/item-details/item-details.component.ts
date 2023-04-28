import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionItem } from 'src/app/models/Collection.model';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  cartItem: any;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: any) => {
      this.cartItem = _cart.items;
    });
  }

}
