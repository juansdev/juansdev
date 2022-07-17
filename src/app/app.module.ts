import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxLoadingModule } from 'ngx-loading';
import { GalleryModule } from  'ng-gallery';
import { LightboxModule } from  'ng-gallery/lightbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/components/header/header.component';
import { FooterComponent } from './home/components/footer/footer.component';
import { AboutMeComponent } from './home/pages/about-me/about-me.component';
import { ContactMeComponent } from './home/pages/contact-me/contact-me.component';
import { SkillsComponent } from './home/pages/skills/skills.component';
import { PortfolioComponent } from './home/pages/portfolio/portfolio.component';
import { PresentationComponent } from './home/pages/presentation/presentation.component';
import { RadialMenuComponent } from './home/components/radial-menu/radial-menu.component';
import { ServicesComponent } from './home/pages/services/services.component';
import { LoadingComponent } from './home/pages/loading/loading.component';
import { MiniPlayerFooterComponent } from './home/components/mini-player-footer/mini-player-footer.component';
import { NgxTranslateModule } from './translate/translate.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutMeComponent,
    ContactMeComponent,
    SkillsComponent,
    PortfolioComponent,
    PresentationComponent,
    RadialMenuComponent,
    ServicesComponent,
    LoadingComponent,
    MiniPlayerFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxLoadingModule.forRoot({}),
    GalleryModule,
    LightboxModule,
    BrowserAnimationsModule,
    NgxTranslateModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerImmediately'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
