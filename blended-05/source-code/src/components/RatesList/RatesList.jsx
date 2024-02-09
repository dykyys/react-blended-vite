import { Grid, GridItem } from 'components';

export const RatesList = ({ rates }) => {
  return (
    <Grid>
      {Object.entries(rates).map(([key, value]) => (
        <GridItem key={key}>
          1 {key} :{value}
        </GridItem>
      ))}
    </Grid>
  );
};
