'use client';
import Clouds from "@/app/ui/about/Clouds";
import styles from '@/app/css/about.module.css';
import ShaderBackground from "@/app/ui/about/ShaderBackground";
import Image from "next/image";

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

            <section className={`${styles.aboutContainer}`}>
                {/* //! Background */}
                <Image
                    src={'/img/contentBackground.svg'}
                    width={1720}
                    height={1470}
                    alt="background texture"
                    className={`${styles.backgroundTexture}`}
                />

                {/* //!Title Row */}
                <div className={`${styles.titleRow}`}>
                    <h1 className={`script-titles`}>Freedom</h1>
                    <div className={`${styles.bulletContainer}`}>
                        <Image
                            className={`${styles.bullet}`}
                            src={'/img/Diamond.svg'}
                            height={25.578}
                            width={20}
                            alt="diamond"
                        />
                    </div>
                    <h1 className={`script-titles`}>Transformation</h1>
                    <div className={`${styles.bulletContainer}`}>
                        <Image
                            className={`${styles.bullet}`}
                            src={'/img/Diamond.svg'}
                            height={25.578}
                            width={20}
                            alt="diamond"
                        />
                    </div>
                    <h1 className={`script-titles`}>Healing</h1>
                </div>

                {/* //!Content Row */}
                <div className={`${styles.contentRow}`}>
                    <Image
                        src={'/img/about-avatar.png'}
                        height={720}
                        width={720}
                        alt="Karah Hammontree"
                    />
                    <div className={styles.miniColumn}>
                        <h2 className={`big-ovo-header text-forest-green text-center`}>
                            Karah Hammontree
                        </h2>
                        <h2 className={`big-ovo-header text-forest-green text-center`}>
                            MA, RMHCI
                        </h2>
                    </div>
                </div>

                {/* //!Content Column */}

                <div className={`${styles.contentColumn}`}>
                    <p className={`big-body-text text-forest-green`}>
                        Karah is a Registered Mental Health Counselor Intern in the State of Florida who is passionate about walking alongside her clients in their search for long-lasting freedom from eating disorders, body image issues, and body shame. In assisting her clients uncover the root issues that have contributed to the development of an unhealthy relationship with food and body, she has witnessed the unequivocal transformation that occurs when one is able to come back home to themselves, utilizing compassion, kindness, and curiosity, in this needed restoration process.
                    </p>

                    <p className={`big-body-text text-forest-green`}>
                        Karah enjoys working with children, adolescents, young adults, and families within individual and group counseling. Along with eating disorders, body image issues, and body shame, Karah has experience working with individuals struggling with abuse, trauma, anxiety, depression, relationship difficulties, spirituality issues, and self-esteem issues. She utilizes a variety of evidence-based treatment approaches grounded in a foundation of attachment, as she believes when one is hurt in relationship, then healing must also take place in relationship.
                    </p>

                    <p className={`big-body-text text-forest-green`}>
                        Some of these theories include Embodiment, Internal Family Systems, Narrative Therapy, Dialectical Behavior Therapy, Acceptance Commitment Therapy, and Psychodynamic. While Karah is trained within these modalities, she also believes each individual is unique and therefore needs individualized treatment. She does this by meeting the client where they are, following the clients lead, and wisely providing direction when necessary.
                    </p>

                    <p className={`big-body-text text-forest-green`}>
                        Karah acknowledges that it can be difficult and uncomfortable for children and adolescents to sit and talk to someone about difficult topics. Therefore, she often utilizes a nature-based environment to intertwine the child’s natural desire to play with the needed mental support. Since this nature-based environment does take place on a therapy farm, the utilization of the farm animals often occurs, alongside play therapy, art therapy, equine-facilitated psychotherapy, and nature-based therapy.
                    </p>

                </div>
            </section>
        </main>
    )
}