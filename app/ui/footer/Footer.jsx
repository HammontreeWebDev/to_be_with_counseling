import styles from '../../css/footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className={`${styles.footerBackground}`}>
            <div className={`${styles.footerContainer}`}>
                {/* Row One */}
                <div className={`${styles.footerRow}`}>
                    <div className={`${styles.footerColumn}`}>
                        {/* Mini - Nav */}
                        <div className={`${styles.footerSubRow} body-text text-white`}>
                            <Link href='/about'>About</Link>

                            <Image
                                src='/img/Bullet.svg'
                                height={10}
                                width={10}
                                alt='bullet point'
                            />

                            <Link href='/counseling'>Counseling</Link>

                            <Image
                                src='/img/Bullet.svg'
                                height={10}
                                width={10}
                                alt='bullet point'
                            />

                            <Link href='/equine-therapy'>Equine Therapy</Link>

                            <Image
                                src='/img/Bullet.svg'
                                height={10}
                                width={10}
                                alt='bullet point'
                            />

                            <Link href='/contact'>Contact</Link>
                        </div>

                        {/* Social Links */}
                        <div className={`${styles.footerSubRow}`}>
                            <Link href='https://www.facebook.com/profile.php?id=61561036637139'>
                                <Image
                                    src={'/img/FaceBook.svg'}
                                    height={20}
                                    width={20}
                                    alt='facebook logo'
                                />
                            </Link>

                            <Image
                                src='/img/Bullet.svg'
                                height={10}
                                width={10}
                                alt='bullet point'
                            />

                            <Link href='https://www.instagram.com/relatable.therapist/'>
                                <Image
                                    src={'/img/Instagram.svg'}
                                    height={20}
                                    width={20}
                                    alt='instagram logo'
                                />
                            </Link>

                            <Image
                                src='/img/Bullet.svg'
                                height={10}
                                width={10}
                                alt='bullet point'
                            />

                            <Link href='https://www.pinterest.com/karahhammontree/'>
                                <Image
                                    src={'/img/Pinterest.svg'}
                                    height={20}
                                    width={20}
                                    alt='pinterest logo'
                                />
                            </Link>

                            <Image
                                src='/img/Bullet.svg'
                                height={10}
                                width={10}
                                alt='bullet point'
                            />

                            <Link href='https://www.linkedin.com/in/karah-hammontree'>
                                <Image
                                    src={'/img/LinkedIn.svg'}
                                    height={20}
                                    width={20}
                                    alt='LinkedIn logo'
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Row Two */}
                <div className={`${styles.footerRow}`}>

                </div>

            </div>
        </footer>
    )
}