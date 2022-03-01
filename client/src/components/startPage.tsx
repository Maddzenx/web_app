import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from 'react-router-dom';

export function StartPage(){
    return <div>
            <Link to="/callListPage">call lists
            </Link>
            <Outlet/>
        </div>
    
}