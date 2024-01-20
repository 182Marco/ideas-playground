import {IgetSanitized} from './models';

export const SanitizeInputNum: IgetSanitized = e =>
  e.target.value.replace(/^0+/, '').replace(/[e]/g, '').replace(/[E]/g, '');
