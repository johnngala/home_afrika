import React from 'react'
import './SideDrawer.css'


const SideDrawer = (props) => {
    let drawerClasses = 'side-drawer'
    if(props.show){
        drawerClasses = 'side-drawer open'
    }

    return (
        <nav className = {drawerClasses}>
            <ul>
                <li><a href = '/'>Home</a></li>
                <li><a href = '/search'>Search</a></li>
                <li><a href = '/listings'>Listings</a></li>
                <li><a href = '/about'>About</a></li>
                <li><a href = '/contact'>Contact</a></li>
            </ul>
        </nav>
    )
}

export default SideDrawer
