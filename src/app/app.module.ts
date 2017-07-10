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
import { ExponentialstrengthpipePipe } from '../amxPipes/exponentialstrengthpipe.pipe.spec';
import {GOOGLE_MAPS_PROVIDERS} from 'angular2-google-map/core';
import { AmxchangecolorPipe } from '../amxPipes/amxchangecolor.pipe';
import { ExponentialstrengthPipe } from './amxTools/amxPipes/exponentialstrength.pipe';



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
    ExponentialstrengthpipePipe,
    AmxchangecolorPipe,
    ExponentialstrengthPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
     AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  providers: [MoisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
