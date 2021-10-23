export class Contact {
  public id: string;
  public name: String;
  public email: string;
  public message: string;
  public timestamp: any;

  constructor(
    id: string,
    name: string,
    email: string,
    message: string,
    timestamp: any
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.message = message;
    this.timestamp = timestamp;
  }
}
