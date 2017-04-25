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
     {nom:'Janvier',nbrJours:31,premierJour:'Dimanche',indiceDepart:7},
     {nom:'Fevrier',nbrJours:28,premierJour:'Mercredi',indiceDepart:3},
     {nom:'Mars',nbrJours:31,premierJour:'Mercredi',indiceDepart:3},
     {nom:'Avril',nbrJours:30,premierJour:'Samedi',indiceDepart:6},
     {nom:'Mai',nbrJours:31,premierJour:'Lundi',indiceDepart:1},
     {nom:'Juin',nbrJours:30,premierJour:'Jeudi',indiceDepart:4},
     {nom:'Juillet',nbrJours:31,premierJour:'Samedi',indiceDepart:6},
     {nom:'Aout',nbrJours:31,premierJour:'Mardi',indiceDepart:2},
     {nom:'Septembre',nbrJours:30,premierJour:'Vendredi',indiceDepart:5},
     {nom:'Octobre',nbrJours:31,premierJour:'Dimanche',indiceDepart:7},
     {nom:'Novembre',nbrJours:30,premierJour:'Mercredi',indiceDepart:3},
     {nom:'Décembre',nbrJours:31,premierJour:'Vendredi',indiceDepart:5},
    ]);
  }
  
  debutMois():Observable<string[]>{
      // calsul du mois a retourner en fonction du parametre
      //this.moisModel={nom:'Fevrier',nbrJours:28,premierJour:'Mercredi',indiceDepart:3};
      
      return Observable.of (['','','','','','1','2','3','4','5','6','7','8','9',
                '10','11','12','13','14','15','16',
                '17','18','19','20','21','22','23','24','25',
                '26','26','27','28','29','30','31']);
  }
}
