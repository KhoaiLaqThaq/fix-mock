import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

  searching: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showDataTable( event ) {
    this.searching = event;
  }

}
