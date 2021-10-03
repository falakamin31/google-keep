import React from 'react'
import"../styles/Header.scss"
import SearchIcon from '@mui/icons-material/Search';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SettingsIcon from '@mui/icons-material/Settings';
const Header = () => {
    return (
        <div className="header">
            <div className="logo_heading_container">
                <MenuSharpIcon className="menu"/>
                <a href="/">

            <img  className="logo" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="Google keep" />
                </a>
            <span id="heading">Keep</span> 
            
            </div>
            <div className="search_bar">
                <div className="search_icon_container">
            <SearchIcon className="search_icon"/>
                </div>
            <input className="input_search" type="search" name="" id="" placeholder="Search" />
            </div>
            
        <div className="setting">
        <SettingsIcon/>
        </div>
        </div>
    )
}

export default Header
