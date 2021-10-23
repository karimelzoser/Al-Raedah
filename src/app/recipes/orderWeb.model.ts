export class OrderWeb {
  id: string;
  public name: String;
  public companyName: String;
  public field: String;
  public address: String;
  public service: String;
  public phone: number;
  public email: string;
  public screens: number;
  public message: string;
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
    screens: number,
    message: string,
    timestamp: any
  ) {
    this.id = id;
    this.name = name;
    this.companyName = companyName;
    this.field = field;
    this.address = address;
    this.service = service;
    this.phone = phone;
    this.email = email;
    this.screens = screens;
    this.message = message;
    this.timestamp = timestamp;
  }
}
