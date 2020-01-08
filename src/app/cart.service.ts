import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    private data = [
        {
            category: 'Bananas ',
            expanded: true,
            products: [
                { id: 0, name: 'Bananas Pequena', preco: '5,50', amount: '3'},
                { id: 1, name: 'Bananas Média', preco: '6,80', amount: '3' },
                { id: 2, name: 'Bananas Grande', preco: '7,50', amount: '3'}
            ]
        },
        {
            category: 'Batata',
            products: [
                { id: 3, name: 'Batata Palha', preco: '5,00' },
                { id: 4, name: 'Batata Doce', preco: '3,00' },
                { id: 5, name: 'Batata inglesa', preco: '1,00' },
                
            ]
        },
        {
            category: 'Maçã',
            products: [
                { id: 9, name: 'Maça vermelha', preco: '1,00' },
                { id: 10, name: 'Maçã verde', preco: '1,50' },
                
            ]
        }
    ];

    private cart = [];

  constructor() { }

    getProducts() {
        return this.data;
    }

    getCart() {
        return this.cart;
    }
    addProduct(product) {
        this.cart.push(product);
    }
}
