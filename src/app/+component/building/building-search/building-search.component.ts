import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-building-search',
  templateUrl: './building-search.component.html',
  styleUrls: ['./building-search.component.css']
})
export class BuildingSearchComponent implements OnInit {

  searching: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showDataTable( event ) {
    this.searching = event;
  }

}
