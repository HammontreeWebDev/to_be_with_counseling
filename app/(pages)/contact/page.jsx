'use client';
import styles from '@/app/css/contact.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function contact() {

    const [copied, setCopied] = useState(false);

    const handleEmailClick = (e) => {
        // Try opening the mailto link
        const emailLink = 'mailto:Karah.Hammontree@gmail.com';
        const hasEmailClient = !!window.navigator && window.navigator.msLaunchUri;

        if (!hasEmailClient) {
            // If there's no email client, prevent the default action and copy email instead
            e.preventDefault();
            copyEmailToClipboard();
        }
    };

    const copyEmailToClipboard = () => {
        const email = 'Karah.Hammontree@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            alert('It appears that you do not have a default email service set up on your device so we have copied the email address to your clipboard!');
        }, () => {
            alert('Sorry, something went wrong! Error: Failed to copy email address to clipboard!');
        });
    };

    return (
        <main>
            <section className={`${styles.titleContainer}`}>
                <h1 className={`${styles.titleSlogan} script-titles text-center`}>
                    Because you are worth it and deserve to live a life of freedom
                </h1>
            </section>

            <section className={`${styles.contactContainer}`}>
                <div className={`${styles.contactColumn}`}>
                    <p className={`big-body-text text-forest-green text-center`}>To set up an appointment, you can reach us via the ways listed below:</p>

                    <div className={`${styles.contactRow}`}>

                        <Image
                            src={'/img/phoneIcon.svg'}
                            height={50}
                            width={50}
                            alt='phone icon' />

                        <p className={`big-body-text text-forest-green text-center ${styles.mobileColumn}`}><span className={`font-bold`}>Call or Text:</span> (321) 201-1445</p>
                    </div>

                    <div className={`${styles.contactRow}`}>

                        <Image
                            src={'/img/emailIcon.svg'}
                            height={50}
                            width={50}
                            alt='email icon' />

                        <p className={`big-body-text text-forest-green text-center ${styles.mobileColumn}`}><span className={`font-bold`}>Email:</span> Karah.Hammontree@gmail.com</p>
                    </div>

                    <a
                        className={`customButton sub-ovo-header`}
                        href='mailto:Karah.Hammontree@gmail.com'
                        onClick={handleEmailClick}
                    >
                        Email Us
                    </a>
                </div>
            </section>
        </main>
    )
}