/** Thông tin interface chủ sở hữu trả lời */
export interface OwnerContractResponse {
  /** mã hợp đồng */
  contractNo: string;
  /** mã chủ sở hũu */
  owNo: string;
  /** tên chủ sh */
  name: string;
  /** tên chủ sh viết theo bảng katagana */
  kanaName: string;
  /** mã vùng */
  zip: string;
  /** địa chỉ */
  address: string;
  /** số cố định */
  telNo: string;
  /** số di động */
  mobileNo: string;
  /** メールアドレス */
  mail: string;
  /** 備考１ */
  comment1: string;
  /** 備考２ */
  comment2: string;
  /** Hồ sơ bệnh án (ghi chú, v.v.) */
  chart: string;
  /** 連絡先リスト */
  contactList: ContactInfoResponse[];
}

/** Thông tin interface liên hệ chủ sở hữu */
export interface ContactInfoResponse {
  /** tiêu đề liên hệ */
  title: string;
  /** tên người liên hệ */
  name: string;
  /** mã vùng */
  zip: string;
  /** 住所 */
  address: string;
  /** 固定電話番号 */
  telNo: string;
  /** 携帯番号 */
  mobileNo: string;
  /** メールアドレス */
  mail: string;
  /** 備考 */
  comment: string;
  /** Hồ sơ bệnh án (ghi chú, v.v.) */
  chart: string;
}
