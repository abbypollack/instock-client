import './Header.scss';
import Logo from '../../assets/logo/InStock-Logo_1x.png';
import { NavLink, Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <section className='header'>
                <NavLink className='header__logo' to = "/">
                    <img src={Logo} alt='InStock-Logo'></img>
                </NavLink>
                
                <div>
                    <ul className='header__links'>
                        
                        <li><Link to='/WarehousePage' className='header__links-warehouses'>Warehouses</Link></li>
                        <li><Link to='/InventoryPage' className='header__links-inventory'>Inventory</Link></li>
                        
                    </ul>
                </div>
            </section>
        </header>
    );
}

export default Header;