import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamService {
  params:any;
  constructor() { }
  setdata(data: any) {
    this.params = data;
  }
  getData() {
    return this.params;
  }

}
