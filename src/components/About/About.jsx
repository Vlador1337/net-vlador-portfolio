import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export default function About() {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>Обо мне</h2>
            <div className={styles.content}>
                <img
                    className={styles.aboutImage}
                    src={getImageUrl('about/aboutImage.png')}
                    alt="About image"
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl('about/cursorIcon.png')}
                            alt="Cursor Icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                Я frontend developer с опытом разработки
                                адаптивных и оптимизированных веб приложений
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl('about/serverIcon.png')}
                            alt="Server Icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                У меня есть опыт разработки быстрой и
                                оптимизированной серверной части и API с
                                использованием ASP.NET
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl('about/uiIcon.png')}
                            alt="UI Icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>Я разрабатывал дизайн XD</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}
