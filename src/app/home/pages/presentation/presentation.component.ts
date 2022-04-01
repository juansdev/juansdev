import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.min.css']
})
export class PresentationComponent implements OnInit, OnDestroy {

  public current_time: string;
  public timer: string;
  private interval_id: NodeJS.Timeout;
  private languageList = [
    { code: 'es', label: 'Spanish' },
    { code: 'en', label: 'English' },
  ];
  
  constructor(private translate: TranslateService) {
    const time = new Date();
    this.current_time = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
    this.timer = '00:00:00';
    this.interval_id = setInterval( () => {
    }, 1000);
    clearInterval(this.interval_id);
  }

  ngOnInit() {
    let sec: number = 0;
    function pad ( val: number ): number {
      return val > 9 ? val : 0 + val; 
    }
    this.interval_id = setInterval( () => {
        const timer_seconds: number = pad(++sec%60);
        const timer_minutes: number = pad(Math.round((sec/60)%60));
        const timer_hours: number = pad(Math.round(sec/3600));
        this.timer = (timer_hours<10?'0'+timer_hours.toString():timer_hours.toString()) + 
        ':' + (timer_minutes<10?'0'+timer_minutes.toString():timer_minutes.toString()) + 
        ':' + 
        (timer_seconds<10?'0'+timer_seconds.toString():timer_seconds.toString());
        const time = new Date();
        this.current_time = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.interval_id) {
      clearInterval(this.interval_id);
    }
  }

  changeSiteLanguage(): void {
    const currentLanguage = this.translate.currentLang === 'en' ? 'es' : 'en';
    const selectedLanguage = this.languageList.find((language) => language.code === currentLanguage)?.label.toString();
    if (selectedLanguage) {
      this.translate.use(currentLanguage);
    }
  }

}
