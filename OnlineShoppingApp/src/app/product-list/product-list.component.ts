import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/product.service';
import { Product } from '../Model/product.model';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  searchTerm = '';

  constructor(private productService: ProductService,
    private cartService: CartService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product); // Use the CartService to add the product to the cart
  }
}
