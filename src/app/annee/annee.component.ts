import { Component, OnInit } from '@angular/core';
import { MoisComponent } from '../mois/mois.component';

@Component({
  selector: 'pr-annee',
  templateUrl: './annee.component.html',
  styleUrls: ['./annee.component.css']
})
export class AnneeComponent implements OnInit {
  
annee :string = '2017';
moisComponent : MoisComponent;
nbrJours: number = 31;
 
constructor() {
}

  ngOnInit() {
   // this.nbrJours = this.moisComponent.moisCourant.nbrJours;
  
  }
  
  
  nextMonth(){
      /*
      if (this.moisComponent.moisCourantIndice==11){
          this.moisComponent.setMois(0);
      }else{
          this.moisComponent.setMois(this.moisComponent.moisCourantIndice+1) ;
      }*/
   }

  previousMonth(){
      /*
      if (this.moisComponent.moisCourantIndice==0){
          this.moisComponent.setMois(11);
      }else {
         this.moisComponent.setMois(this.moisComponent.moisCourantIndice-1) ;
      }*/
  } 
 
}
