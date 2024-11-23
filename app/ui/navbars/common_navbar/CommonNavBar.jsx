'use client'
import Link from "next/link";
import styles from "../../../css/navBar.module.css";
import { useState } from "react";
import Image from "next/image";

export default function CommonNavBar() {

    const [toggleDropdownContact, setToggleDropdownContact] = useState(false);
    const [toggleDropdownEquine, setToggleDropdownEquine] = useState(false);

    const dropdownToggleContact = () => {
        setToggleDropdownContact(!toggleDropdownContact);
    };

    const dropdownToggleEquine = () => {
        setToggleDropdownEquine(!toggleDropdownEquine);
    };

    return (
        <header className={styles.headerContainer}>

            <div className={`${styles.commonTitleContainer}`}>

                <Image
                    src='/img/commonNavLogo.png'
                    height={138}
                    width={138}
                    alt="To be with counseling logo"
                />
                <Link className={`big-body-text text-sage-green ${styles.textContainer}`} href={'/'}>
                    <p> To Be With </p>
                    <p className={`big-script-header`}>
                        &nbsp;Counseling
                    </p>
                </Link>
            </div>

            <nav className={`${styles.navBar} normal-ovo-header`}>
                <Link className={`${styles.mainLink} text-white`} href='/about'>About</Link>

                <p
                    className={`${styles.fakeLink} text-white`}
                >
                    Counseling
                    <span
                        className={styles.arrowSpan}
                        onClick={dropdownToggleContact}
                    >
                        <Image
                           src='/img/downArrow.svg'
                            height={35}
                            width={35}
                            alt="down arrow"
                        />
                    </span>
                    {
                        toggleDropdownContact ?
                            <ul
                                className={`${styles.toggleDropdown} sub-ovo-header animate__animated animate__fadeInDown`}
                            >

                                <li className={styles.linkStyle}>
                                    <Link href='/counseling' onClick={dropdownToggleContact}>
                                        Counseling
                                    </Link>
                                </li>

                                <li className={styles.linkStyle}>
                                    <Link href='/counseling/#philosophy' onClick={dropdownToggleContact}>
                                        Philosophy
                                    </Link>
                                </li>

                                <li className={styles.linkStyle}>
                                    <Link href='/counseling/#services-and-fees' onClick={dropdownToggleContact}>
                                        Services & Fees
                                    </Link>
                                </li>

                                <li className={styles.linkStyle}>
                                    <Link href='/counseling/#good-faith-estimate' onClick={dropdownToggleContact}>
                                        Good Faith Estimate
                                    </Link>
                                </li>

                                <li className={styles.linkStyle}>
                                    <Link href='/counseling/#resources' onClick={dropdownToggleContact}>
                                        Resources
                                    </Link>
                                </li>

                            </ul> : null
                    }

                </p>

                <p
                    className={`${styles.fakeLink} text-white`}
                >
                    Equine Therapy
                    <span
                        className={styles.arrowSpan}
                        onClick={dropdownToggleEquine}
                    >
                        <Image
                            src='/img/downArrow.svg'
                            height={35}
                            width={35}
                            alt="down arrow"
                        />
                    </span>
                    {
                        toggleDropdownEquine ?
                            <ul
                                className={`${styles.toggleDropdown} sub-ovo-header animate__animated animate__fadeInDown`}
                            >

                                <li className={styles.linkStyle}>
                                    <Link href='/equine-therapy' onClick={dropdownToggleEquine}>
                                        Equine Therapy
                                    </Link>
                                </li>

                                <li className={styles.linkStyle}>
                                    <Link href='/equine-therapy/#philosophy' onClick={dropdownToggleEquine}>
                                        Philosophy
                                    </Link>
                                </li>

                                <li className={styles.linkStyle}>
                                    <Link href='/equine-therapy/#services-and-fees' onClick={dropdownToggleEquine}>
                                        Services & Fees
                                    </Link>
                                </li>

                                <li className={styles.linkStyle}>
                                    <Link href='/equine-therapy/#good-faith-estimate' onClick={dropdownToggleEquine}>
                                        Good Faith Estimate
                                    </Link>
                                </li>

                                <li className={styles.linkStyle}>
                                    <Link href='/equine-therapy/#FAQ' onClick={dropdownToggleEquine}>
                                        FAQ
                                    </Link>
                                </li>

                            </ul> : null
                    }

                </p>

                <Link className={`${styles.mainLink} text-white`} href='/contact'>Contact</Link>
            </nav>
        </header>
    )
}