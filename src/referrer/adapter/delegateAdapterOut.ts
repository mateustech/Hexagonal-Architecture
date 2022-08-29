import ReferrerAdapterOutOncoclinicas from './oncoclinicas/referrerRepository';
import ReferrerAdapterOutUnimed from './unimed/referrerRepository';

// Função orquestradora de implementação
export class DelegateReferrerAdapterOut {
  constructor(private typeAdpater: 'onco' | 'unimed') {}

  getServiceImplementation() {
    return this.typeAdpater === 'onco'
      ? ReferrerAdapterOutOncoclinicas
      : ReferrerAdapterOutUnimed;
  }
}
