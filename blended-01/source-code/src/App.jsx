import {
  Section,
  Container,
  BlogCard,
  Heading,
  Statistics,
  CryptoHistory,
  ForbesList,
} from 'components';

import article from 'data/article';
import stats from 'data/stats';
import forbes from 'data/forbes';
import transactions from 'data/transactions';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Blog Card" bottom />
        <BlogCard {...article} />

        <Heading title="Task 2 Statistics" top bottom />
        <Statistics title="Main Statistics" stats={stats} />

        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList list={forbes} />

        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory items={transactions} />
      </Container>
    </Section>
  );
};
