export class OrderEcommerce {
  id: string;
  public name: String;
  public companyName: String;
  public field: String;
  public address: String;
  public service: String;
  public phone: number;
  public email: string;
  public dserv: string;
  public delivery: string;
  public webmob: string;
  public ecom: string;
  public banners: string;
  public dashbordsss: string;
  public managment: string;
  public employer: string;
  public commpackage: string;
  public stores: string;
  public timestamp: any;

  constructor(
    id: string,
    name: String,
    companyName: String,
    field: String,
    address: String,
    service: String,
    phone: number,
    email: string,
    dserv: string,
    delivery: string,
    ecom: string,
    webmob: string,
    banners: string,
    dashbordsss: string,
    managment: string,
    employer: string,
    commpackage: string,
    stores: string,
    timestamp: any
  ) {
    this.id = id;
    this.name = name;
    this.companyName = companyName;
    this.field = field;
    this.address = address;
    this.service = service;
    this.phone = phone;
    this.dserv = dserv;
    this.email = email;
    this.delivery = delivery;
    this.stores = stores;
    this.commpackage = commpackage;
    this.employer = employer;
    this.ecom = ecom;
    this.webmob = webmob;
    this.banners = banners;
    this.dashbordsss = dashbordsss;
    this.managment = managment;
    this.timestamp = timestamp;
  }
}
