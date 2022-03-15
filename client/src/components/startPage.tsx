import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from 'react-router-dom';
import { SideBar } from "./sideBar"
import LogInPage from './logInPage';



export function StartPage(){
    return <div>
        
        <nav style={{paddingTop: "60px"}}>
        <Link to="/callListPage">Go to a fake Call List </Link>
            <Link to="/callListCard">Go to Dashboard</Link>
            <LogInPage/>
        </nav>
            <Outlet/>
        </div>
}