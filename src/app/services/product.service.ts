import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../config/app.config';
import { Product } from '../model/product';
import { Review } from '../model/review';

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

  public getProductByMultipleIds(data):Observable<any>{

    console.log("Product Service - get Product By Multiple Ids");
    console.log(data);

    const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};

    const endpoint = AppConfig.PRODUCTBYIDS_ENDPOINT;

    let formdata: FormData = new FormData();    

    //var pids = ["5bff6a1f56ffe310f8240b2a","5bfc5d405f32c61bf86070e1"];
    //var json_arr = JSON.stringify(pids);
    //formdata.append('pids', json_arr+"");

    //var pids = "5bff6a1f56ffe310f8240b2a,5bfc5d405f32c61bf86070e1";
    var pids = data;
    //var pids = "YZZZ,5bff6a1f56ffe310f8240b2a";
    formdata.append('pids', pids+"");

    const req = new HttpRequest('POST',endpoint,formdata,{reportProgress: true,responseType:'text'});

    return this.http.request(req);
  }

  public saveReview(data:Review):Observable<any>{
    const endpoint = AppConfig.REVIEW_ENDPOINT;
    const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};

    return this.http.post(endpoint,data,httpOptions);

  }
  public getReviewByPid(pid:string):Observable<Review[]>{
    const endpoint = AppConfig.PRODUCT_ENDPOINT + '/' + pid + '/review';

    return this.http.get<Review[]>(endpoint);
  }

  public getRateing(pid:string):Observable<number>{
    const endpoint = AppConfig.PRODUCT_ENDPOINT + '/' + pid + '/rating';
    return this.http.get<number>(endpoint);
  }

}
