import { Injectable } from '@angular/core';
import { MoisModel } from '../models/mois.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class MoisService {
  moisModel:MoisModel;
  constructor() { }
  
  list():  Observable <Array<MoisModel>>{
    return Observable.of ([
     {nom:'Janvier',nbrJours:31,premierJour:'Dimanche'},
     {nom:'Fevrier',nbrJours:28,premierJour:'Mercredi'},
     {nom:'Mars',nbrJours:31,premierJour:'Mercredi'},
     {nom:'Avril',nbrJours:30,premierJour:'Samedi'},
     {nom:'Mai',nbrJours:31,premierJour:'Lundi'},
     {nom:'Juin',nbrJours:30,premierJour:'Jeudi'},
     {nom:'Juillet',nbrJours:31,premierJour:'Samedi'},
     {nom:'Aout',nbrJours:31,premierJour:'Mardi'},
     {nom:'Septembre',nbrJours:30,premierJour:'Vendredi'},
     {nom:'Octobre',nbrJours:31,premierJour:'Dimanche'},
     {nom:'Novembre',nbrJours:30,premierJour:'Mercredi'},
     {nom:'Décembre',nbrJours:31,premierJour:'Vendredi'},
    ]);
  }
  
  mois(mois:MoisModel):MoisModel{
      // calsul du mois a retourner en fonction du parametre
      return this.moisModel;
  }
}
