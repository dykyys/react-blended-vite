import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.apilayer.com/exchangerates_data/',
  timeout: 1000,
  headers: { apikey: 'RN6soYAA8bBKGcFvB5VM4RoQlvO5pAtN' },
  // headers: { apikey: 'Bqf0jgud3HsN3E435u3LbG7qgqDyjvOj' },
});

export const exchangeCurrency = async credentials => {
  const {
    data: { query, info, result },
  } = await instance.get(`/convert`, {
    params: credentials,
  });
  return { ...query, rate: info.rate, result };
};

export const latestSymbols = async baseCurrency => {
  const { data } = await instance.get(
    `/latest?symbols=usd,jpy,gbt,pln,eur&base=${baseCurrency}`,
  );
  return data.rates;
};

// fetch('https://api.apilayer.com/exchangerates_data/symbols', requestOptions);
// 'https://api.apilayer.com/exchangerates_data/convert?to=USD&from=UAH&amount=15';
// fetch(
//   'https://api.apilayer.com/exchangerates_data/latest?symbols=usd,jpy&base=uah',
//   requestOptions,
// );
