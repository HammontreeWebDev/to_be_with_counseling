'use client'
import Link from "next/link";
import styles from "../../../css/navBar.module.css";
import { useState } from "react";
import Image from "next/image";

export default function HomeNavBar() {

    const [toggleDropdown, setToggleDropdown] = useState(false);

    const dropdownToggle = () => {
        setToggleDropdown(!toggleDropdown);
    }

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
                        onClick={dropdownToggle}
                    >
                        <Image
                            src='/img/downArrow.svg'
                            height={35}
                            width={35}
                            alt="down arrow"
                        />
                    </span>
                    {
                        toggleDropdown ?
                            <ul
                                className={`${styles.toggleDropdown} sub-ovo-header animate__animated animate__fadeInDown`}
                            >
                                <li className={styles.linkStyle}>
                                    <Link href='/counseling/#philosophy' onClick={dropdownToggle}>
                                        Philosophy
                                    </Link>
                                </li>

                                <li className={styles.linkStyle}>
                                    <Link href='/counseling/#services-and-fees' onClick={dropdownToggle}>
                                        Services & Fees
                                    </Link>
                                </li>

                                <li className={styles.linkStyle}>
                                    <Link href='/counseling/#good-faith-estimate' onClick={dropdownToggle}>
                                        Good Faith Estimate
                                    </Link>
                                </li>

                                <li className={styles.linkStyle}>
                                    <Link href='/counseling/#resources' onClick={dropdownToggle}>
                                        Resources
                                    </Link>
                                </li>

                            </ul> : null
                    }

                </p>
                <Link className={`${styles.mainLink} text-white`} href='/equine-therapy'>Equine Therapy</Link>
                <Link className={`${styles.mainLink} text-white`} href='/contact'>Contact</Link>
            </nav>
        </header>
    )
}