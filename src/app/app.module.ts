import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AnneeComponent } from './annee/annee.component';
import { MoisComponent } from './mois/mois.component';
import { SemaineComponent } from './semaine/semaine.component';
import { JourComponent } from './jour/jour.component';
import { MoisService } from './mois.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AnneeComponent,
    MoisComponent,
    SemaineComponent,
    JourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MoisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
