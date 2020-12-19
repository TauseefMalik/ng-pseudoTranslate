import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  convertedValue:number = 0;
  constructor(private translate: TranslateService) {

  }
  convert(val:number){
    this.convertedValue = val*0.85
  }
  getBtnText(){
    return this.translate.instant("Currency.ConvertBtnText");
  }

}
