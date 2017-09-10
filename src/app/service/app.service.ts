import { Injectable } from '@angular/core';
import {Http,RequestOptionsArgs,Response,Headers} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class AppService {

  apiUrl = 'http://santa.dev';
  headers = new Headers({
    'Accept':'application/json',
    'content-type':'application/hal+json',
  });
  constructor(private http:Http) { }
  getUrl(url:string):string{
    return this.apiUrl + url;
  }

  getOptions(options:RequestOptionsArgs):RequestOptionsArgs {
    let op = {headers:this.headers};
    return Object.assign(op,options);
  }

  get(endpoint:string,options?:RequestOptionsArgs):Observable<Response> {
    let url = this.getUrl(endpoint);
    let op = this.getOptions(options);
    return this.http.get(url,options);
  }
}
