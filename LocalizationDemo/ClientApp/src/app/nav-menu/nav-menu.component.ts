import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core'

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  constructor(private translate: TranslateService) {
  }

  isExpanded = false;
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
