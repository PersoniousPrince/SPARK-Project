import React from 'react';

function Navigation() {
    return (
        <nav className="bg-[linear-gradient(to_right,var(--color-dark-bg),var(--color-light-bg),var(--color-dark-bg))] p-4 m-4 rounded-lg shadow-lg sticky top-0 z-50 flex justify-center items-center">
            <ul className="flex justify-center items-center gap-x-8 text-xl font-medium">
                <li>
                    <a className="text-[var(--color-primary-text)] hover:text-[var(--color-accent-hover)] transition-colors duration-300 ease-in-out" href="#about">About</a>
                </li>
                <li>
                    <a className="text-[var(--color-primary-text)] hover:text-[var(--color-accent-hover)] transition-colors duration-300 ease-in-out" href="#projects">Projects</a>
                </li>
                <li>
                    <a className="text-[var(--color-primary-text)] hover:text-[var(--color-accent-hover)] transition-colors duration-300 ease-in-out" href="#team">Team</a>
                </li>
                <li>
                    <a className="text-[var(--color-primary-text)] hover:text-[var(--color-accent-hover)] transition-colors duration-300 ease-in-out" href="#contact">Contact</a>
                </li>
                <li>
                    <a className="text-[var(--color-primary-text)] hover:text-[var(--color-accent-hover)] transition-colors duration-300 ease-in-out" href="#yuri-ai">YURI AI</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
