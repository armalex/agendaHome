import { Injectable } from '@angular/core';
import { MoisModel } from '../models/mois.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class MoisService {

  constructor() { }
  
  list():  Observable <Array<MoisModel>>{
    return Observable.of ([
     {nom:'Janvier',nbrJours:31},
     {nom:'Fevrier',nbrJours:29},
     {nom:'Mars',nbrJours:30},
     {nom:'Avril',nbrJours:31},
     {nom:'Mai',nbrJours:30},
     {nom:'Juin',nbrJours:31},
     {nom:'Juillet',nbrJours:30},
     {nom:'Aout',nbrJours:30},
     {nom:'Septembre',nbrJours:31},
     {nom:'Octobre',nbrJours:31},
     {nom:'Novembre',nbrJours:31},
     {nom:'Décembre',nbrJours:30},
    ]);
  }

}
