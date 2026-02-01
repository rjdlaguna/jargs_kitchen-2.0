import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  LucideAngularModule,
  Plus,
  Minus,
  ShoppingCart, 
} from 'lucide-angular'

type Category = 'Burgers' | 'Sides' | 'Drinks' | 'Combos'

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  category: Category
  image: string
  popular?: boolean
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input() onNavigate!: (page: string) => void

  Plus = Plus
  Minus = Minus
  ShoppingCart = ShoppingCart

  categories: Category[] = ['Burgers', 'Sides', 'Drinks', 'Combos']
  activeCategory: Category = 'Burgers'
  cartCount = 0

  MENU_ITEMS: MenuItem[] = [
    {
      id: 1,
      name: "Jarg's Classic",
      description: 'Single patty, cheddar, lettuce, tomato, house sauce',
      price: 8.99,
      category: 'Burgers',
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
      popular: true,
    },
    {
      id: 2,
      name: 'Double Beast',
      description: 'Double patty, double cheese, bacon, caramelized onions',
      price: 12.99,
      category: 'Burgers',
      image:
        'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&q=80',
      popular: true,
    },
    {
      id: 3,
      name: 'Spicy Inferno',
      description: 'Crispy chicken, jalapeños, spicy mayo, pepper jack',
      price: 10.99,
      category: 'Burgers',
      image:
        'https://images.unsplash.com/photo-1615557960916-5f4791effe9d?w=800&q=80',
    },
    {
      id: 4,
      name: 'Mushroom Swiss',
      description: 'Sautéed mushrooms, swiss cheese, truffle mayo',
      price: 11.99,
      category: 'Burgers',
      image:
        'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80',
    },
    {
      id: 5,
      name: 'Crispy Fries',
      description: 'Golden shoestring fries with sea salt',
      price: 3.99,
      category: 'Sides',
      image:
        'https://images.unsplash.com/photo-1573080496987-a199f8cd75ec?w=800&q=80',
    },
    {
      id: 6,
      name: 'Onion Rings',
      description: 'Beer-battered thick cut onion rings',
      price: 4.99,
      category: 'Sides',
      image:
        'https://images.unsplash.com/photo-1639024471283-03518883512d?w=800&q=80',
    },
    {
      id: 7,
      name: 'Vanilla Shake',
      description: 'Hand-spun vanilla bean milkshake',
      price: 5.99,
      category: 'Drinks',
      image:
        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80',
    },
    {
      id: 8,
      name: 'Craft Cola',
      description: 'Artisanal cola with cane sugar',
      price: 2.99,
      category: 'Drinks',
      image:
        'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&q=80',
    },
  ]

  get filteredItems(): MenuItem[] {
    return this.MENU_ITEMS.filter(
      (item) => item.category === this.activeCategory
    )
  }

  setCategory(category: Category) {
    this.activeCategory = category
  }

  addToCart() {
    this.cartCount++
  }
}
