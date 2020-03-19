/** 法定点検依頼API応答インターフェース */
export interface InspectionRequestsResponse {
  /** 法定点検依頼項目リスト */
  requestItemList: InspectionRequestItemResponse[];
}

/** 法定点検依頼項目インターフェース - interface kiểm tra theo luật */
export interface InspectionRequestItemResponse {
  /** 依頼ID */
  requestId: number;
  /** 契約番号（C番） */
  contractNo: string;
  /** 建物番号 */
  buildingNo: string;
  /** 建物名 */
  buildingName: string;
  /** 建物住所 */
  buildingAddress: string;
  /** 担当支店 */
  chargeBranch: string;
  /** 管理形態 */
  manageType: string;
  /** オーナー名 */
  ownerName: string;
  /** 共益費総取有無 */
  monopolyFlg: boolean;
  /** 賃貸分巡回戸数 */
  rInspectionHouses: number;
  /** オーナー使用分巡回戸数 */
  oInspectionHouses: number;
  /** 標準清掃・点検回数 */
  ciCount: number;
  /** 点検のみ回数 */
  iCount: number;
  /** 簡易清掃回数 */
  cCount: number;
  /** 消防点検 */
  fireregistInspection: string;
  /** MS */
  msFlg: boolean;
  /** 引渡予定日 */
  delibaryDate: string;
  /** 契約日 */
  contractDate: string;
  /** 標準外契約 */
  nonstandardContract: boolean;
  /** 備考 */
  comment: string;
  /** 管理会社指定 */
  managementCompany: string;
  /** オーナー挨拶要否 */
  ownerGreeting: boolean;
  /** 契約区分 */
  contractType: string;
  /** 点検依頼日時 */
  reqDate: string;
  /** 点検業者 */
  insCompany: string;
  /** 発注金額 */
  price: number;
  /** 費用負担 */
  burden: string;
  /** ステータス */
  status: string;
  /** 点検項目リスト */
  insItemList: InspectionItemResponse[];
}

/** 点検項目インターフェース */
export interface InspectionItemResponse {
  /** 点検項目連番 */
  itemSeq: number;
  /** 項目名 */
  name: string;
  /** 周期 */
  period: string;
  /** 単位（マスタ項目化） */
  unit: string;
  /** 回数 */
  times: string;
  /** 実施業者 */
  company: string;
  /** 発注金額 */
  price: number;
}
