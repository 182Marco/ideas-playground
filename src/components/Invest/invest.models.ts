import {IEv} from '../../utils';

export type IsetNum = (e: IEv) => void;

export type ICalculateAmount = (
  deposit: number,
  percentage: number,
  duration: number,
) => number;

export type IFormatAmount = (amount: number) => string;

export interface InvestmentTexts {
  title: string;
  inputYield: string;
  inputYears: string;
  inputDepoist: string;
  amountLabel: string;
}
