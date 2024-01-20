import {IAreAllNumericStrings} from '../../utils';
import {ICalculateAmount, IFormatAmount} from './invest.models';

export const areAllNumericStrings: IAreAllNumericStrings = (...ar) =>
  ar.every(v => !isNaN(parseFloat(v)));

export const calculateAmount: ICalculateAmount = (
  deposit,
  percentage,
  duration,
) => {
  let amount = 0;

  for (let i = 1; i <= duration; i++) {
    amount = ((amount + deposit) / 100) * (100 + percentage);
  }

  return amount;
};

export const formatAmount: IFormatAmount = amount =>
  amount.toLocaleString('it-IT', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
