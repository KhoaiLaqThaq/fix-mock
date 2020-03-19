/** 建物設備インターフェース - Thông tin thiết bị xây dựng */
export interface BuildEquipmentResponse {
  /** 設備リスト - Danh sách thiết bị */
  equipmentList: BuildEquipmentItemResponse[];
}

/** 建物設備項目インターフェース - Thông tin interface thiết bị */
export interface BuildEquipmentItemResponse {
  /** 設備名称 */
  name: string;
  /** 設置有無 */
  enable: boolean;
  /** 状態 */
  status: string;
  /** 備考 */
  comment: string;
}
