import { useEffect } from 'react';
import Logo from '../../assets/svg/logo.svg';
import './header.css';

export default function Header() {
    useEffect(() => {
        const timeline = document.querySelector('.timeline');

        const updateTimeline = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            timeline.style.width = `${scrollPercent}%`;
        };

        window.addEventListener('scroll', updateTimeline);

        return () => {
            window.removeEventListener('scroll', updateTimeline);
        };
    }, []);

    return (
        <>
            <section className="bg-header">
                <img src={Logo} alt="Logo FIAP" className="logo-header" />
                <div className="timeline"></div>
            </section>
        </>
    );
}
