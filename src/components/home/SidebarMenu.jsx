// SidebarMenu.jsx
import 'react';
import { useState } from 'react';
import './SidebarMenu.css';
import 'boxicons'
import logo from '/src/assets/logo.png'

const SidebarMenu = () => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={isDarkMode ? 'dark': ''}>
            <nav className={`sidebar ${isSidebarOpen ? '' : 'close'}`}>
                <header>
                    <div className="image-text">
                            <span className="image">
                                <img src={logo} alt="Logo" />
                            </span>
                        <div className="text logo-text">
                            <span className="name">Academia Nexus</span>
                            <span className="profession">Web developer</span>
                        </div>
                    </div>
                    <i className='bx-chevron-right toggle' onClick={toggleSidebar}></i>
                </header>
                <div className="menu-bar">
                    <div className="menu">
                        <ul className="menu-list">
                            {['Home', 'About Us', 'Course', 'Virtual Lab', 'Faculty', 'Contact Us'].map((item, index) => (
                                <li className="nav-link" key={index}>
                                    <a href="#">
                                        <i className={` bx bx-${item.toLowerCase().replace(' ', '-')}-icon`}></i>
                                        <span className="text nav-text">{item}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="bottom-content">
                    <li>
                        <a href="#">
                            <i className='bx-user-plus icon'></i>
                            <span className="text nav-text">Register</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx-log-in icon'></i>
                            <span className="text nav-text">Login</span>
                        </a>
                    </li>
                    <li className="mode">
                        <div className="sun-moon">
                            <i className='bx-moon icon moon'></i>
                            <i className='bx-sun icon sun'></i>
                        </div>
                        <span className="mode-text text">{isDarkMode ? 'Light mode' : 'Dark mode'}</span>
                        <div className="toggle-switch" onClick={toggleMode}>
                            <span className="switch"></span>
                        </div>
                    </li>
                </div>
            </nav>
            <nav className={`mobile-nav ${isSidebarOpen ? 'open' : ''}`}>
                <ul className="mobile-menu">
                    {['Home', 'About Us', 'Course', 'Virtual Lab', 'Faculty', 'Contact Us'].map((item, index) => (
                        <li className="nav-link" key={index}>
                            <a href="#">
                                <i className={`bx-${item.toLowerCase().replace(' ', '-')}-icon`}></i>
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="#">
                            <i className='bx-user-plus icon'></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx-log-in icon'></i>
                        </a>
                    </li>
                    <li className="mode">
                        <div className="toggle-switch" onClick={toggleMode}>
                            <span className="switch"></span>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default SidebarMenu;