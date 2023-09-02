import { Injectable } from '@angular/core';
import { Product } from '../Model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];
  private cartItems: any[] = []; 

  constructor() { }
  // Add a product to the cart
  addToCart(product: Product): void {
    const existingProduct = this.cart.find(p => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  // Get the cart items
  getCartItems(): Product[] {
    return this.cart;
  }

  // Remove a product from the cart
  removeFromCart(product: Product): void {
    const index = this.cart.indexOf(product);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  // Decrease the quantity of a product in the cart
  decreaseQuantity(product: Product): void {
    const index = this.cart.findIndex(p => p.id === product.id);
    if (index !== -1 && this.cart[index].quantity > 1) {
      this.cart[index].quantity--;
    }
  }

  // Increase the quantity of a product in the cart
  increaseQuantity(product: Product): void {
    const index = this.cart.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.cart[index].quantity++;
    }
  }

  // Calculate the total price of items in the cart
  getTotalPrice(): number {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }

  // Clear the entire cart
  clearCart(): void {
    this.cartItems = [];
  }

  // Calculate the total price of items in the cart
  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}
