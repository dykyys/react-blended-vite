import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from 'components';

const Home = lazy(() => import('pages/Home'));
const SearchCountry = lazy(() => import('pages/SearchCountry'));
const Country = lazy(() => import('pages/Country'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/country" element={<SearchCountry />} />
        <Route path="/country/:id" element={<Country />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
