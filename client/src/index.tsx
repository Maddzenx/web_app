import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import './callList.module.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StartPage } from './Components/startPage';
import { CallListPage } from './Components/callListPage';
import { ContactView } from './Components/contactView';
import CallListCard from './Components/callListCard';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<StartPage />}> 
      </Route>
      <Route path="/callListPage" element={<CallListPage />}>
          <Route path=":addContact" element={<p>addContactView</p>} />
          <Route path=":expandContact" element={<ContactView />} /> 
        </Route> 
        <Route path="/callListCard" element={<CallListCard />}> 
      </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
