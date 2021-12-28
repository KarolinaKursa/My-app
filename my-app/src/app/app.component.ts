import { Component } from '@angular/core';
import { Weather } from './weather';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(public http: HttpClient){}

  title = 'my-app';
  weather: Weather;
  //weatherList: Weather[];
  weatherList: Weather[];
  
  getData() {
    var data = this.getWeather();
    var x = data.subscribe(response => {
      this.weatherList = response;
      console.log(this.weatherList);
    })
  }

  getWeather(): Observable<any> {
    const headers= new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*');
      const headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
      
      const requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders(headerDict), 
      };

      console.log(headers)
    return this.http.get<Weather[]>("https://www.metaweather.com/api/location/2487956/", requestOptions)
  }
}

