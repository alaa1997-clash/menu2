import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { async } from 'q';
 
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
 
  selectedItems = [];
 
  total = 0;
 
  constructor(private cartService: CartService, private router: Router,public toast: ToastController , public alertController:
    AlertController) { }
 
  ngOnInit() {
    let items = this.cartService.getCart();
    let selected = {};
    for (let obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = {...obj, count: 1};
      }
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key])
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
  }
 
  
    async remAllCartEle() {
      const alert = await this.alertController.create({
        header: 'Confirm!',
        message: '<strong>Do you really delete all items from cart?</strong>',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              this.router.navigate(['cart']);
            }
          }, {
            text: 'Confirm',
            handler: () => {
             this.cartService.emptyCart();
  
              }
 }
        ] 
      });
  
      await alert.present();
    }
  
   
  

   openOrder() {
    this.router.navigate(['/perchase']);
  }
  async addItem(message: string , time: number, position: any, color='primary'){
    let toast = await this.toast.create({
      message: message,
      duration: time,
      position: position,
      // showCloseButton: true,
      // closeButtonText: 'Got it!',
      color: color,
      cssClass:'toast-bg'
    });
  
    toast.present();
  }
}
