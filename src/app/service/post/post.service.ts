import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

import {AppService} from '../app.service';

@Injectable()
export class PostService {
  constructor(private appService:AppService){}
  getPosts():Observable<any>{
    return this.appService.get('/post').map(res=>res.json()).catch(error=>Observable.throw(error));
  }
}
