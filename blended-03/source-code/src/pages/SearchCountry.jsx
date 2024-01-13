import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Container,
  CountryList,
  Heading,
  Loader,
  SearchForm,
  Section,
} from 'components';
import { fetchByRegion } from 'service';

const SearchCountry = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const region = searchParams.get('query');

    if (!region) return;

    setIsLoading(true);

    const getRegion = async () => {
      try {
        const data = await fetchByRegion(region);

        setCountries(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getRegion();
  }, [searchParams]);

  const onHandleSubmit = query => {
    setSearchParams({ query: query });
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onHandleSubmit} />
        <CountryList countries={countries} />
        {isLoading && <Loader />}
        {error && <Heading title="Something went wrong ..." bottom />}
      </Container>
    </Section>
  );
};

export default SearchCountry;
