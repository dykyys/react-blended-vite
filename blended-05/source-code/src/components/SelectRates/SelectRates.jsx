import { useDispatch } from 'react-redux';
import Select from 'react-select';

import { setBaseCurrensy } from 'reduxState/currency/currencySlice';

import symbols from './symbols.json';

import styles from './SelectRates.module.css';

import './ReactSelect.css';

export const SelectRates = ({ baseCurrency }) => {
  const dispatch = useDispatch();

  const handleChange = selectedOption => {
    dispatch(setBaseCurrensy(selectedOption.value));
  };

  return (
    <div className={styles.box}>
      <p className={styles.text}>Your base currency:&nbsp;</p>
      <Select
        className={styles.select}
        classNamePrefix="react-select"
        value={{
          label: baseCurrency,
          value: baseCurrency,
        }}
        onChange={handleChange}
        options={symbols}
        isSearchable
      />
    </div>
  );
};
