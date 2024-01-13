import { useEffect, useState } from 'react';
import { useParams, useLocation, Navigate } from 'react-router-dom';
import { Container, CountryInfo, GoBackBtn, Loader, Section } from 'components';
import { fetchCountry } from 'service/countryApi';

const Country = () => {
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { id } = useParams();

  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';

  useEffect(() => {
    setIsLoading(true);

    const getCountry = async () => {
      try {
        const country = await fetchCountry(id);
        setCountry(country);
      } catch (error) {
        setError(error.message);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getCountry();
  }, [id]);
  return (
    <Section>
      <Container>
        <GoBackBtn path={goBackLink}>Back to Countries</GoBackBtn>

        {isLoading && <Loader />}

        {error && <Navigate to="/" replace />}
        {country && <CountryInfo {...country} />}
      </Container>
    </Section>
  );
};

export default Country;
