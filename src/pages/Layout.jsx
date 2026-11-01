import { Outlet, NavLink } from "react-router-dom"

function Layout(){
    return (<>
    <nav>
        <NavLink to='/'>Home</NavLink>{" | "}
        <NavLink to='/about'>About</NavLink>{" | "}
        <NavLink to='/products'>Products</NavLink>
    </nav>
    
    


    <Outlet />
    </>    
    )
}

export default Layout
