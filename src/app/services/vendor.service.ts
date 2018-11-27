import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../config/app.config';
import { Vendor } from '../model/vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient) { }
  
  public addVendor(vendor:Vendor):Observable<any>{
    console.log("-----service layer method is called!!!!!!!!!!!");
    console.log(vendor);
    const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    const endpoint = AppConfig.VENDOR_ENDPOINT;
    return this.http.post(endpoint,vendor,httpOptions);
  }

  public findVendors():Observable<Vendor>{
    const endpoint = AppConfig.VENDOR_ENDPOINT;
    return this.http.get<Vendor>(endpoint);
  }
}
