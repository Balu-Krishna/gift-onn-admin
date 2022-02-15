import { Injectable } from "@angular/core";
@Injectable()
export class Constants {
  public readonly BASE_URI: string = "http://34.233.43.193:5800/v1/";
  public readonly LOGIN: string = `${this.BASE_URI}admin/auth/login`;
  public readonly GET_ALL_USER_TYPES: string = `${this.BASE_URI}admin/usertype/all`;
  public readonly EDIT_USER: string = `${this.BASE_URI}admin/usertype/`;
  public readonly UPDATE_USER: string = `${this.BASE_URI}admin/usertype/`;
  public readonly ADD_USER: string = `${this.BASE_URI}admin/usertype/`;
  public readonly DELETE_USER: string = `${this.BASE_URI}admin/usertype/`;
  public readonly DOWNLOAD_USER_FILE: string = `${this.BASE_URI}admin/usertype/download/`;

  public readonly GET_ALL_PARTNERS: string = `${this.BASE_URI}admin/partners/all`;
  public readonly ADD_PARTNER: string = `${this.BASE_URI}admin/partners`;
  public readonly UPDATE_PARTNER_RATEING: string = `${this.BASE_URI}admin/partners/partnerrating/`;
  public readonly DOWNLOAD_PARTNERS_FILE: string = `${this.BASE_URI}admin/partners/download/`;
}
