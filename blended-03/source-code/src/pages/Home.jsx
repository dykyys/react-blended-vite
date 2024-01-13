import { useEffect, useState } from 'react';
import { Container, CountryList, Heading, Loader, Section } from 'components';
import { getCountries } from 'service';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const data = await getCountries();

        setCountries(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
        {isLoading && <Loader />}
        {error && <Heading title="Something went wrong ..." bottom />}
      </Container>
    </Section>
  );
};

export default Home;
