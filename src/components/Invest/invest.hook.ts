import {useEffect, useState} from 'react';
import {SanitizeInputNum} from '../../utils';
import {IsetNum} from './invest.models';
import * as utilis from './invest.utils';

export const useIvest = () => {
  const [investmentYield, setInvestmentYield] = useState('');
  const [duration, setYearsDuration] = useState('');
  const [deposit, setDepositAmount] = useState('');
  const [PACamount, setPACamount] = useState('');

  const setYield: IsetNum = e => setInvestmentYield(SanitizeInputNum(e));
  const setDeposit: IsetNum = e => setDepositAmount(SanitizeInputNum(e));
  const setDuration: IsetNum = e => setYearsDuration(SanitizeInputNum(e));

  useEffect(() => {
    if (utilis.areAllNumericStrings(investmentYield, duration, deposit)) {
      const parsedDeposit = parseFloat(deposit);
      const parsedYield = parseFloat(investmentYield);
      const parsedDuration = parseFloat(duration);

      const amount = utilis.calculateAmount(
        parsedDeposit,
        parsedYield,
        parsedDuration,
      );
      const formattedAmount = utilis.formatAmount(amount);

      setPACamount(formattedAmount);
    }
  }, [investmentYield, duration, deposit]);

  return {
    duration,
    deposit,
    investmentYield,
    PACamount,
    setInvestmentYield,
    setDeposit,
    setDuration,
    setYield,
  };
};
