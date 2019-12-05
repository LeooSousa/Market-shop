import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.page.html',
  styleUrls: ['./frutas.page.scss'],
})
export class FrutasPage implements OnInit {
    cart = [];
    items = [];

    sliderConfig = {
        spaceBetween: 120,
        centeredSlides: true,
        slidesPerView: 1.6
    };

    constructor(private cartService: CartService,
                private router: Router) {}

    ngOnInit() {
        this.cart = this.cartService.getCart();
        this.items = this.cartService.getProducts();
    }

    addToCart(product) {
        this.cartService.addProduct(product);
    }

    openCart() {
        this.router.navigate(['cart']);
    }
  }