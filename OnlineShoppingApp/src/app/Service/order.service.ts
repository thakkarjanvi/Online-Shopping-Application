// order.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private order: any;
  

  constructor() {}

  // Set the order information
  setOrder(order: any) {
    this.order = order;
  }

  // Get the order information
  getOrder() {
    return this.order;
  }
}
