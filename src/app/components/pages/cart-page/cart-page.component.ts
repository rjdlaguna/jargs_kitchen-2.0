import { Component, Input } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

@Component({
  selector: 'cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
  })
  export class CartComponent {
  @Input() cartItems: CartItem[] = [];

  cartCount: number = 0;

  // Calculated values
  get subtotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  get deliveryFee(): number {
    return this.subtotal > 0 ? 2.99 : 0;
  }

  get tax(): number {
    return this.subtotal * 0.08;
  }

  get total(): number {
    return this.subtotal + this.deliveryFee + this.tax;
  }

  navigateTo(page: string) {
    console.log(`Navigate to ${page}`);
    // Replace with router navigation if needed
  }

  updateQuantity(item: CartItem, newQty: number) {
    if (newQty < 1) return;
    item.quantity = newQty;
  }

  removeItem(item: CartItem) {
    this.cartItems = this.cartItems.filter((i) => i.id !== item.id);
  }
}
