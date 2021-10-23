export class Order {
  id: string;
  public name: String;
  public companyName: String;
  public field: String;
  public address: String;
  public service: String;
  public otherService: String;
  public message: string;
  public phone: number;
  public email: string;
  public timestamp: any;

  constructor(
    id: string,
    name: String,
    companyName: String,
    field: String,
    address: String,
    service: String,
    otherService: String,
    message: string,
    phone: number,
    email: string,
    timestamp: any
  ) {
    this.id = id;
    this.name = name;
    this.companyName = companyName;
    this.field = field;
    this.address = address;
    this.service = service;
    this.otherService = otherService;
    this.message = message;
    this.phone = phone;
    this.email = email;
    this.timestamp = timestamp;
  }
}
