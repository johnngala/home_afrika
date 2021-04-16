import React from 'react'

function Footer() {
    return (
        <div className = 'footer'>
            <div className = 'footer__logo'>
                <img src ='images/logo.png' alt = 'footer' className = 'footer__image' />
            <h1 className = 'footer__heading'>Home Afrika</h1>
            </div>
            <div className = 'footer__copyright'>
                &copy; Home Afrika 2021
            </div>
            <div>
                <h1 className = 'footer__dev'>Developed by John Ngala</h1>
            </div>
        </div>
    )
}

export default Footer
