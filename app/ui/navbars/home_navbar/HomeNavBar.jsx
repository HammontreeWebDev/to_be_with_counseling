'use client'

import styles from "../../../css/home.module.css";
import Link from "next/link";
import { useState } from "react";

export default function HomeNavBar() {

    const [toggleDropdown, setToggleDropdown] = useState(false);

    const activateDropdown = () => {
        setToggleDropdown(true);
    }

    const deactivateDropdown = () => {
        setToggleDropdown(false);
    }

    return (
        <header className={styles.headerContainer}>
            <h1 className={`${styles.headerTitle} big-script-header`}> Karah Hammontree </h1>
            <nav className={`${styles.navBar} normal-ovo-header`}>
                <Link href='/about'>About</Link>

                <p
                    className={styles.fakeLink}
                    onClick={activateDropdown}
                    onMouseLeave={deactivateDropdown}
                >
                    Counseling

                    {
                        toggleDropdown ?
                            <ul className={`${styles.toggleDropdown} animate__animated animate__backInDown`}>
                                <li className={styles.linkStyle}>
                                    <Link href='/counseling/#philosophy'>
                                        Philosophy
                                    </Link>
                                </li>

                                <li className={styles.linkStyle}>
                                    <Link href='/counseling/#services-and-fees'>
                                        Services & Fees
                                    </Link>
                                </li>

                                <li className={styles.linkStyle}>
                                    <Link href='/counseling/#good-faith-estimate'>
                                        Good Faith Estimate
                                    </Link>
                                </li>

                                <li className={styles.linkStyle}>
                                    <Link href='/counseling/#resources'>
                                        Resources
                                    </Link>
                                </li>

                            </ul> : null
                    }

                </p>
                <Link href='/equine-therapy'>Equine Therapy</Link>
                <Link href='/contact'>Contact</Link>
            </nav>
        </header>
    )
}