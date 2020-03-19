export class BaseModel {
  requireChk(target: string): boolean {
    if (target == void 0 || target.length < 1) {
      return false;
    }
    return true;
  }
}
