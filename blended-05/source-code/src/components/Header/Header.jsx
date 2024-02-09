import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MdCurrencyExchange } from 'react-icons/md';

import styles from './Header.module.css';
import { selectBaseCurrency } from 'reduxCurrency/selectors';

export const Header = () => {
  const baseCurrency = useSelector(selectBaseCurrency);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <MdCurrencyExchange className={styles.logo} />
          <nav>
            <ul className={styles.nav}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/rates"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Rates
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        {baseCurrency && (
          <p className={styles.text}>
            Your base currency:{' '}
            <span className={styles.currency}>{baseCurrency}</span>
          </p>
        )}
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
