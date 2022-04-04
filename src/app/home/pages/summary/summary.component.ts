import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.min.css']
})
export class SummaryComponent implements OnChanges {

  public url_pdf: SafeUrl;
  @Input() language_selected = '';


  constructor(private sanitizer: DomSanitizer,
    private translate: TranslateService) {
      this.url_pdf = this.sanitizer.bypassSecurityTrustResourceUrl('');
  }

  ngOnChanges(){
    this.translate.get('summary.cv_pdf').subscribe((filename_pdf: string) => {
      this.url_pdf = this.sanitizer.bypassSecurityTrustResourceUrl('assets/docs/'+filename_pdf+'.pdf');
    });
  }
}
