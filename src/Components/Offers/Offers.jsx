import React, { useState, useEffect } from "react";
import './Offers.css'
import exclusive_image from '../Assets/full-dress5.png';
import { Link } from "react-router-dom";


const Offers=()=>{
    const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 30, seconds: 45 });
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                let { days, hours, minutes, seconds } = prevTime;

                if (seconds > 0) {
                    seconds--;
                } else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                } else if (days > 0) {
                    days--;
                    hours = 23;
                    minutes = 59;
                    seconds = 59;
                } else {
                    // Reset to 2 days when countdown reaches zero
                    return { days: 2, hours: 0, minutes: 0, seconds: 0 };
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });

        // Update CSS custom properties for real-time mouse tracking
        e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
        e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        // Reset to center when mouse leaves
        setMousePosition({ x: 50, y: 50 });
    };

    return (
        <div
            className={`offers ${isVisible ? 'visible' : ''} ${isHovered ? 'hovered' : ''}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                '--mouse-x': `${mousePosition.x}%`,
                '--mouse-y': `${mousePosition.y}%`
            }}
        >
            {/* Interactive Background Elements */}
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>

            <div className="bg-shape circle"></div>
            <div className="bg-shape triangle"></div>
            <div className="bg-shape square"></div>

            <div className="gradient-orb orb-1"></div>
            <div className="gradient-orb orb-2"></div>
            <div className="gradient-orb orb-3"></div>

            <div className="wave-effect wave-1"></div>
            <div className="wave-effect wave-2"></div>
            <div className="wave-effect wave-3"></div>

            <div className="magnetic-particle particle-1"></div>
            <div className="magnetic-particle particle-2"></div>
            <div className="magnetic-particle particle-3"></div>

            <div className="dynamic-pattern pattern-1"></div>
            <div className="dynamic-pattern pattern-2"></div>
            <div className="dynamic-pattern pattern-3"></div>

            <div className="offers-left">
                <h1 className="exclusive">Exclusive</h1>
                <h1 className="offers-for-you">Offers For You</h1>
                <p className="best-sellers">ONLY ON BEST SELLERS PRODUCTS</p>

                <div className="countdown">
                    <div className="countdown-item">
                        <span className="countdown-number">{timeLeft.days}</span>
                        <span className="countdown-label">Days</span>
                    </div>
                    <div className="countdown-item">
                        <span className="countdown-number">{timeLeft.hours}</span>
                        <span className="countdown-label">Hours</span>
                    </div>
                    <div className="countdown-item">
                        <span className="countdown-number">{timeLeft.minutes}</span>
                        <span className="countdown-label">Min</span>
                    </div>
                    <div className="countdown-item">
                        <span className="countdown-number">{timeLeft.seconds}</span>
                        <span className="countdown-label">Sec</span>
                    </div>
                </div>

                <Link to='/womens'><button className="check-now-btn">Check Now</button></Link>
            </div>
            <div className="offers-right">
                <Link to='/womens'>
                    <img src={exclusive_image} alt="Exclusive Offer" className="offer-image" />
                </Link>
            </div>
        </div>
    )
}

export default Offers;
