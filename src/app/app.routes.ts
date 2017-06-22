/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AnneeComponent } from './annee/annee.component';
import { AideComponent } from './aide/aide.component';


export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aide', component: AideComponent },
];


