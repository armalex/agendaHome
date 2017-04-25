import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { JourModel } from '../models/jour.model';
import 'rxjs/add/observable/of';

@Injectable()
export class JoursService {

  constructor() { }


 list():  Observable <Array<JourModel>>{
    return Observable.of ([
     {nom:'Janvier',premier:'31',jourDuMois:'Dimanche'},
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

}
