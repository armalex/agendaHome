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
jours: string[]=['1','2','3','4','5','6','7','8','9',
                '10','11','12','13','14','15','16',
                '17','18','19','20','21','22','23','24','25',
                '26','26','27','28','29','30','31'];
semaines: string[]=['Lu','Ma','Me','Je','Ve','Sa','Di'];
listeJours:string[];
 
  constructor(private moisService: MoisService) { }
   

  ngOnInit() {
      this.moisService.debutMois(this.moisModel.nom).subscribe(listeJours => this.listeJours = listeJours);
      //this.listeJours.push(this.jours);
     }
     
  getMoisImageUrl() {
    return `assets/images/mois-${this.moisModel.nom.toLowerCase()}.png`;
  }

  clicked() {
    this.moisClicked.emit(this.moisModel);
  }
  
}
