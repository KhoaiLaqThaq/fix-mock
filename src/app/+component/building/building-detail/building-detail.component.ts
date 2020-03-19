import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContractService} from "../../../_services/building/contract.service";
import {ContractModel} from "../../../model/building/contract.model";

@Component({
  selector: 'app-building-detail',
  templateUrl: './building-detail.component.html',
  styleUrls: ['./building-detail.component.css']
})
export class BuildingDetailComponent implements OnInit {

  contact: ContractModel;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContractService
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
