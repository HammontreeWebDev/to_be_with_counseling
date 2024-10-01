'use client';
import styles from '@/app/css/counseling.module.css';
// import ShaderBackground from "@/app/ui/about/ShaderBackground";

export default function about() {
    return (
        <main>
            <section className={`${styles.titleContainer}`}>
                    <h1 className={`${styles.titleSlogan} script-titles text-center`}>
                        Restoring your relationship with food leads you to restoring your relationship with yourself
                    </h1>
            </section>
            
            <section className={`${styles.philosophyContainer}`}>
                <div className={`${styles.philosophyColumn}`}>
                    <h2 className={`big-ovo-header text-center text-med-brown`}>Philosophy</h2>
                </div>
            </section>
        </main>
    )
}