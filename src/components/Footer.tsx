import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.content}`}>
                <p>&copy; {new Date().getFullYear()} Toko Outdoor. All rights reserved.</p>
                <p className={styles.copy}>Premium Gear for your Adventures.</p>
            </div>
        </footer>
    );
}
