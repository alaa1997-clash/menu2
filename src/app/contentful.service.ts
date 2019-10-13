import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  // use to connect app with contentful cloud
  private client = createClient({
    space: 'iyr6mgkc96xe',
    accessToken: 'j8JBtalO81J8jIej4QSVjTPvR4qUkfabq51HSsE2oGU'
  });
  constructor() { }
  getCars(query?: object): Promise<Entry<any>[]>{
    return this.client.getEntries(Object.assign({
      content_type: 'menu'
    }, query))
      .then(res => res.items);
  }
  getFoodByCategory(category): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
     content_type: 'menu'
    }, {'fields.category': category}))
      .then(res => res.items);
  }
}
