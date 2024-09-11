import HomeNavBar from "./ui/navbars/home_navbar/HomeNavBar";
import styles from "./css/home.module.css";
import Image from "next/image";
import 'animate.css';

export default function Home() {
  return (
    <>
      <HomeNavBar />

      <main>
        {/* Hero Image Section */}
        <section className={styles.heroImgSection}>
          <Image
            className={`${styles.heroImg} animate__animated animate__fadeInDown`}
            src='/img/homeHero.png'
            height={1274}
            width={1920}
            alt="trees surrounding a lake with a mountain in the background"
          />
          <Image
            className={`${styles.heroVector} animate__animated animate__fadeInLeft`}
            src='/img/homeHeroVector.svg'
            height={1274}
            width={1920}
            alt="vector image in the shape of a triangle"
          />
          <Image
            className={`${styles.heroLogo} animate__animated animate__fadeIn`}
            src='/img/heroLogo.png'
            height={1274}
            width={1920}
            alt="to be with counselings brand logo"
          />
        </section>
      </main>
    </>
  );
}
