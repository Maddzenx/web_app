import { Link, Outlet } from "react-router-dom";
import { SideBar } from "./sideBar"


const sideBar = <SideBar />


export function CallListPage() {
    return <div>
            <Link to="/callListPage/addContact"></Link>
            <SideBar />
        <Outlet />
    </div>
}

