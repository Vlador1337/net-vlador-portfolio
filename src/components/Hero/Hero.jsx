import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export default function Hero() {
	return (
		<section className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Привет, я Влад!</h1>
				<p className={styles.description}>
					Я Fullstack разработчик с многолетним стажем на React JS/TS,
					C# ASP.NET
				</p>
				<a
					className={styles.contactBtn}
					href="mailto:vladorwork@gmail.com">
					Связаться со мной
				</a>
			</div>
			<img
				className={styles.heroImg}
				src={getImageUrl('hero/Avatar.png')}
				alt="Hero image"
			/>
			<div className={styles.topBlur} />
			<div className={styles.bottomBlur} />
		</section>
	);
}
