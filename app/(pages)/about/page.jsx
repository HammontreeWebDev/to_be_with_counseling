'use client';
import Clouds from "@/app/ui/about/Clouds";
import styles from '@/app/css/about.module.css';

export default function about() {
    return (
        <main>
            <div className={`${styles.cloudsContainer}`}>
                <h1 className={`script-titles ${styles.cloudsTitle}`}>To Be With</h1>
                <Clouds />
            </div>
        </main>
    )
}