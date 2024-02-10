import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Wave } from 'react-animated-text';

import {
  Container,
  Filter,
  Heading,
  Loader,
  RatesList,
  Section,
} from 'components';
import {
  selectBaseCurrency,
  selectFilteredRates,
  selectIsError,
  selectIsLoading,
  selectRates,
} from 'reduxState/selectors';
import { fetchLatestSymbols } from 'reduxState/currency/operations';

const Rates = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const rates = useSelector(selectRates);
  const fileredRates = useSelector(selectFilteredRates);
  const baseCurrency = useSelector(selectBaseCurrency);

  useEffect(() => {
    dispatch(fetchLatestSymbols(baseCurrency));
  }, [dispatch, baseCurrency]);

  return (
    <Section>
      <Container>
        <Heading
          info
          bottom
          title={
            <Wave
              text={`$ $ $ Current exchange rate for 1 ${baseCurrency} $ $ $`}
              effect="fadeOut"
              effectChange={3.0}
            />
          }
        />

        {rates && <Filter />}

        {fileredRates?.length > 0 && (
          <RatesList rates={fileredRates} baseCurrency={baseCurrency} />
        )}
        {isLoading && <Loader />}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 We cannot show current rates!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Rates;
