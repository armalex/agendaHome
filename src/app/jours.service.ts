import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { JourModel } from '../models/jour.model';
import 'rxjs/add/observable/of';

@Injectable()
export class JoursService {

  constructor() { }


 list():  Observable <Array<JourModel>> {
    return Observable.of([
     {nom: 'Janvier', premier: true, jourDuMois: 2, saint: 'st-patrick'}
    ]);
  }

}
