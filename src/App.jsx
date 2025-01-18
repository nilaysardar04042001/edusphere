//App.jsx
import './App.css';
import { useState } from 'react';

function App() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            title: 'Explore World-Class Courses',
            description: 'Discover a variety of courses crafted by top educators.',
            image: 'assets/slide1.jpg',
            cta: 'Learn More',
        },
        {
            title: 'Hands-On Virtual Labs for Practical Learning',
            description: 'Experience innovative virtual labs for real-world skills.',
            image: 'assets/slide2.jpg',
            cta: 'Try Virtual Labs',
        },
        {
            title: 'Connect with Top Faculty in Real-Time',
            description: 'Join live sessions with world-renowned faculty.',
            image: 'assets/slide3.jpg',
            cta: 'Join Now',
        },
    ];

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="app">
            {/* Navbar */}
            <nav className="navbar">
                <div className="logo">EduSphere</div>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Virtual Labs</a></li>
                    <li><a href="#">Faculty</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <div className="cta-buttons">
                    <button className="login">Login</button>
                    <button className="signup">Sign Up</button>
                </div>
            </nav>

            {/* Image Slider */}
            <div className="slider">
                <div
                    className="slide"
                    style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                >
                    <div className="slide-content">
                        <h2>{slides[currentSlide].title}</h2>
                        <p>{slides[currentSlide].description}</p>
                        <button className="cta-button">{slides[currentSlide].cta}</button>
                    </div>
                </div>
                <button className="prev-button" onClick={handlePrevSlide}>&lt;</button>
                <button className="next-button" onClick={handleNextSlide}>&gt;</button>
            </div>
        </div>
    );
}

export default App;