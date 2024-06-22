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
						src={getImageUrl('contact/githubIcon.png')}
						alt="Github icon"
					/>
					<a href="https://www.github.com/Vlador1337">
						github.com/Vlador1337
					</a>
				</li>
				<li className={styles.link}>
					<img
						src={getImageUrl('contact/tg.png')}
						alt="Telegram icon"
					/>
					<a href="https://t.me/Vlador1337">t.me/Vlador1337</a>
				</li>
			</ul>
		</footer>
	);
};
