//SplashScreen.jsx
import './SplashScreen.css';
import logo from '../assets/logo.png';

function SplashScreen() {
    return (
        <div className="splash-screen">
            <div className="loader">
                <div className="circle"></div>
                {/* Keep the circle for visual effect */}
            </div>
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo"/>
            </div>
        </div>
    );
}

export default SplashScreen;