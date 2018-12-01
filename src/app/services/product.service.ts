import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../config/app.config';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  public uploadProduct(data:Product, selectedFile:File):Observable<any>{
    const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    const endpoint = AppConfig.PRODUCT_ENDPOINT;

    let formdata: FormData = new FormData();
    
    Object.keys(data).map((key)=>{
      if(key == 'techSpecs'){
        formdata.append(key,JSON.stringify(data[key]));
      }else{
        formdata.append(key,data[key]+"");
      }
        
    });

    formdata.append('photo',selectedFile);

    const req = new HttpRequest('POST',endpoint,formdata,{reportProgress: true,responseType:'text'});

    return this.http.request(req);
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
