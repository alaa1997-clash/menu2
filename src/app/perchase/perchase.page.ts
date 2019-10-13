import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ParamService } from '../param.service';

@Component({
  selector: 'app-perchase',
  templateUrl: './perchase.page.html',
  styleUrls: ['./perchase.page.scss'],
})
export class PerchasePage implements OnInit {

  menu:any;
  constructor(private router: Router,private param:ParamService) { 

  }

  ngOnInit() {
    this.menu = [];
    let data = this.param.getData();
    this.menu = data;
    console.log(data);
  }
}

