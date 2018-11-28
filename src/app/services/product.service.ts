import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../config/app.config';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  public uploadProduct(data):Observable<any>{
    const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    const endpoint = AppConfig.PRODUCT_ENDPOINT;
    return this.http.post(endpoint,data,httpOptions);
  }

  public getProducts():Observable<Product[]>{
    const endpoint = AppConfig.PRODUCT_ENDPOINT;
    return this.http.get<Product[]>(endpoint);
  }

  public getProductByPid(data):Observable<Product[]>{
    const endpoint = AppConfig.PRODUCT_ENDPOINT+'/'+data;
    return this.http.get<Product[]>(endpoint);
  }
}
