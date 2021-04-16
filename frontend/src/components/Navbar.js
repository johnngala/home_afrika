import React, { Fragment } from 'react'
import {Link ,NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'
import DrawerToggleButton from './SideDrawer/DrawerToggleButton'


const Navbar = (props) => {
   
    return(
        <Fragment>
            <nav className  = 'navbar'>
                <div className = 'navbar__top'>
                    <div className = 'navbar__top__logo'>
                        <Link className = 'navbar__top__logo__link' to = '/'>Home Afrika</Link>
                    </div>
                    
                     <div className = 'navbar--nav__button'>
                     <DrawerToggleButton click = {props.drawerClickHandler}/>
                    </div>

                     <li className = 'navbar__bottom__item'>
                            <NavLink className = 'navbar__bottom__item__link' exact to = '/search'>Search</NavLink>
                        </li>
                        <li className = 'navbar__bottom__item'>
                            <NavLink className = 'navbar__bottom__item__link' exact to = '/listings'>Listings</NavLink>
                        </li>
                        <li className = 'navbar__bottom__item'>
                            <NavLink className = 'navbar__bottom__item__link' exact to = '/about'>About</NavLink>
                        </li>
                        <li className = 'navbar__bottom__item'>
                            <NavLink className = 'navbar__bottom__item__link' exact to = '/contact'>Contact</NavLink>
                        </li>
                </div>
            </nav>

        </Fragment>
    )
}

export default Navbar