// Entidade da ORM
export default class ReferrerModel {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly email: {
      value: string;
    },
    readonly birthday: Date,
    readonly crm: string,
  ) {}
}
