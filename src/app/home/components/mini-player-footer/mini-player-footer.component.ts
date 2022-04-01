import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-player-footer',
  templateUrl: './mini-player-footer.component.html',
  styleUrls: ['./mini-player-footer.component.min.css']
})
export class MiniPlayerFooterComponent {

  public music: boolean;
  constructor() {
    this.music = true;
  }

  toggleMusic(){
    this.music = this.music ? false : true;
  }

}
