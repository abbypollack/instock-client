import './Header.scss';
import Logo from '../../assets/logo/InStock-Logo.svg';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    const warehouseIsActive = () => {
        return location.pathname === '/' || location.pathname.startsWith('/warehouses');
    };

    const inventoryIsActive = () => {
        return location.pathname.startsWith('/inventory');
    };

    return (
        <header>
            <section className='header'>
                <NavLink className='header__logo' to="/">
                    <img src={Logo} alt='InStock-Logo'></img>
                </NavLink>

                <div>
                    <ul className='header__links'>
                        <li>
                            <NavLink to='/' className={`header__links-warehouses ${warehouseIsActive() ? 'active' : ''}`}>
                                Warehouses
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/inventory' className={`header__links-inventory ${inventoryIsActive() ? 'active' : ''}`}>
                                Inventory
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </section>
        </header>
    );
}

export default Header;