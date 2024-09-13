import HomeNavBar from "./ui/navbars/home_navbar/HomeNavBar";
import styles from "./css/home.module.css";
import Image from "next/image";
import Link from "next/link";
import 'animate.css';

export default function Home() {
  return (
    <>
      <HomeNavBar />

      <main className={`antialiased`}>
        {/* Hero Image Section */}
        <section className={styles.heroImgSection}>

          <Image
            className={`${styles.heroImg} animate__animated animate__fadeInDown`}
            src='/img/homeHero.png'
            height={1274}
            width={1920}
            alt="trees surrounding a lake with a mountain in the background"
          />

          <div className={styles.heroOverlay}></div>

          <Image
            className={`${styles.heroVector} animate__animated animate__fadeInLeft`}
            src='/img/homeHeroVector.svg'
            height={1274}
            width={1920}
            alt="vector image in the shape of a triangle"
          />
          <Image
            className={`${styles.heroLogo} animate__animated animate__fadeInUp`}
            src='/img/heroLogo.png'
            height={1274}
            width={1920}
            alt="to be with counselings brand logo"
          />
        </section>

        {/* Home Section */}
        <section className={styles.homeContainer}>

          <div className={styles.firstRow}>
            <h1 className={` ${styles.welcomeSlogan} script-titles`}>
              Restored To Your Home
            </h1>
          </div>

          <div className={styles.secondRow}>

            <div className={styles.firstColumn}>
              <Image
              src='/img/homeAvatar.png'
              width={720}
              height={720}
              alt="Karah Hammontree"
              />
            </div>

            <div className={styles.secondColumn}>
              <h2 className={`big-ovo-header text-forest-green text-center`}>Karah Hammontree MA, RMHCI</h2>

              <p className={`big-body-text text-forest-green text-center`}>
              Karah is a Registered Mental Health Counselor Intern in the State of Florida who is passionate about walking alongside her clients in their search for long-lasting freedom from eating disorders, body image issues, and body shame. In assisting her clients uncover the root issues that have contributed to the development of an unhealthy relationship with food and body, she has witnessed the unequivocal transformation that occurs when one is able to come back home to themselves, utilizing compassion, kindness, and curiosity, in this needed restoration process.
              </p>

              <Link href='/about' className={`customButton sub-ovo-header`}>Learn More</Link>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
