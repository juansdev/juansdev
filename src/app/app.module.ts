import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxLoadingModule } from 'ngx-loading';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/components/header/header.component';
import { FooterComponent } from './home/components/footer/footer.component';
import { AboutMeComponent } from './home/pages/about-me/about-me.component';
import { ContactMeComponent } from './home/pages/contact-me/contact-me.component';
import { SkillsComponent } from './home/pages/skills/skills.component';
import { BriefcaseComponent } from './home/pages/briefcase/briefcase.component';
import { ResumeComponent } from './home/pages/resume/resume.component';
import { PresentationComponent } from './home/pages/presentation/presentation.component';
import { RadialMenuComponent } from './home/components/radial-menu/radial-menu.component';
import { ServicesComponent } from './home/pages/services/services.component';
import { LoadingComponent } from './home/pages/loading/loading.component';
import { MiniPlayerFooterComponent } from './home/components/mini-player-footer/mini-player-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutMeComponent,
    ContactMeComponent,
    SkillsComponent,
    BriefcaseComponent,
    ResumeComponent,
    PresentationComponent,
    RadialMenuComponent,
    ServicesComponent,
    LoadingComponent,
    MiniPlayerFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
