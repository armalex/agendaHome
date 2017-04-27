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
     {nom:'Janvier',nbrJours:31,premierJour:'Dimanche',indiceDepart:7,saison:'hiver',saisonImg:'bg-mois-hiver',couleurTitre:'white'},
     {nom:'Fevrier',nbrJours:28,premierJour:'Mercredi',indiceDepart:3,saison:'hiver',saisonImg:'bg-mois-hiver',couleurTitre:'white'},
     {nom:'Mars',nbrJours:31,premierJour:'Mercredi',indiceDepart:3,saison:'hiver',saisonImg:'bg-mois-hiver',couleurTitre:'white'},
     {nom:'Avril',nbrJours:30,premierJour:'Samedi',indiceDepart:6,saison:'printemps',saisonImg:'bg-mois-printemps',couleurTitre:'springgreen'},
     {nom:'Mai',nbrJours:31,premierJour:'Lundi',indiceDepart:1,saison:'printemps',saisonImg:'bg-mois-printemps',couleurTitre:'springgreen'},
     {nom:'Juin',nbrJours:30,premierJour:'Jeudi',indiceDepart:4,saison:'printemps',saisonImg:'bg-mois-printemps',couleurTitre:'springgreen'},
     {nom:'Juillet',nbrJours:31,premierJour:'Samedi',indiceDepart:6,saison:'ete',saisonImg:'bg-mois-ete',couleurTitre:'red'},
     {nom:'Aout',nbrJours:31,premierJour:'Mardi',indiceDepart:2,saison:'ete',saisonImg:'bg-mois-ete',couleurTitre:'red'},
     {nom:'Septembre',nbrJours:30,premierJour:'Vendredi',indiceDepart:5,saison:'ete',saisonImg:'bg-mois-ete',couleurTitre:'red'},
     {nom:'Octobre',nbrJours:31,premierJour:'Dimanche',indiceDepart:7,saison:'automne',saisonImg:'bg-mois-automne',couleurTitre:'orange'},
     {nom:'Novembre',nbrJours:30,premierJour:'Mercredi',indiceDepart:3,saison:'automne',saisonImg:'bg-mois-automne',couleurTitre:'orange'},
     {nom:'Décembre',nbrJours:31,premierJour:'Vendredi',indiceDepart:5,saison:'automne',saisonImg:'bg-mois-automne',couleurTitre:'orange'},
    ]);
  }
  
  debutMois(nomMois:string):Observable<string[]>{
      // calsul du mois a retourner en fonction du parametre
      // this.moisModel={nom:'Fevrier',nbrJours:28,premierJour:'Mercredi',indiceDepart:3};
      
      // let essai: string = "0";
      
      if (nomMois.match("Janvier")){
          return Observable.of (['','','','','','','1','2','3','4','5','6','7','8','9',
                '10','11','12','13','14','15','16',
                '17','18','19','20','21','22','23','24','25',
                '26','27','28','29','30','31']); 
      }
      if (nomMois.match("Fevrier")){
          return Observable.of (['','','1','2','3','4','5','6','7','8','9',
                '10','11','12','13','14','15','16',
                '17','18','19','20','21','22','23','24','25',
                '26','27','28']); 
      }
      
      if (nomMois.match("Mars")){
          return Observable.of (['','','1','2','3','4','5','6','7','8','9',
                '10','11','12','13','14','15','16',
                '17','18','19','20','21','22','23','24','25',
                '26','27','28','29','30','31']); 
      }
      
      if (nomMois.match("Avril")){
          return Observable.of (['','','','','','1','2','3','4','5','6','7','8','9',
                '10','11','12','13','14','15','16',
                '17','18','19','20','21','22','23','24','25',
                '26','27','28','29','30']); 
      }
      
       if (nomMois.match("Mai")){
          return Observable.of (['1','2','3','4','5','6','7','8','9',
                '10','11','12','13','14','15','16',
                '17','18','19','20','21','22','23','24','25',
                '26','27','28','29','30','31']); 
      }
     
      if (nomMois.match("Juin")){
          return Observable.of (['','','','','1','2','3','4','5','6','7','8','9',
                '10','11','12','13','14','15','16',
                '17','18','19','20','21','22','23','24','25',
                '26','27','28','29','30']); 
      }
      
     if (nomMois.match("Juillet")){
          return Observable.of (['','','','','','1','2','3','4','5','6','7','8','9',
                '10','11','12','13','14','15','16',
                '17','18','19','20','21','22','23','24','25',
                '26','27','28','29','30','31']); 
      }
      
      if (nomMois.match("Aout")){
          return Observable.of (['','1','2','3','4','5','6','7','8','9',
                '10','11','12','13','14','15','16',
                '17','18','19','20','21','22','23','24','25',
                '26','27','28','29','30','31']); 
      }
      
      if (nomMois.match("Septembre")){
          return Observable.of (['','','','','1','2','3','4','5','6','7','8','9',
                '10','11','12','13','14','15','16',
                '17','18','19','20','21','22','23','24','25',
                '26','27','28','29','30']); 
      }
      
      if (nomMois.match("Octobre")){
          return Observable.of (['','','','','','','1','2','3','4','5','6','7','8','9',
                '10','11','12','13','14','15','16',
                '17','18','19','20','21','22','23','24','25',
                '26','27','28','29','30','31']); 
      }
      
      if (nomMois.match("Novembre")){
          return Observable.of (['','','1','2','3','4','5','6','7','8','9',
                '10','11','12','13','14','15','16',
                '17','18','19','20','21','22','23','24','25',
                '26','27','28','29','30']); 
      }
      
       if (nomMois.match("Décembre")){
          return Observable.of (['','','','','1','2','3','4','5','6','7','8','9',
                '10','11','12','13','14','15','16',
                '17','18','19','20','21','22','23','24','25',
                '26','27','28','29','30','31']); 
      }
  }
}
