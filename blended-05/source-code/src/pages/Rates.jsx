import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLatestSymbols } from 'reduxCurrency/operations';
import { Container, Heading, Loader, RatesList, Section } from 'components';
import {
  selectIsError,
  selectIsLoading,
  selectRates,
} from 'reduxCurrency/selectors';

const Rates = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const rates = useSelector(selectRates);

  useEffect(() => {
    dispatch(fetchLatestSymbols());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        {rates && <RatesList rates={rates} />}
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
