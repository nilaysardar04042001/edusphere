//main.jsx
import { StrictMode } from 'react';
import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import SplashScreen from './components/SplashScreen.jsx';

// eslint-disable-next-line react-refresh/only-export-components
function RootComponent() {
    const [showSplash, setShowSplash] = useState(sessionStorage.getItem('visited') !== 'true');
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [showNotification, setShowNotification] = useState(false);
    const [isFrozen, setIsFrozen] = useState(!navigator.onLine);

    useEffect(() => {
        if (showSplash && isOnline) {
            sessionStorage.setItem('visited', 'true');
            const timer = setTimeout(() => setShowSplash(false), 33000);
            return () => clearTimeout(timer);
        }
    }, [showSplash, isOnline]);

    useEffect(() => {
        const updateOnlineStatus = () => {
            const online = navigator.onLine;
            setIsOnline(online);
            setShowNotification(true);
            setIsFrozen(!online);
            setTimeout(() => setShowNotification(false), 3000);
        };

        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);

        return () => {
            window.removeEventListener('online', updateOnlineStatus);
            window.removeEventListener('offline', updateOnlineStatus);
        };
    }, []);

    const containerStyle = {
        pointerEvents: isFrozen ? 'none' : 'auto',
        userSelect: isFrozen ? 'none' : 'auto',
        height: '100vh',
        width: '100vw',
    };

    return (
        <StrictMode>
            <div style={containerStyle}>
                {showSplash ? (
                    <SplashScreen />
                ) : (
                    <>
                        {showNotification && (
                            <div className={`notification ${isOnline ? 'online' : 'offline'}`}>
                                {isOnline ? 'You are back online' : 'You are offline'}
                            </div>
                        )}
                        <App />
                    </>
                )}
                {isFrozen && <div className="freeze-overlay">Please check your internet connection.</div>}
            </div>
        </StrictMode>
    );
}

createRoot(document.getElementById('root')).render(<RootComponent />);