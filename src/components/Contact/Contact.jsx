import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

export const Contact = () => {
    return (
        <footer id="contacts" className={styles.container}>
            <div className={styles.text}>
                <h2>Контакты</h2>
                <p>Не стесняйтесь обращаться ко мне!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img
                        src={getImageUrl('contact/emailIcon.png')}
                        alt="Email icon"
                    />
                    <a href="mailto:vladorwork@email.com">
                        vladorwork@email.com
                    </a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl('contact/linkedinIcon.png')}
                        alt="LinkedIn icon"
                    />
                    <a href="https://www.linkedin.com/">linkedin.com/</a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl('contact/githubIcon.png')}
                        alt="Github icon"
                    />
                    <a href="https://www.github.com/Vlador1337">
                        github.com/Vlador1337
                    </a>
                </li>
            </ul>
        </footer>
    );
};
