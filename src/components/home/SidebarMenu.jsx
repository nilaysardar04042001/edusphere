// SidebarMenu.jsx

import 'react';
import './SidebarMenu.css';
import logo from '/src/assets/logo.png'

const SidebarMenu = () => {
    return (
        <>
            <header className="mobile-nav">
                <img src={logo} alt="EduSphere Logo" className="mobile-logo" />
                <ul className="mobile-icons">
                    <li title="Home">🏠</li>
                    <li title="About Us">ℹ️</li>
                    <li title="Courses">📚</li>
                    <li title="Virtual Labs">🧪</li>
                    <li title="Faculty">👩‍🏫</li>
                    <li title="Contact Us">📞</li>
                    <li title="Login/Signup">🔑</li>
                </ul>
            </header>
        </>
    );
};

export default SidebarMenu;