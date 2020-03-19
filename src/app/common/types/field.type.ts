/** モデル<T>に実装されているpublicプロパティのみ抽出する型定義 */
export type Fields<T> = { [P in FieldNames<T>]: T[P] };
type FieldNames<T> = {
  [P in keyof T]: T[P] extends (...args: any[]) => any ? never : P
}[keyof T];
