import { useState } from 'react';

import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                Portfolio
            </a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={
                        isMenuOpen
                            ? getImageUrl('nav/closeIcon.png')
                            : getImageUrl('nav/menuIcon.png')
                    }
                    alt="menu-button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}></img>
                <ul
                    className={`${styles.menuItems} ${
                        isMenuOpen && styles.isMenuOpen
                    }`}
                    onClick={() => setIsMenuOpen(false)}>
                    <li>
                        <a href="#about">Обо мне</a>
                    </li>
                    <li>
                        <a href="#experience">Опыт</a>
                    </li>
                    <li>
                        <a href="#projects">Проекты</a>
                    </li>
                    <li>
                        <a href="#contacts">Контакты</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
