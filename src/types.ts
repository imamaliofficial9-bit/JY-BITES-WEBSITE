export type CategoryType = 'all' | 'burgers' | 'chicken' | 'fries' | 'wraps' | 'sides';

export interface MenuItem {
  id: string;
  name: string;
  category: 'burgers' | 'chicken' | 'fries' | 'wraps' | 'sides';
  description: string;
  price: number;
  image: string;
  badge?: 'Popular' | 'New' | 'Chef Choice' | 'Best Seller';
  spicyLevel?: 0 | 1 | 2 | 3;
  calories?: string;
  prepTime?: string;
  ingredients: string[];
}

export interface CartItemOption {
  name: string;
  price: number;
}

export interface CartItem {
  cartItemId: string;
  menuItem: MenuItem;
  quantity: number;
  selectedOptions: CartItemOption[];
  specialInstructions?: string;
  unitPrice: number;
}

export type OrderType = 'delivery' | 'takeaway' | 'dine-in';

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  favoriteItem: string;
}
