export class OrderGraphic {
  id: string;
  public name: String;
  public companyName: String;
  public field: String;
  public address: String;
  public service: String;
  public phone: number;
  public email: string;
  public message: string;
  public motion: string;
  public dserv: string;
  public motionTime: string;
  public lang: string;
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
    motion: string,
    motionTime: string,
    dserv: string,
    lang: string,
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
    this.motion = motion;
    this.dserv = dserv;
    this.motionTime = motionTime;
    this.lang = lang;
    this.message = message;
    this.timestamp = timestamp;
  }
}
