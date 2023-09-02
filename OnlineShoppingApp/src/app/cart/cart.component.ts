import { Component, OnInit } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { Product } from '../Model/product.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartItems: Product[] = [];
  total: number = 0;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  // Calculate the total price of items in the cart
  calculateTotal(): void {
    this.total = this.cartService.getTotalPrice();
  }
  // Define the decreaseQuantity method
  decreaseQuantity(item: Product): void {
    this.cartService.decreaseQuantity(item);
    this.calculateTotal();
  }

  // Define the increaseQuantity method
  increaseQuantity(item: Product): void {
    this.cartService.increaseQuantity(item);
    this.calculateTotal();
  }

  // Remove a product from the cart
  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product);
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  redirectToCheckout() {
    // Navigate to the checkout page
    this.router.navigate(['/checkout']);
  }

  checkout() {
    // Implement your checkout logic here
    // This function will be called when the "Checkout" button is clicked
    alert('Checkout from here');
  }
}
