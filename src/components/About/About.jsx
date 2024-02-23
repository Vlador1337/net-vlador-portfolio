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
                            src={getImageUrl('about/serverIcon.png')}
                            alt="Server Icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                Имею опыт в создании быстрых и оптимизированных
                                серверных частей и API, используя современные
                                технологии и фреймворки, такие как ASP.NET.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl('about/cursorIcon.png')}
                            alt="Cursor Icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                Специалист в области разработки адаптивных и
                                оптимизированных веб-приложений, обладающий
                                глубокими знаниями в области современных
                                технологий и инструментов.
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
                            <p>
                                Специалист в области дизайна пользовательского
                                интерфейса, с акцентом на создание интуитивно
                                понятных и эстетически привлекательных
                                интерфейсов.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}
