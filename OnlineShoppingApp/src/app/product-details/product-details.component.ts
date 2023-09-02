import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../Service/product.service';
import { CartService } from '../Service/cart.service';
import { Product } from '../Model/product.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  product: any={}; // Define the product object

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router // Inject the Router
  ) {}

  ngOnInit(): void {
    // Extract the 'id' parameter from the route
    const productId = +this.route.snapshot.paramMap.get('id')!;

    // Fetch the product details using the ProductService (replace with your actual service)
    this.productService.getProductById(productId).subscribe((product) => {
      if (product !== null){}
      this.product = product;
    });
  }

  buyNow(): void{
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }

  redirectToCart() {
    // Implement the 'Buy Now' functionality here (e.g., add to cart)
    this.cartService.addToCart(this.product);

    // Redirect to the cart page
    this.router.navigate(['/cart']);
  }

  
}
