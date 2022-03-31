import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements AfterContentInit {

  public loading = true;
  public config: { [name: string]: any };

  constructor() {
    this.config = {
      fullScreenBackdrop: true
    }
  }

  ngAfterContentInit() {
    this.loading = false;
  }
}
