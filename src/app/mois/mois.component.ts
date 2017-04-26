import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { MoisModel } from '../../models/mois.model';
import { MoisService } from '../mois.service';

@Component({
  selector: 'pr-mois',
  templateUrl: './mois.component.html',
  styleUrls: ['./mois.component.css']
})
export class MoisComponent implements OnInit {
    
@Input() moisModel: MoisModel;
@Input() moisIndice: number;

@Output() moisClicked = new EventEmitter<MoisModel>();

semaines: string[]=['Lu','Ma','Me','Je','Ve','Sa','Di'];
listeJours: string[];
saison: string ='bg-mois-printemps';
 
  constructor(private moisService: MoisService) { }
   

  ngOnInit() {
      this.moisService.debutMois(this.moisModel.nom).subscribe(listeJours => this.listeJours = listeJours);
      
     }
     
  getMoisImageUrl() {
    //return `assets/images/mois-${this.moisModel.nom.toLowerCase()}.png`;
    return `mois-`
  }

  clicked() {
    this.moisClicked.emit(this.moisModel);
  }
  
}
