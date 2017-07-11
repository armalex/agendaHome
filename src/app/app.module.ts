import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AnneeComponent } from './annee/annee.component';
import { MoisComponent } from './mois/mois.component';
import { SemaineComponent } from './semaine/semaine.component';
import { JourComponent } from './jour/jour.component';
import { MoisService } from './mois.service';
import { HomeComponent } from './home/home.component';
import { AideComponent } from './aide/aide.component';
import { AmxtryitComponent } from './amx/amxChangeBGcolor/amxtryit.component';
import { HighlightDirective } from '../amxDirectives/AmxHighlight.directive';
import { AmxclickeventComponent } from './amx/amxClickEvent/amxclickevent.component';
import { AmxFormComponent } from './amx/amxform/amxform.component';
import { AgmCoreModule } from '@agm/core';
import { GOOGLE_MAPS_PROVIDERS } from 'angular2-google-map/core';


import { ExponentialStrengthPipe } from './amxTools/amxPipes/exponentialstrength.pipe';
import { AmxgooglemapComponent } from './amxgooglemap/amxgooglemap.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AnneeComponent,
    MoisComponent,
    SemaineComponent,
    JourComponent,
    HomeComponent,
    AideComponent,
    AmxtryitComponent,
    HighlightDirective,
    AmxclickeventComponent,
    AmxFormComponent,
    ExponentialStrengthPipe,
    AmxgooglemapComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    AgmCoreModule.forRoot()
  ],
  providers: [MoisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
