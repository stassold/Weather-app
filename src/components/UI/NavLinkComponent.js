import { NavLink } from 'react-router-dom';

function NavLinkComponent() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/collection" className="nav-link">Collection</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export  default  NavLinkComponent