import { Link, Outlet } from "react-router-dom";

export function CallListPage() {
    return <div>
        <nav>
            <Link to="/callListPage" style={{padding: "0.1em"}}>CallList Page</Link>
            <Link to="/callListPage/addContact" style={{padding: "0.1.m"}}>Call list add contact</Link>
        </nav>
        <Outlet />
    </div>
}
