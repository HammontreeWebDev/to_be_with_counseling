'use client';
import Clouds from "@/app/ui/about/Clouds";
import styles from '@/app/css/about.module.css';
import ShaderBackground from "@/app/ui/about/ShaderBackground";

export default function about() {
    return (
        <main>
            <section className={`${styles.cloudsContainer}`}>
                <h1 className={`script-titles ${styles.cloudsTitle}`}>To Be With</h1>
                <Clouds />
            </section>

            <section className={`${styles.withContainer}`}>
                <ShaderBackground />
                <div className={`${styles.aboutRow}`}>
                    <div className={`${styles.aboutColumn} big-body-text text-forest-green text-center`}>
                        The word “with” is one that breaks the barrier of isolation and aloneness, restoring togetherness and relationship. To be known one must be in an authentic and vulnerable relationship where they risk being seen, heard, and wanted as they are. A risk that is frightening and will bring unrestrained healing and transformation as one bravely enters their story of hurt, pain, and heartache. The mission of To Be With Counseling is to provide that space, where restoration, healing, and transformation within relationship can occur. It is not an easy road to travel, and it is worth it.
                    </div>
                </div>
            </section>
        </main>
    )
}