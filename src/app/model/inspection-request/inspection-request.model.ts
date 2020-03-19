import {
  InspectionItemResponse,
  InspectionRequestItemResponse
} from "../../common/interface/inspection/inspection-request.interface";
import {BaseModel} from "../base.model";
import {
  ModelBaseInterface,
  ValidationErrorModel} from "../../common/interface/model-base.interface";
import {Fields} from "../../common/types/field.type";

export class InspectionRequestItemModel
  extends BaseModel
  implements InspectionRequestItemResponse, ModelBaseInterface {

  requestId: number;
  contractNo: string;
  buildingNo: string;
  buildingAddress: string;
  buildingName: string;
  burden: string;
  cCount: number;
  chargeBranch: string;
  ciCount: number;
  comment: string;
  contractDate: string;
  contractType: string;
  delibaryDate: string;
  fireregistInspection: string;
  iCount: number;
  insCompany: string;
  manageType: string;
  managementCompany: string;
  monopolyFlg: boolean;
  msFlg: boolean;
  nonstandardContract: boolean;
  oInspectionHouses: number;
  ownerGreeting: boolean;
  ownerName: string;
  price: number;
  rInspectionHouses: number;
  reqDate: string;
  status: string;
  insItemList: InspectionItemResponse[];

  deepCopy(): Object {
    return undefined;
  }

  fromResponse(res: InspectionRequestItemResponse): void {
    Object.assign(this, res);
    this.insItemList = [];
    res.insItemList.forEach(x => {
      const item = new InspectionItemModel(null);
    })
  }

  validator(index: number): ValidationErrorModel[] {
    return [];
  }

}

class InspectionItemModel
  extends BaseModel
  implements InspectionItemResponse, ModelBaseInterface {
  company: string;
  itemSeq: number;
  name: string;
  period: string;
  price: number;
  times: string;
  unit: string;

  constructor(prop: Fields<InspectionItemModel>) {
    super();
    if (prop == null) {
      return;
    }
    Object.assign(this, prop);
  }


  deepCopy(): Object {
    return undefined;
  }

  fromResponse(res: Object): void {
  }

  validator(index: number): ValidationErrorModel[] {
    return [];
  }

}


