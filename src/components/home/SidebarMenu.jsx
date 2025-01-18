// SidebarMenu.jsx
import { useState } from 'react';
import './SidebarMenu.css';

const SidebarMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
                <button className="toggle-btn" onClick={toggleMenu}>
                    ☰
                </button>
                <ul>
                    <li title="Home">🏠</li>
                    <li title="About Us">ℹ️</li>
                    <li title="Courses">📚</li>
                    <li title="Virtual Labs">🧪</li>
                    <li title="Faculty">👩‍🏫</li>
                    <li title="Contact Us">📞</li>
                    <li title="Login/Signup">🔑</li>
                </ul>
            </nav>
            <header className="mobile-nav">
                <button className="toggle-btn" onClick={toggleMenu}>
                    ☰
                </button>
                <h1>EduSphere</h1>
            </header>
        </>
    );
};

export default SidebarMenu;