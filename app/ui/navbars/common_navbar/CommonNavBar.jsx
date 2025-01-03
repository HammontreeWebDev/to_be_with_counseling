'use client'
import Link from "next/link";
import styles from "../../../css/navBar.module.css";
import { useState, useRef } from "react";
import Image from "next/image";

export default function CommonNavBar() {

    // Counseling Dropdown Logic
    const [isCounselingDropdownVisible, setIsCounselingDropdownVisible] = useState(false);
    const counselingDropdownTimeout = useRef(null);

    const showCounselingDropdown = () => {
        // Clear any timeout to hide the dropdown
        clearTimeout(counselingDropdownTimeout.current);
        setIsCounselingDropdownVisible(true);
    };

    const hideCounselingDropdown = () => {
        // Add a slight delay before hiding the dropdown
        counselingDropdownTimeout.current = setTimeout(() => {
            setIsCounselingDropdownVisible(false);
        }, 200); // Adjust delay as needed
    };

    // Equine Therapy Dropdown Logic
    const [isEquineTherapyDropdownVisible, setIsEquineTherapyDropdownVisible] = useState(false);
    const equineTherapyDropdownTimeout = useRef(null);

    const showEquineTherapyDropdown = () => {
        // Clear any timeout to hide the dropdown
        clearTimeout(equineTherapyDropdownTimeout.current);
        setIsEquineTherapyDropdownVisible(true);
    };

    const hideEquineTherapyDropdown = () => {
        // Add a slight delay before hiding the dropdown
        equineTherapyDropdownTimeout.current = setTimeout(() => {
            setIsEquineTherapyDropdownVisible(false);
        }, 200); // Adjust delay as needed
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
                <Link className={`nav-header text-sage-green ${styles.textContainer}`} href={'/'}>
                    <p> To Be With </p>
                    <p className={`big-script-header`}>
                        &nbsp;Counseling
                    </p>
                </Link>
            </div>

            <nav className={`${styles.navBar} normal-ovo-header`}>
                <Link className={`${styles.mainLink} text-white`} href='/about'>About</Link>

                {/* Counseling Dropdown Trigger and Area */}
                <div
                    className={styles.dropdownWrapper}
                    onMouseEnter={showCounselingDropdown}
                    onMouseLeave={hideCounselingDropdown}
                >
                    <p className={`${styles.fakeLink} text-white`}
                        onClick={showCounselingDropdown}
                    >Counseling</p>

                    {isCounselingDropdownVisible && (
                        <ul
                            className={`${styles.toggleDropdown} sub-ovo-header animate__animated animate__fadeInDown`}
                            onMouseEnter={showCounselingDropdown}
                            onMouseLeave={hideCounselingDropdown}
                        >
                            <li className={styles.linkStyle}>
                                <Link href='/counseling'
                                    onClick={hideCounselingDropdown}
                                >Counseling</Link>
                            </li>
                            <li className={styles.linkStyle}>
                                <Link href='/counseling/#philosophy'
                                    onClick={hideCounselingDropdown}
                                >Philosophy</Link>
                            </li>
                            <li className={styles.linkStyle}>
                                <Link href='/counseling/#services-and-fees'
                                    onClick={hideCounselingDropdown}
                                >Services & Fees</Link>
                            </li>
                            <li className={styles.linkStyle}>
                                <Link href='/counseling/#good-faith-estimate'
                                    onClick={hideCounselingDropdown}
                                >Good Faith Estimate</Link>
                            </li>
                            <li className={styles.linkStyle}>
                                <Link href='/counseling/#resources'
                                    onClick={hideCounselingDropdown}
                                >Resources</Link>
                            </li>
                        </ul>
                    )}
                </div>

                {/* Equine Therapy Dropdown Trigger and Area */}
                <div
                    className={styles.dropdownWrapper}
                    onMouseEnter={showEquineTherapyDropdown}
                    onMouseLeave={hideEquineTherapyDropdown}
                >
                    <p className={`${styles.fakeLink} text-white`}
                        onClick={showEquineTherapyDropdown}
                    >Equine Therapy</p>

                    {isEquineTherapyDropdownVisible && (
                        <ul
                            className={`${styles.toggleDropdown} sub-ovo-header animate__animated animate__fadeInDown`}
                            onMouseEnter={showEquineTherapyDropdown}
                            onMouseLeave={hideEquineTherapyDropdown}
                        >
                            <li className={styles.linkStyle}>
                                <Link href='/equine-therapy'
                                    onClick={hideEquineTherapyDropdown}
                                >Equine Therapy</Link>
                            </li>
                            <li className={styles.linkStyle}>
                                <Link href='/equine-therapy/#philosophy'
                                    onClick={hideEquineTherapyDropdown}
                                >Philosophy</Link>
                            </li>
                            <li className={styles.linkStyle}>
                                <Link href='/equine-therapy/#services-and-fees'
                                    onClick={hideEquineTherapyDropdown}
                                >Services & Fees</Link>
                            </li>
                            <li className={styles.linkStyle}>
                                <Link href='/equine-therapy/#good-faith-estimate'
                                    onClick={hideEquineTherapyDropdown}
                                >Good Faith Estimate</Link>
                            </li>
                            <li className={styles.linkStyle}>
                                <Link href='/equine-therapy/#FAQ'
                                    onClick={hideEquineTherapyDropdown}
                                >FAQ</Link>
                            </li>
                        </ul>
                    )}
                </div>
                {/* <li className={styles.linkStyle} onClick={dropdownToggleEquine}>
                                    <div className="flex justify-center items-center">
                                        <Image
                                            height={25}
                                            width={25}
                                            src={'/img/closeButton.svg'}
                                            alt="close icon"
                                        />
                                        <p className="copyright">&nbsp;close</p>
                                    </div>
                                </li> */}



                <Link className={`${styles.mainLink} text-white`} href='/contact'>Contact</Link>
            </nav>
        </header>
    )
}