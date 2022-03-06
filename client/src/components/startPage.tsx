import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from 'react-router-dom';
import { SideBar } from "./sideBar"
import LogInPage from './logInPage';
import CreateAccountComponent from './createNewAccount';

const sideBar = <SideBar />

export function StartPage(){
    return <div>
            <Link to="/callListPage">Go to a fake Call List
            </Link>
            <Link to="/callListCard">Go to Dashboard
            </Link>
            <SideBar />
            <LogInPage/>
            <Outlet/>
        </div>
}