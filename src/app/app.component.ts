import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public language_selected = '';

  constructor() {
  }

  onLanguageSelected(language_selected: any){
    this.language_selected = language_selected;
  }
}
