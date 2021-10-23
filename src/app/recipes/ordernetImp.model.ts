export class OrdernetImp {
  id: string;
  public name: String;
  public companyName: String;
  public field: String;
  public address: String;
  public service: String;
  public phone: number;
  public email: string;
  public installServer: string;
  public speedLimit: string;
  public firewall: string;
  public extend: string;
  public encrypt: string;
  public connectGroup: string;
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
    installServer: string,
    speedLimit: string,
    firewall: string,
    extend: string,
    encrypt: string,
    connectGroup: string,
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
    this.installServer = installServer;
    this.speedLimit = speedLimit;
    this.firewall = firewall;
    this.extend = extend;
    this.encrypt = encrypt;
    this.connectGroup = connectGroup;
    this.message = message;
    this.timestamp = timestamp;
  }
}
