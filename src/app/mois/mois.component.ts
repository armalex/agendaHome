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
@Input() moisIndice:number;

@Output() ponyClicked = new EventEmitter<MoisModel>();
    
 
  constructor() { }


  ngOnInit() {
     
     }
     
  getMoisImageUrl() {
    return `assets/images/mois-${this.moisModel.nom.toLowerCase()}.png`;
  }

  clicked() {
    this.ponyClicked.emit(this.moisModel);
  }
  
}
