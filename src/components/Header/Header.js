import './Header.scss';
import Logo from '../../assets/logo/InStock-Logo_1x.png';
import { NavLink } from 'react-router-dom';

function Header(){
    return(
        <header>
            <section className='header'>
                <NavLink className='header__logo' to = "/">
                    <img src={Logo} alt='InStock-Logo'></img>
                </NavLink>
                
                <ul className='header__links'>
                    <li className='header__links-warehouses'>WareHouses</li>
                    <li className='header__links-inventory'>Inventory</li>
                </ul>
            </section>
        </header>
    );
}

export default Header;