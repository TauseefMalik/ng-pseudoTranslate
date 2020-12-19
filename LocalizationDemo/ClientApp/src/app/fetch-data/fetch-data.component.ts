import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private translate: TranslateService) {
    http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
  getCurrentLocale(){
    return this.translate.currentLang;
  }
  getSummary(temp: number){
    if (temp >= 45) {
      return this.translate.instant('Weather.Sweltering');
    }
    if (temp<45 && temp>=30) {
      return this.translate.instant('Weather.Hot');
    }
    if (temp<30 && temp>=25) {
      return this.translate.instant('Weather.Warm');
    }
    if (temp<25 && temp>=10) {
      return this.translate.instant('Weather.Cool');
    }
    if (temp<10 && temp>=0) {
      return this.translate.instant('Weather.Chilly');
    }
    if (temp<0) {
      return this.translate.instant('Weather.Freezing');
    }
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  // summary: string;
}
