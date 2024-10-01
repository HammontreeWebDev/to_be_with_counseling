'use client';
import styles from '@/app/css/counseling.module.css';
import ShaderBackground from "@/app/ui/about/ShaderBackground";
import Image from "next/image";

export default function about() {
    return (
        <main>
            <section className={`${styles.titleContainer}`}>

                {/* //* Background Image */}
                <Image
                    src={'/img/counselingTitleImage.png'}
                    height={1920}
                    width={1603}
                    alt='house on a hill'
                    className={`${styles.titleImage}`}
                />

                <h1 className={`${styles.titleSlogan} script-titles text-center`}>
                Restoring your relationship with food leads you to restoring your relationship with yourself
                </h1>
            </section>
        </main>
    )
}