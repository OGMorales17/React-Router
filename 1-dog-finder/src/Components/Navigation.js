import { NavLink } from "react-router-dom"
import { Navbar } from 'reactstrap';
import "./NavBar.css"


function Navigation({ dogs }) {
    const links = dogs.map(dog => (
        <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`} >
            {dog.name}
        </NavLink>
    ));
    return (
        <Navbar>
            <NavLink to="/dogs">Home</NavLink>
            {links}
        </Navbar>
    );
}

export default Navigation;

/**
 * However, just like bootstrap, I would recommend that you place their own demo code for a collapsing menu
 * in the component first. Make sure that works, and then change it to be what you want.
 */
