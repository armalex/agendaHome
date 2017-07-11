import { Component, OnInit, NgModule } from '@angular/core';
import { marker } from '../../models/marker.model';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'pr-amxgooglemap',
  templateUrl: './amxgooglemap.component.html',
  styleUrls: ['./amxgooglemap.component.css']
})

export class AmxgooglemapComponent implements OnInit {
  title: string = 'Mon positionnement ...';

  zoom: number = 8;
  lat: number = 47.13035;
  lng: number = 1.332016;

   markers: marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
mapClicked($event: MouseEvent) {
   console.log('MouseEvent', $event);
//     this.markers.push({
//      lat: $event.coords.lat,
//      lng: $event.coords.lng
//    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

}
