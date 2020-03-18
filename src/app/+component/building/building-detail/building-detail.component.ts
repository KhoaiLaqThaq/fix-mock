import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContactService} from "../../../_services/contact.service";
import {ContactModel} from "../../../model/contact.model";

@Component({
  selector: 'app-building-detail',
  templateUrl: './building-detail.component.html',
  styleUrls: ['./building-detail.component.css']
})
export class BuildingDetailComponent implements OnInit {

  contact: ContactModel;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.getContractFromRoute();
    debugger;
  }

  getContractFromRoute(): void {
    const contractNo = +this.route.snapshot.paramMap.get('no');
    this.contactService.findByContractNo(contractNo).subscribe(
      contract => {
        debugger;
        this.contact = contract[0];
      }
    )
  }

}
