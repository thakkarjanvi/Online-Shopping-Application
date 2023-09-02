import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';


const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route to 'home'
{ path: 'home', component: HomeComponent },
{ path: 'products', component: ProductListComponent },
{ path: 'products/:id', component: ProductDetailsComponent },
{ path: 'cart', component: CartComponent },
{ path: 'checkout', component: CheckoutComponent },
{ path: 'order-confirmation', component: OrderConfirmationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
