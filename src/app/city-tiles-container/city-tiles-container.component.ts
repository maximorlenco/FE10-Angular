import {Component, OnInit} from '@angular/core';
import {CityModel} from '../model/CityModel';
import {cities} from 'c';

@Component({
  selector: 'app-city-tiles-container',
  templateUrl: './city-tiles-container.component.html',
  styleUrls: ['./city-tiles-container.component.scss']
})
export class CityTilesContainerComponent implements OnInit {
  cities: CityModel[] = [
    {
      city: 'Berlin',
      imageUrl: 'assets/img/berlin.jpg'
    },
    {
      city: 'Prague',
      imageUrl: 'assets/img/prague.jpg'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
