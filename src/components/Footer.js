import React from 'react'
import "../styles/Footer.scss"
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            Copyright Ⓒ {year}
        </div>
    )
}

export default Footer
