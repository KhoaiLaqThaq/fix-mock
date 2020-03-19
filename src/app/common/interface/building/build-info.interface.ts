/** Thông tin tòa nhà */
export interface BuildInfoResponse {
  /** 建物番号 */
  buildNo: string;
  /** 引渡年月 - ngày bàn giao */
  deliveryYm: string;
  /** 管理会社 - Công ty quản lý */
  manageCompany: string;
  /** メンテナンスサポート有無 - Hỗ trợ bảo trì */
  msFlg: boolean;
  /** 物件名称 */
  name: string;
  /** 物件名称カナ */
  kanaName: string;
  /** 郵便番号 */
  zip: string;
  /** 住所 */
  address: string;
  /** 管理形態 - Hình thức quản lý */
  manageType: string;
  /** 担当HS */
  chargeHs: string;
  /** 戸数 - Số phòng */
  roomCnt: string;
  /** 担当支店 */
  chargeBranch: string;
  /** 営業担当 - Đại diện bán hàng */
  salesStaff: string;
  /** 建物種別 - Loại công trình */
  buildType: string;
  /** CS課 */
  csBranch: string;
  /** CS担当 */
  csStaff: string;
  /** 延床面積 - Tổng diện tích sàn */
  allSpace: string;
  /** 備考 */
  comment: string;
}
