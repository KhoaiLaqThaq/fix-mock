import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-building-search',
  templateUrl: './building-search.component.html',
  styleUrls: ['./building-search.component.css']
})
export class BuildingSearchComponent implements OnInit {

  @Output() searching = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.searching.emit(true);
    console.log(this.searching);
  }

}
