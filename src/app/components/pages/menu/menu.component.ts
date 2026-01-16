import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../../services/menu.service';
import { CartService } from '../../../services/cart.service';
import { MenuItem } from '../../../models/menu-item.model';
import { MenuItemCardComponent } from '../menu-item-card/menu-item-card.component';
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MenuItemCardComponent, HeaderComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  selectedCategory = signal<'burger' | 'fries'>('burger');

  filteredItems = computed(() => 
    this.menuService.items().filter(item => item.category === this.selectedCategory())
  );

  constructor(
    private menuService: MenuService,
    private cartService: CartService
  ) {}

  addToCart(item: MenuItem): void {
    this.cartService.addToCart(item);
  }
}