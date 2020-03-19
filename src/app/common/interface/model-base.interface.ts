declare global {
  interface String {
    /** 文字列内の{n}をn番目の引数で置換する。引数が足りない場合そのまま。 */
    format(...args: string[]): string;
  }
}

String.prototype.format = function (...args: string[]): string {
  return this.replace(/{(\d+)}/g, function (match: string, index: number) {
    return args[index] != void 0 ? args[index] : match;
  });
};

export enum ValidationErrorEnum {
  /** 必須チェック - Kiểm tra bắt buộc */
  Required = 'を入力してください',
  /** 数値チェック - Kiểm tra phải là số */
  Numbric = 'は数値で入力してください',
  /** 桁数チェック（以内）- Kiểm tra chữ số trong khoảng */
  MaxLength = 'は{0}文字以内で入力してください',
  /** 桁数チェック（以上）- Kiểm tra chữ số trong khoảng */
  MinLength = 'は{0}文字以上で入力してください',
  /** 桁数チェック（範囲内）- Kiểm tra chữ số trong phạm vi */
  JustLength = 'は{0}文字以上{1}文字以内で入力してください',
}

export interface ModelBaseInterface {
  /**
   * đặt giá trị API interface
   * @param res interface API response đc kế thừa
   */
  fromResponse(res: Object): void;

  /**
   * Sao chép (sao chép theo giá trị)
   * @returnType bản thân thừa kế
   */
  deepCopy(): Object;

  /**
   * 項目の入力チェックを実施する。チェック処理自体はBaseModelクラスに実装する。
   * 存在したエラーは全てリストにして返却する。
   * @param index 呼び出し元でindexをしている場合。実装時は省略可としてよい
   * 例：validator(index: number = 0):～
   * @returnType 入力チェックエラー結果リスト
   *
   * Kiểm tra đầu vào của các input. Kiểm tra quá trình chính nó được thực hiện trong lớp BaseModel
   * Trả về tất cả các lỗi hiện có trong một danh sách
   * @param index khi lập chỉ mục trong quá trình gọi.
   * Ví dụ: validator(index: number = 0):~
   * @returnType danh sách kết quả kiểm tra lỗi đầu vào
   */
  validator(index: number): ValidationErrorModel[];
}

export interface ValidationErrorInterface {
  /** エラー項目名 - Phần tử lỗi */
  item: string;
  /** リスト項目の順番 - Thứ tự các danh mục */
  index?: number;
  /** 最大長 */
  maxLen?: number;
  /** 最小長 */
  minLen?: number;
  /** エラー種別 - Loại lỗi */
  type: ValidationErrorEnum;
}

export class ValidationErrorModel implements ValidationErrorInterface {
  index: number;
  item: string;
  maxLen: number;
  minLen: number;
  type: ValidationErrorEnum;

  constructor(param: ValidationErrorInterface) {
    Object.assign(this, param);
  }

  /** エラーメッセージ取得 - Nhận thông báo lỗi */
  getErrorString(): string {
    const idx = (this.index != 0) ? this.index + '行目 ' : '';
    let msg = this.type.toString();

    if (this.type === ValidationErrorEnum.MinLength) {
      msg = this.type.toString().format(this.minLen.toString());
    }

    if (this.type === ValidationErrorEnum.MaxLength) {
      msg = this.type.toString().format(this.maxLen.toString());
    }

    if (this.type === ValidationErrorEnum.JustLength) {
      msg = this.type.toString().format(this.minLen.toString(), this.maxLen.toString());
    }

    return idx + this.item + msg;
  }
}



