import styles from "../../../css/home.module.css";
import Link from "next/link";

export default function HomeNavBar() {
    return(
        <header className={styles.headerContainer}>
            <h1 className={`${styles.headerTitle} big-script-header`}> Karah Hammontree </h1>
            <nav className={`${styles.navBar} normal-ovo-header`}>
                <Link href='/about'>About</Link>
                <Link href='/counseling'>Counseling</Link>
                <Link href='/equine-therapy'>Equine Therapy</Link>
                <Link href='/contact'>Contact</Link>
            </nav>
        </header>
    )
}