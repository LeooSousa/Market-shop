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
                { id: 0, name: 'Bananas Pequena', preco: '400', amount: '3'},
                { id: 1, name: 'Bananas Média', preco: '400', amount: '3' },
                { id: 2, name: 'Bananas Grande', preco: '200', amount: '3'}
            ]
        },
        {
            category: 'Batata',
            products: [
                { id: 3, name: 'Palha', preco: '500' },
                { id: 4, name: 'Doce', preco: '300' },
                { id: 5, name: 'inglesa', preco: '1000' },
                { id: 6, name: 'Krenglè', preco: '300' },
                { id: 7, name: 'Bètè Bètè', preco: '500' },
                { id: 8, name: 'Florido', preco: '300' }
            ]
        },
        {
            category: 'Maçã',
            products: [
                { id: 9, name: 'Maça vermelha', preco: '100' },
                { id: 10, name: 'Maçã verde', preco: '100' },
                { id: 11, name: 'Patate Douce', preco: '300' },
                { id: 12, name: 'Taro', preco: '500' },
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
