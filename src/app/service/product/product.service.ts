import { Injectable } from '@angular/core';
import {AppService} from '../app.service';

import {Observable} from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private appService:AppService) { }

  getProducts(id:number):Observable<any>{
    return this.appService.get('/product/'+id+'?_format=hal_json').map(res=>res.json()).catch(error=>Observable.throw(error));
  }
}
