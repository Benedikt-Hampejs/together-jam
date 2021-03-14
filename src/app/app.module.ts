import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { IndexSectionComponent } from './index-section/index-section.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnimateModule } from './animate/animate.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PartnerSectionComponent } from './partner-section/partner-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { HomeComponent } from './home/home.component';
import {appRouting, routingComponents} from './app.routing';
import { AboutComponent } from './about/about.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import {IvyGalleryModule} from 'angular-gallery';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import {EmailService} from './service/emailService'

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HeaderComponent,
    IndexSectionComponent,
    FooterComponent,
    PartnerSectionComponent,
    ContactSectionComponent,
    HomeComponent,
    routingComponents,
    AboutComponent,
    GallerieComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AnimateOnScrollModule.forRoot(),
    FontAwesomeModule,
    AnimateModule,
    BrowserAnimationsModule,
    appRouting,
    IvyGalleryModule,
    BrowserModule.withServerTransition({appId: 'app'}),
    FormsModule,
    HttpClientModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
