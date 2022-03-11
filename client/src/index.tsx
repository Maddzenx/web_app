import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import './callList.module.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { ContactView } from './Components/contactView';
import { StartPage } from './Components/startPage';
import CallListCards from './Components/callListCards';
import { Dashboard } from './Components/dashboard';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<StartPage />}> 
      </Route>
      <Route path="/callListPage" element={<App />}>
          <Route path=":addContact" element={<p>addContactView</p>} />
          <Route path=":expandContact" element={<ContactView />} />
        </Route>
        <Route path="/callListCard" element={<Dashboard callLists={[]} />}>
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
