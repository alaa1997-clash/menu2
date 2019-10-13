import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ResourceLoader } from '@angular/compiler';
import { Router } from '@angular/router';
import { ContentfulService } from './contentful.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  pasta: any[] = []; 
    private data = [
        {
          category: 'Pizza',
          expanded: false,
          products: [
            { id: 0, name: 'Salami', price: '8' },
            { id: 1, name: 'Classic', price: '5' },
            { id: 2, name: 'Tuna', price: '9' },
            { id: 3, name: 'Hawai', price: '7' }
          ],

        },
        {
          category: 'Pasta',
          products: [
            { id: 4, name: 'Mac & Cheese', price: '8' },
            { id: 5, name: 'Bolognese', price: '6' }
          ]
        },
        {
          category: 'Salad',
          products: [
            { id: 6, name: 'Ham & Egg', price: '8' },
            { id: 7, name: 'Basic', price: '5' },
            { id: 8, name: 'Ceaser', price: '9' }
          ]
        }
      ];

   
 

  private cart = [];

  constructor(private toast: ToastController, private contentful: ContentfulService) {
    this.contentful.getCars().then((pasta: any) => {
      this.pasta = pasta;
    });
  }

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  addProduct(product) {
    this.cart.push(product);
  }

  remEndProduct() {
    this.cart.pop();
  }


  getItemById(id: Number) {

    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].id === id) {
        this.cart.splice(i, 1);
        this.addItem('Your item has removed!', 3000, 'bottom', 'danger');


    } else if (this.cart[i] !== id) {
      this.addItem('Your item has no removed!', 3000, 'bottom', 'dark');
    }
    }

    }

    emptyCart() {
       if (this.cart.length !== 0) {
      for (let i = 0; i < this.cart.length; i++) {
          this.cart.splice(i, 1);
          i--;

          location.reload();

      }
        } else {
            this.addItem('there are no items in the cart!', 3000, 'bottom', 'dark');
           }
                }


  async addItem(message: string , time: number, position: any, color= 'primary') {
    const toast = await this.toast.create({
      message,
      duration: time,
      position,
      // showCloseButton: true,
      // closeButtonText: 'Got it!',
      color,
      cssClass: 'toast-bg'
    });

    toast.present();
  }
}



