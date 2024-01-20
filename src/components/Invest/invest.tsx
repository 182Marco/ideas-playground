import {IEv} from '../../utils';
import {useIvest} from './invest.hook';
import {texts} from './invest.texts';
import './style.scss';

export const Invest: React.FC = () => {
  const u = useIvest();

  return (
    <div className='Invest'>
      <h1>{texts.title}</h1>
      <form>
        <div>
          <label htmlFor='investmentYield'>{texts.inputYield}</label>
          <input
            id='investmentYield'
            onChange={(e: IEv) => u.setYield(e)}
            placeholder={texts.inputYield}
            type='number'
            value={u.investmentYield}
          />
        </div>
        <div>
          <label htmlFor='duration'>{texts.inputYears}</label>
          <input
            id='duration'
            onChange={(e: IEv) => u.setDuration(e)}
            placeholder={texts.inputYears}
            type='number'
          />
        </div>
        <div>
          <label htmlFor='deposit'>{texts.inputDepoist}</label>
          <input
            id='deposit'
            onChange={(e: IEv) => u.setDeposit(e)}
            placeholder={texts.inputDepoist}
            type='number'
          />
        </div>
      </form>
      {u.PACamount && (
        <h2>
          {texts.amountLabel} {u.PACamount}
        </h2>
      )}
    </div>
  );
};
