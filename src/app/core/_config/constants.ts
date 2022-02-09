import { Injectable } from "@angular/core";
@Injectable()
export class Constants {
  public readonly BASE_URI: string = "http://34.233.43.193:5800/v1/";
  public readonly LOGIN: string = `${this.BASE_URI}admin/auth/login`;
  public readonly GET_ALL_USER_TYPES: string = `${this.BASE_URI}admin/usertype/all`;
}