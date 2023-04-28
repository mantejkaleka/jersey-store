import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<any>({items: []});

  constructor() { }

  addToCart(items: any) {
    if (items) {
      this.cart.next({items});
    }
  }

  clearCart(): void{
    this.cart.next({items: []});
  }
}
