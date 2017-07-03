import { Injectable } from '@angular/core';
import { MoisModel } from '../models/mois.model';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


@Injectable()
export class MoisService {

  private baseUrl: string = 'http://localhost:9991/rest/helloensma/annee';
  moisModel: MoisModel;
  constructor(private http: Http) { }

  list():  Observable <Array<MoisModel>> {
    return Observable.of ([
     {nom: 'Janvier', indice: 1 ,nbrJours: 31, premierJour: 'Dimanche', indiceDepart: 7, saison: 'hiver', saisonImg: 'bg-mois-hiver', couleurTitre: 'white'},
     {nom: 'Fevrier',indice: 2 ,nbrJours: 28, premierJour: 'Mercredi', indiceDepart: 3, saison: 'hiver', saisonImg: 'bg-mois-hiver', couleurTitre: 'white'},
     {nom: 'Mars', indice: 3 , nbrJours: 31, premierJour: 'Mercredi', indiceDepart: 3, saison: 'hiver', saisonImg: 'bg-mois-hiver', couleurTitre: 'white'},
     {nom: 'Avril', indice: 4 , nbrJours: 30, premierJour: 'Samedi', indiceDepart: 6, saison: 'printemps', saisonImg: 'bg-mois-printemps', couleurTitre: 'springgreen'},
     {nom: 'Mai', indice: 5, nbrJours: 31, premierJour: 'Lundi', indiceDepart: 1, saison: 'printemps', saisonImg: 'bg-mois-printemps', couleurTitre: 'springgreen'},
     {nom: 'Juin', indice :6 , nbrJours: 30, premierJour: 'Jeudi', indiceDepart: 4, saison: 'printemps', saisonImg: 'bg-mois-printemps', couleurTitre: 'springgreen'},
     {nom: 'Juillet', indice: 7 , nbrJours: 31, premierJour: 'Samedi', indiceDepart: 6, saison: 'ete', saisonImg: 'bg-mois-ete', couleurTitre: 'red'},
     {nom: 'Aout', indice: 8 , nbrJours: 31, premierJour: 'Mardi', indiceDepart: 2, saison: 'ete', saisonImg: 'bg-mois-ete', couleurTitre: 'red'},
     {nom: 'Septembre', indice: 9 , nbrJours: 30, premierJour: 'Vendredi', indiceDepart: 5, saison: 'ete', saisonImg: 'bg-mois-ete', couleurTitre: 'red'},
     {nom: 'Octobre', indice: 10 , nbrJours: 31, premierJour: 'Dimanche', indiceDepart: 7, saison: 'automne', saisonImg: 'bg-mois-automne', couleurTitre: 'orange'},
     {nom: 'Novembre', indice: 11 , nbrJours: 30, premierJour: 'Mercredi', indiceDepart: 3, saison: 'automne', saisonImg: 'bg-mois-automne', couleurTitre: 'orange'},
     {nom: 'Décembre', indice: 12 , nbrJours: 31, premierJour: 'Vendredi', indiceDepart: 5, saison: 'automne', saisonImg: 'bg-mois-automne', couleurTitre: 'orange'},
    ]);
  }


//    getAll(): Observable<MoisModel[]>{
//    let moi$ = this.http
//      .get(`${this.baseUrl}?name=janvier&indice=1`, {headers: this.getHeaders()})
//      return moi$;
//  }


  private getHeaders() {
    // I included these headers because otherwise FireFox
    // will request text/html instead of application/json
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }



  listHttp(indiceMois: number): Observable<Array<MoisModel>> {
    return this.http.get('http://localhost:9991/rest/helloensma/search?indice=' + indiceMois)
      .map(res => res.json());
  }


  listeJours(indiceMois: string): Observable<string[]> {

            return this.http.get('http://localhost:9991/rest/helloensma/search?name=janvier&indice=' + indiceMois)
      .map(res => res.json());
  }


  listeJoursFeries(indiceMois: string): Observable<string[]> {

            return this.http.get('http://localhost:9991/rest/helloensma/search?name=janvier&indice=' + indiceMois)
      .map(res => res.json());
  }


  debutMois(nomMois: string): Observable<string[]> {
      // calcul du mois a retourner en fonction du parametre
      // this.moisModel={nom:'Fevrier',nbrJours:28,premierJour:'Mercredi',indiceDepart:3};

      // let essai: string = "0";

      if (nomMois.match('Janvier')) {
          return Observable.of (['', '', '', '', '', '', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                '10', '11', '12', '13', '14', '15', '16',
                '17', '18', '19', '20', '21', '22', '23', '24', '25',
                '26', '27', '28', '29', '30', '31']);
      }
      if (nomMois.match('Fevrier')) {
          return Observable.of (['', '', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                '10', '11', '12', '13', '14', '15', '16',
                '17', '18', '19', '20', '21', '22', '23', '24', '25',
                '26', '27', '28']);
      }

      if (nomMois.match('Mars')) {
          return Observable.of (['', '', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                '10', '11', '12', '13', '14', '15', '16',
                '17', '18', '19', '20', '21', '22', '23', '24', '25',
                '26', '27', '28', '29', '30', '31']);
      }

      if (nomMois.match('Avril')) {
          return Observable.of (['', '', '', '', '', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                '10', '11', '12', '13', '14', '15', '16',
                '17', '18', '19', '20', '21', '22', '23', '24', '25',
                '26', '27', '28', '29', '30']);
      }

       if (nomMois.match('Mai')) {
          return Observable.of (['1', '2', '3', '4', '5', '6', '7', '8', '9',
                '10', '11', '12', '13', '14', '15', '16',
                '17', '18', '19', '20', '21', '22', '23', '24', '25',
                '26', '27', '28', '29', '30', '31']);
      }

      if (nomMois.match('Juin')) {
          return Observable.of (['', '', '', '', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                '10', '11', '12', '13', '14', '15', '16',
                '17', '18', '19', '20', '21', '22', '23', '24', '25',
                '26', '27', '28', '29', '30']);
      }

     if (nomMois.match('Juillet')) {
          return Observable.of (['', '', '', '', '', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                '10', '11', '12', '13', '14', '15', '16',
                '17', '18', '19', '20', '21', '22', '23', '24', '25',
                '26', '27', '28', '29', '30', '31']);
      }

      if (nomMois.match('Aout')) {
          return Observable.of (['', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                '10', '11', '12' , '13', '14', '15', '16',
                '17', '18', '19', '20', '21', '22', '23', '24', '25',
                '26', '27', '28', '29', '30', '31']);
      }

      if (nomMois.match('Septembre')) {
          return Observable.of (['', '', '', '', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                '10', '11', '12', '13', '14', '15', '16',
                '17', '18', '19', '20', '21', '22', '23', '24', '25',
                '26', '27', '28', '29', '30']);
      }

      if (nomMois.match('Octobre')) {
          return Observable.of (['', '', '', '', '', '', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                '10', '11', '12', '13', '14', '15', '16',
                '17', '18', '19', '20', '21', '22', '23', '24', '25',
                '26', '27', '28', '29', '30', '31']);
      }

      if (nomMois.match('Novembre')) {
          return Observable.of (['', '', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                '10', '11', '12', '13', '14', '15', '16',
                '17', '18', '19', '20', '21', '22', '23', '24', '25',
                '26', '27', '28', '29', '30']);
      }

       if (nomMois.match('Décembre')) {
          return Observable.of (['', '', '', '', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                '10', '11', '12', '13', '14', '15', '16',
                '17', '18', '19', '20', '21', '22', '23', '24', '25',
                '26', '27', '28', '29', '30', '31']);
      }
  }



 debutMoisDynamique(indiceMois: number): Observable<string[]> {

      return this.http.get('http://localhost:9991/rest/helloensma/search?name=janvier&indice=' + indiceMois)
             .map(res => res.json());
   }
}
