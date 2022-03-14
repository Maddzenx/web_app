import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import InsideCallList from './Components/InsideCallList';
import Register from './Components/register';


//Kan va viktigt med context provider för att saker skall funka
ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />}>
        </Route>
        <Route path="/dashboard" element={<App />}>
        </Route>
        <Route path="/callList/:callListId" element={<InsideCallList />}>
        </Route>
        <Route path="/user" element={<Register />}>
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
// <InsideCallList/>