import { Component, OnInit } from '@angular/core';
import { OrderService } from '../Service/order.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit{
orderInfo: any;

constructor(private orderService: OrderService) {}

ngOnInit() {
  // Retrieve the order information from the service
  this.orderInfo = this.orderService.getOrder();
}
}
