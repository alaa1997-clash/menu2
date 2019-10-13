import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
import { ParamService } from '../param.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    constructor( private router: Router,
       private cartService: CartService,
        public alertController: AlertController, 
        private toast: ToastController,
        private contentful: ContentfulService,
        private param:ParamService) { }

  ngOnInit(): void {
    this.contentful.getCars().then((data)=>{
      console.log(data);
    });
  }
  goToMenu(item: string) {
    // console.log(item);
    this.contentful.getFoodByCategory(item.toLowerCase()).then((data)=>{
      console.log(data);
      this.param.setdata(data);
      this.router.navigate(['/perchase']);
    });
  }
}
