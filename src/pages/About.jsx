import { Outlet, NavLink } from "react-router-dom"


function About(){
    return (<>
        <h1>About page</h1>
        <nav>
            <NavLink to='team'>Team</NavLink>{" | "}
            <NavLink to='reviews'>Reviews</NavLink>{" | "}
            <NavLink to='mission'>Mission</NavLink>
        </nav>
        <Outlet />
    </>)
}

export default About