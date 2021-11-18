import { Navbar, Nav, Container } from 'reactstrap';
import { NavLink } from "react-router-dom"

const Navigation = ({ dogs }) => {
    const links = dogs.map(dog => (
        <NavLink key={dog.name} to={`/dogs/${dog.name}`} >
            {dog.name}
        </NavLink>
    ));
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <NavLink exact to="/dogs">Home</NavLink>
                            {links}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Navigation;
