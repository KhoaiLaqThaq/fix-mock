/** 巡回・点検取得応答インターフェース - Thông tin chu kì kiểm tra */
export interface PatrolInspectionResponse {
  /** 巡回・点検項目リスト */
  inspectionItemList: PatrolInspectionItemResponse[];
}

/** 巡回・点検項目インターフェース */
export interface PatrolInspectionItemResponse {
  /** 項目名 */
  name: string;
  /** 有無 */
  enable: boolean;
  /** 周期 */
  period: string;
  /** 単位（マスタ項目化） */
  unit: string;
  /** 回数 */
  times: string;
  /** 発注 */
  order: boolean;
  /** 初回点検実施日 */
  startDate: string;
  /** 管理会社 */
  manageCompany: string;
  /** 月額 */
  mPrice: string;
}
