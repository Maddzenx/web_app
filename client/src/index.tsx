import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { CallListView } from './components/callListView';
import { CallListPage } from './CallListPage';
import { SideBar } from './components/sideBar';

/*const rootElement = <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SideBar/>}>
        <Route path="callListPage" element={<App />}>
          <Route path="addContact" element={<p>Add new contact</p>} />
          <Route path=":CallListId" element={<CallListView />} />
        </Route>
      </Route>      
    </Routes>
  </BrowserRouter>
</React.StrictMode>*/

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SideBar/>}>
        <Route path="callListPage" element={<App />}>
          <Route path="addContact" element={<p>Add new contact</p>} />
          <Route path=":CallListId" element={<CallListView />} />
          </Route>
        </Route>      
      </Routes>
    </BrowserRouter>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
