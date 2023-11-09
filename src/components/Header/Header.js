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
                
                <NavLink>
                    <ul className='header__links'>
                        
                        <li><a href='/WarehousePage' className='header__links-warehouses'>Warehouses</a></li>
                        <li><a href='/InventoryPage' className='header__links-inventory'>Inventory</a></li>
                        
                    </ul>
                </NavLink>
            </section>
        </header>
    );
}

export default Header;