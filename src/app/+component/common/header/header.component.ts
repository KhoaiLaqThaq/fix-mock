import {Component, Input, OnInit} from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() navLv1: string;
  @Input() navLv2: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
