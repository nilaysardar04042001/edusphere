// SidebarMenu.jsx
import { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import './SidebarMenu.css';
import logo from '/src/assets/logo.png';

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
        <div className={isDarkMode ? 'dark' : ''}>
            <nav className={`sidebar ${isSidebarOpen ? '' : 'close'}`}>
                <header>
                    <div className="image-text">
                        <span className="image">
                            <img src={logo} alt="Logo" />
                        </span>
                        <div className="text logo-text">
                            <span className="name">EduSphere</span>
                            <span className="profession">Learning Hub</span>
                        </div>
                    </div>
                    <i className='bx bx-chevron-right toggle' onClick={toggleSidebar}></i>
                </header>
                <div className="menu-bar">
                    <div className="menu">
                        <ul className="menu-list">
                            {['Home', 'About Us', 'Courses', 'Virtual Labs', 'Faculty', 'Contact Us'].map((item, index) => (
                                <li className="nav-link" key={index}>
                                    <a href="#">
                                        <i className={`bx bx-${item.toLowerCase().replace(' ', '-')}`}></i>
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
                            <i className='bx bx-user-plus icon'></i>
                            <span className="text nav-text">Register</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-log-in icon'></i>
                            <span className="text nav-text">Login</span>
                        </a>
                    </li>
                    <li className="mode">
                        <div className="sun-moon">
                            <i className='bx bx-moon icon moon'></i>
                            <i className='bx bx-sun icon sun'></i>
                        </div>
                        <span className="mode-text text">{isDarkMode ? 'Light mode' : 'Dark mode'}</span>
                        <div className="toggle-switch" onClick={toggleMode}>
                            <span className="switch"></span>
                        </div>
                    </li>
                </div>
            </nav>
            {/* Mobile Navigation Bar */}
            <nav className={`mobile-nav ${isSidebarOpen ? 'open' : ''}`}>
                <ul className="mobile-menu">
                    {['Home', 'About Us', 'Courses', 'Virtual Labs', 'Faculty', 'Contact Us'].map((item, index) => (
                        <li className="nav-link" key={index}>
                            <a href="#">
                                <i className={`bx bx-${item.toLowerCase().replace(' ', '-')}`}></i>
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="#">
                            <i className='bx bx-user-plus icon'></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-log-in icon'></i>
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