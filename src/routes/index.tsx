import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from '../components/Cart';
import Header from '../components/Header/Header';
import Demo from '../components/others/Demo';
import ProductLayout from '../components/others/ProductLayout';
import Page404 from '../error/Page404';
import ScrollToTop from './ScrollToTop';
import { Page } from './types';

export const pages: Page[] = [
  { path: '/', element: <ProductLayout /> },
  { path: '/cart', element: <Cart /> },
];

const MyRouter: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        {pages.map(({ element, path }) => {
          return <Route key={path} element={element} path={path} />;
        })}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};

export default MyRouter;
