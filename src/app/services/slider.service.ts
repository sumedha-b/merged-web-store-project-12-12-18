import { Injectable } from '@angular/core';
import { Slider } from '../model/slider';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest  } from '@angular/common/http';
import { AppConfig } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private http: HttpClient) { }

  public addSlider(slider:Slider, selectedFile:File):Observable<any> {
    const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    const endpoint = AppConfig.SLIDER_ENDPOINT;
    console.log("Checking the file");
    console.log(selectedFile);
    let formdata: FormData = new FormData();
    formdata.append('topSmallText', slider.topSmallText+'');
    formdata.append('boldText', slider.boldText+'');
    formdata.append('paraText', slider.paraText+'');
    formdata.append('btnOneText', slider.btnOneText+'');
    formdata.append('btnTwoText', slider.btnTwoText+'');

    formdata.append('image',selectedFile);

    const req = new HttpRequest('PUT',endpoint, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    
    return this.http.request(req);
  }

  public findSlider():Observable<Slider[]> {
    const endpoint = AppConfig.SLIDER_ENDPOINT;
    return this.http.get<Slider[]>(endpoint);
  }
}
