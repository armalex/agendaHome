import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AnneeComponent,
    MoisComponent,
    SemaineComponent,
    JourComponent,
    HomeComponent,
    AideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [MoisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
