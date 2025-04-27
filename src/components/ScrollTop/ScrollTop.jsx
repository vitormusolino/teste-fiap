import { useState, useEffect } from 'react';
import ScrollUpArrow from '../../assets/svg/scroll-up-arrow.svg';
import './scrolltop.css';

export default function ScrollTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            const scrollPosition = window.scrollY;
            const heightScroll = window.innerHeight * 0.7;
    
            if (scrollPosition > heightScroll) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
    
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button className="scroll-to-top" onClick={scrollTop}>
                    <img src={ScrollUpArrow} alt="Scroll to top" className="scroll-icon" />
                </button>
            )}
        </>
    );
}
