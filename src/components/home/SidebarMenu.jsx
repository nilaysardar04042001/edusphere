// SidebarMenu.jsx

import 'react';
import './SidebarMenu.css';
import logo from '/src/assets/logo.png'

const SidebarMenu = () => {
    return (
        <nav className="sidebar">
            <div className="sidebar-logo">
                <img src={logo} alt="EduSphere Logo" />
            </div>
            <ul>
                <li title="Home">🏠<span>Home</span></li>
                <li title="About Us">ℹ️<span>About Us</span></li>
                <li title="Courses">📚<span>Courses</span></li>
                <li title="Virtual Labs">🧪<span>Virtual Labs</span></li>
                <li title="Faculty">👩‍🏫<span>Faculty</span></li>
                <li title="Contact Us">📞<span>Contact Us</span></li>
                <li title="Login/Signup">🔑<span>Login/Signup</span></li>
            </ul>
        </nav>
    );
};

export default SidebarMenu;