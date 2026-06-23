import styles from "./footer.module.scss"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer__box}>
                    <h3 className={styles.footer__title}>CREATEzone</h3>
                    <p className={styles.footer__adress}>Our adress: Prague 1, Vaclavske namesti 11</p>
                </div>
                <div className={styles.footer__border}></div>
                <div className={styles.footer__box}>
                    <ul className={styles.footer__list} >
                        <h5 className={styles.footer__secondaryTitle}>Our contacts:</h5>
                        <li className={styles.footer__item}>createzone@gmail.com</li>
                        <a href="tel:+42012312123" className={styles.footer__item}>+42 012 312 123</a>
                    </ul>
                    <ul className={styles.footer__list}>
                        <h5 className={styles.footer__secondaryTitle}>Our social media:</h5>
                        <Link className={styles.footer__item} href={"/https://www.instagram.com/"}>Instagram</Link>
                        <Link className={styles.footer__item} href={"https://www.facebook.com/"}>Facebook</Link>
                    </ul>
                </div>
                <a className={styles.footer__author} href="mailto:kovchar.webdev@gmail.com">Created by: kovchar.webdev@gmail.com</a>
            </div>
        </footer>
    )
}