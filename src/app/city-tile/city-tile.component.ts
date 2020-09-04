import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-city-tile',
  templateUrl: './city-tile.component.html',
  styleUrls: ['./city-tile.component.scss']
})
export class CityTileComponent implements OnInit {
  @Input()
  imageUrl: string;
  @Input()
  city: string ;
  @Input()
  description: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
