import { Component, OnInit } from '@angular/core';
import { MoisModel } from '../../models/mois.model';
import { MoisService } from '../mois.service';

@Component({
  selector: 'pr-mois',
  templateUrl: './mois.component.html',
  styleUrls: ['./mois.component.css']
})
export class MoisComponent implements OnInit {
    
moisModel: Array<MoisModel> = [];
    

  constructor(private moisService: MoisService) { }


  ngOnInit() {
     this.moisService.list().subscribe(moisModel => this.moisModel = moisModel);
     }
  
}
