import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../Service/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
shippingInfo: any = {}; // Object to store shipping details
  paymentInfo: any = {}; // Object to store payment details

  orderInfo: any = {
    name: 'John Doe',
    address: '123 Main St',
    totalAmount: 100,
    // Add more order details as needed
  };

  constructor(private router: Router, private orderService: OrderService) {}

  placeOrder() {
    // Implement your order placement logic here
    // This function will be called when the "Place Order" button is clicked
    
    // Redirect to the order confirmation page upon successful order placement
    this.router.navigate(['/order-confirmation']);
    this.orderService.setOrder(this.orderInfo);
  }
}
