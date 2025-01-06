'use client'
import Link from "next/link";
import styles from "../../../css/navBar.module.css";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function CommonNavBar() {

    // State to track screen size
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    // Detect screen size
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1024);
        };

        // Initialize on mount
        handleResize();

        // Listen for resize events
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
        <header className={styles.headerContainer}
        // onClick={() => {hideCounselingDropdown(); hideEquineTherapyDropdown()}}
        onMouseLeave={() => {hideCounselingDropdown(); hideEquineTherapyDropdown()}}
        >

            <div className={`${styles.commonTitleContainer}`}>

                <Image
                    src='/img/commonNavLogo.png'
                    height={138}
                    width={138}
                    alt="To be with counseling logo"
                />
                <Link className={`nav-header text-sage-green ${styles.textContainer}`} href={'/'}>
                    <p className={styles.toBeWith}> To Be With </p>
                    <p className={`big-script-header`}>
                        &nbsp;Counseling
                    </p>
                </Link>
            </div>

            <nav className={`${styles.navBar} normal-ovo-header`}>
                <Link className={`${styles.mainLink} text-white`} 
                href='/about'
                onMouseEnter={() => {hideEquineTherapyDropdown(); hideCounselingDropdown()}}
                >About</Link>

                {/* Counseling Dropdown Trigger and Area */}
                <div
                    className={styles.dropdownWrapper}
                    onMouseEnter={() => {hideEquineTherapyDropdown(); showCounselingDropdown()}}
                >
                    <p className={`${styles.fakeLink} text-white`}
                        onClick={showCounselingDropdown}
                    >Counseling</p>

                    {isCounselingDropdownVisible && (
                        <ul
                            className={`${styles.toggleDropdown} sub-ovo-header animate__animated animate__fadeInDown`}
                            onMouseEnter={showCounselingDropdown}
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

                            {/* Conditional "Close" Button */}
                            {isSmallScreen && (
                                <li className={styles.linkStyle} onClick={hideCounselingDropdown}>
                                    <div className="flex justify-center items-center">
                                        <Image
                                            height={25}
                                            width={25}
                                            src={'/img/closeButton.svg'}
                                            alt="close icon"
                                        />
                                        <p className="copyright">&nbsp;close</p>
                                    </div>
                                </li>
                            )}

                        </ul>
                    )}
                </div>

                {/* Equine Therapy Dropdown Trigger and Area */}
                <div
                    className={styles.dropdownWrapper}
                    onMouseEnter={() => {hideCounselingDropdown(); showEquineTherapyDropdown()}}
                >
                    <p className={`${styles.fakeLink} text-white`}
                        onClick={showEquineTherapyDropdown}
                    >Equine Therapy</p>

                    {isEquineTherapyDropdownVisible && (
                        <ul
                            className={`${styles.toggleDropdown} sub-ovo-header animate__animated animate__fadeInDown`}
                            onMouseEnter={showEquineTherapyDropdown}
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

                            {/* Conditional "Close" Button */}
                            {isSmallScreen && (
                                <li className={styles.linkStyle} onClick={hideEquineTherapyDropdown}>
                                    <div className="flex justify-center items-center">
                                        <Image
                                            height={25}
                                            width={25}
                                            src={'/img/closeButton.svg'}
                                            alt="close icon"
                                        />
                                        <p className="copyright">&nbsp;close</p>
                                    </div>
                                </li>
                            )}

                        </ul>
                    )}
                </div>
             
                <Link className={`${styles.mainLink} text-white`} 
                href='/contact'
                onMouseEnter={() => {hideEquineTherapyDropdown(); hideCounselingDropdown()}}
                >Contact</Link>
            </nav>
        </header>
    )
}