import { Component, OnInit, Input } from '@angular/core';
import { MoisComponent } from '../mois/mois.component';
import { MoisService } from '../mois.service';
import { MoisModel } from '../../models/mois.model';

@Component({
  selector: 'pr-annee',
  templateUrl: './annee.component.html',
  styleUrls: ['./annee.component.css']
})
export class AnneeComponent implements OnInit {
  
annee :string = '2017';
moisComponent : MoisComponent;
@Input() moisCourant: number = 10;

moisModel: Array<MoisModel> = [];
 
constructor(private moisService: MoisService) {
}
  ngOnInit() {
    this.moisService.list().subscribe(moisModel => this.moisModel = moisModel);
  
  }
  
  
  nextYear(){
     
  }

  previousYear(){
     
  } 
 
}
