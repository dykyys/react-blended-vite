import { useDispatch } from 'react-redux';
import { RiExchangeDollarFill } from 'react-icons/ri';
import { fetchExchangeCurrency } from 'reduxCurrency/operations';
import styles from './ExchangeForm.module.css';

export const ExchangeForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const { value } = event.target.elements.currency;
    const [amount, from, , to] = value.split(' ');
    dispatch(fetchExchangeCurrency({ amount, from, to }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input
        type="text"
        pattern="^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$"
        placeholder="15 USD in UAH"
        title="Request format 15 USD in UAH"
        className={styles.input}
        name="currency"
        required
      />
    </form>
  );
};

{
  /* <select
  aria-label="select"
  className={styles.select}
  name="region"
  onChange={onHandleChange}
  required
  defaultValue="default"
>
  <option disabled value="default">
    Select a region
  </option>

  {regions.map(({ id, name, value }) => (
    <option key={id} value={value}>
      {name}
    </option>
  ))}
</select>; */
}
