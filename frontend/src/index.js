import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';

import PagesLayout from './components/PagesLayout';

import CountryList from './pages/CountryList';
import CountryPage from './pages/CountryPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={`/`} element={<PagesLayout/>}>
          <Route index path={`/`} element={<CountryList />} />
          <Route path={`/Country/:country/:code`} element={<CountryPage />}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

