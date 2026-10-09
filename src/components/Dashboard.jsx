import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import Profile from "./profile";
import Settings from "./Settings";

function Dashboard() {

    return (
        <div>
            <h1>Dashboard</h1>

            <nav>
                <Link to="profile">Profile</Link> {" "} // P
                <Link to="settings">Settings</Link>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Dashboard;

// when we want a parent route and inside it I want child routes
// so wd don't start out Link from "/", we just simply give it a name