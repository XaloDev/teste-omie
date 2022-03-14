export class Cliente {

  constructor(
    public id?: number,
    public inscricao?: string,
    public nome?: string,
    public apelido?: string,
    public status?: string,
    public foto?: string,
    public emails?: any[]
  ) {
  }
}
