import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advertisement } from '../model/advertisement';
import { AppConfig } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  endpoint:string=AppConfig.ADVERTISEMENT_ENDPOINT;
  
  constructor(private http:HttpClient) { }

  public findAdById(adId):Observable<any> {
    return this.http.get(this.endpoint+"?adId="+adId);
  }
}
