import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  
  constructor(private http: HttpClient) { }
  public test():void{
    console.log('hi');
  }
  
  public uploadProduct(data):Observable<any>{
    const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    const endpoint = AppConfig.PRODUCT_ENDPOINT;
    return this.http.post(endpoint,data,httpOptions);
  }

  public getProducts():Observable<any>{
    const endpoint = AppConfig.PRODUCT_ENDPOINT;
    return this.http.get(endpoint);
  }
}
