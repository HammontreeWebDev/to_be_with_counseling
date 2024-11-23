'use client'
import Link from "next/link";
import styles from "../../../css/navBar.module.css";
import { useState } from "react";
import Image from "next/image";

export default function HomeNavBar() {

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
            <h1 className={`${styles.headerTitle} big-script-header text-sage-green`}> Karah Hammontree </h1>
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

                                <li className={styles.linkStyle} onClick={dropdownToggleContact}>
                                    <Image
                                    height={25}
                                    width={25}
                                    src={'/img/closeButton.svg'}
                                    alt="close icon"
                                    />
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
                                <li className={styles.linkStyle} onClick={dropdownToggleEquine}>
                                    <Image
                                    height={25}
                                    width={25}
                                    src={'/img/closeButton.svg'}
                                    alt="close icon"
                                    />
                                </li>

                            </ul> : null
                    }

                </p>

                <Link className={`${styles.mainLink} text-white`} href='/contact'>Contact</Link>
            </nav>
        </header>
    )
}