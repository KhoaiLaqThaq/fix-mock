import { Component, OnDestroy, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from "@angular/animations";
import { ContactModel } from "../../../model/contact.model";
import { forkJoin, Subscription } from "rxjs";
import { ContactService } from "../../../_services/contact.service";
import { BuildingService } from "../../../_services/building.service";
import { ManagerInfoService } from "../../../_services/manager-info.service";
import { ApartmentService } from "../../../_services/apartment.service";
import { CycleCheckingService } from "../../../_services/cycle-checking.service";
import { SwitchModel } from "../../../model/switch/switch.model";

@Component({
  selector: 'app-building-data-table',
  templateUrl: './building-data-table.component.html',
  styleUrls: ['./building-data-table.component.css'],
  animations: [
    trigger('OpenClose', [
      state('open', style({ opacity: 1 })),
      state('closed', style({ display: 'none', opacity: 0.4 })),
      transition('open => closed', [ animate('0.2s') ]),
      transition('closed => open', [ animate('0.3s')
      ]),
    ])
  ]
})
export class BuildingDataTableComponent implements OnInit, OnDestroy {

  contracts: ContactModel[] = [];
  subscription: Subscription;
  switchForm: any;
  loading: boolean = false;
  switch = new SwitchModel();

  constructor(
    private contactService: ContactService,
    private buildingService: BuildingService,
    private managerInfoService: ManagerInfoService,
    private apartmentService: ApartmentService,
    private cycleCheckingService: CycleCheckingService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.getAllContacts();
  }

  switchFormEvent( value ): void {
    this.switchForm = value;

    this.switch.constractSw = this.switchForm.constract ? 'open' : 'closed';
    this.switch.buildingSw = this.switchForm.building ? 'open' : 'closed';
    this.switch.managerSw = this.switchForm.manager ? 'open' : 'closed';
    this.switch.apartmentSw = this.switchForm.apartment ? 'open' : 'closed';
    this.switch.cycleCheckingSw = this.switchForm.cycle ? 'open' : 'closed';
    this.switch.otherSw = this.switchForm.other ? 'open' : 'closed';
  }

  getAllContacts(): void {
    this.subscription = this.contactService.findAll()
      .subscribe(
        resContacts => {
          this.contracts = resContacts;
          if ( resContacts != null || resContacts != undefined) {
            this.loopDataModel();
          }
        }
      )
  }

  loopDataModel(): void {
    for (let contract of this.contracts) {
      this.subscription = this.buildingService.findByContactNo(contract.no)
        .subscribe(
          resBuilding => {
            if (resBuilding != null || resBuilding !== undefined) {
              contract.building = resBuilding;
              forkJoin(
                this.managerInfoService.findByBuildingNo(contract.building[0].no),
                this.apartmentService.findByBuildingNo(contract.building[0].no),
                this.cycleCheckingService.findByBuildingNo(contract.building[0].no)
              ).subscribe(([resManagerInfo, resApartment, resCycleChecking]) => {
                contract.managerInfo = resManagerInfo;
                contract.apartment = resApartment;
                contract.cycleChecking = resCycleChecking;
                contract.cycleChecking[0].total = 0;
                contract.cycleChecking.forEach(cycleChecking => {
                  contract.cycleChecking[0].total += cycleChecking.times * cycleChecking.money;
                })
                contract.countCycle = resCycleChecking.length;
                contract.cycleChild = resCycleChecking;
                contract.cycleChild = contract.cycleChild.slice(2);
                this.loading = false;
              });
            }
          }
        )
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
