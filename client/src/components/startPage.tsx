import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from 'react-router-dom';
import LogInPage from './logInPage';



export function StartPage() {
    return <div>

        <nav style={{ paddingTop: "60px" }}>

            <LogInPage />
        </nav>
        <Outlet />
    </div>
}