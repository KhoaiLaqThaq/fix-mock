import { Component, OnInit } from '@angular/core';
import {TelNoEdit} from "../../../_services/tel-number.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tel1: string = '0201236844';

  constructor() { }

  ngOnInit() {
  }

  editTelNo(telNo: string): string {
    return TelNoEdit.telNoHynphen(telNo);
  }

}
