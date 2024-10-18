import { Outlet, NavLink } from "react-router-dom";
import "../components/PagesLayout.css"

export default function PagesLayout() {
    return (
        <>
            <header>
                <NavLink to={`/`}>Country list</NavLink>
                <NavLink to={`/`}>List</NavLink>
            </header>
            <Outlet/>
        </>
    );
}