import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Dashboard/Home';
import BaseAppContainer from '../BaseAppContainer/BaseAppContainer';
import Documentation from '../Documentation/Documentation';
import FAQ from '../FAQ/FAQ';
import Marketing from '../Marketing/marketing';

const routes = [
  { path: '/dashboard', element: <Home /> },
  { path: '/documentation', element: <Documentation /> },
  { path: '/marketing', element: <Marketing /> },
  { path: '/faq', element: <FAQ /> },
  { path: '/*', element: <Home /> },
];

const Layout = () => {
  return (
    <>
      <BaseAppContainer>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BaseAppContainer>
    </>
  );
};

export default Layout;