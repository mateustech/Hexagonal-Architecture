import Referrer from '../../referrer';

// Contrato do adaptador de saida/persistencia com o mundo externo
export default interface IReferrerOut {
  countByEmail(email: string): number;
  save(referrer: Referrer): Referrer;
}
