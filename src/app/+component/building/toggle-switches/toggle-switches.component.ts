import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-toggle-switches',
  templateUrl: './toggle-switches.component.html',
  styleUrls: ['./toggle-switches.component.css']
})
export class ToggleSwitchesComponent implements OnInit {

  // @ts-ignore
  @Output() isOpenSwitch: EventEmitter = new EventEmitter<>();
  public switchForm: FormGroup;

  constructor( ) { }

  ngOnInit() {
    this.switchForm = new FormGroup({
      constract: new FormControl(true),
      building: new FormControl(true),
      manager: new FormControl(true),
      apartment: new FormControl(true),
      cycle: new FormControl(true),
      other: new FormControl(false)
    });
    this.isOpenSwitch.emit(this.switchForm.value);
  }

  onSwitch() {
    // console.log(this.switchForm.value);
    this.isOpenSwitch.emit(this.switchForm.value);
  }




}
