// Entidade de dominio
export default class Referrer {
  constructor(
    readonly name: string,
    readonly email: string,
    readonly birthday: Date,
    readonly crm: string,
  ) {}

  public isYourBitrhdayMonth(date: Date): boolean {
    return date.getMonth() === this.birthday.getMonth();
  }

  public crmIsValid(): boolean {
    return !!this.crm;
  }
}
