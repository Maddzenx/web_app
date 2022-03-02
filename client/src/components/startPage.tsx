import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from 'react-router-dom';
import { SideBar } from "./sideBar"

const sideBar = <SideBar />

export function StartPage(){
    return <div>
            <Link to="/callListPage">Go to a fake Call List
            </Link>
            <Link to="/dashboardPage">Go to Dashboard
            </Link>
            <SideBar />
            <Outlet/>
        </div>
}