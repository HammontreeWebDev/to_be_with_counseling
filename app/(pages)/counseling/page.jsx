'use client';
import styles from '@/app/css/counseling.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Resources from '@/app/ui/common/Resources';

export default function counseling() {
    return (
        <main>
            <section className={`${styles.titleContainer}`}>
                <h1 className={`${styles.titleSlogan} script-titles text-center`}>
                    Restoring your relationship with food leads you to restoring your relationship with yourself
                </h1>
            </section>

            <section className={`${styles.philosophyContainer}`}>
                <div className={`${styles.philosophyColumn}`}>
                    <h2 id='philosophy' className={`big-ovo-header text-center text-med-brown ${styles.title}`}>Philosophy</h2>

                    <p className='big-body-text text-forest-green'>Do you struggle with eating behaviors, body shame, or trauma that affects your ability to live the life you want to live? Do you feel overwhelmed, frustrated, or confused by your relationship with food and your life story that has contributed to this relationship? Perhaps you wonder if you could ever have a relationship with food, your body, or yourself that feels freeing and whole, instead of one that leaves you feeling trapped and empty? Now more than ever, people of all genders, ages, and ethnicities are experiencing the effects of eating disorders, body shame, and trauma. </p>

                    <p className='big-body-text text-forest-green'>We believe full recovery from an eating disorder is possible. There is hope for long-lasting freedom as one uncovers the root issues that have contributed to the development of a broken relationship with food, your body, and ultimately yourself.</p>

                    <p className='big-body-text text-forest-green'>At To Be With Counseling we offer mental health therapy for children, adolescents, and adults. We start with uncovering the experiences in your story that have impacted you and broken your natural and intuitive relationship with yourself. We help you by processing this story and discovering the meaning you have created from this brokenness. We offer integrative treatment approaches, exposures, and a safe inclusive environment that allows struggle so that you can begin to take the necessary steps it takes to heal your relationship with food, your body, and yourself.</p>

                    <p className='big-body-text text-forest-green'>Eating disorders, body shame, and trauma therapy is our passion. This road may seem treacherous right now, but you are not alone. We practice from the belief that each person is unique and therefore requires a unique approach. We are committed to providing that space for you. Leaving diet culture at the door and inviting in the beliefs that all foods can fit, your body is good and wise, and you can be healthy at any size.</p>
                </div>
            </section>

            <div className={styles.backgroundWrapper}>
                <section className={`${styles.servicesContainer}`}>
                    <h2 id='services-and-fees' className={`big-ovo-header text-center text-med-brown ${styles.title}`} >Services & Fees</h2>

                    <div className={`${styles.servicesRow}`}>
                        <Image
                            src={'/img/services.png'}
                            height={1040}
                            width={880}
                            alt='women in chairs'
                        />

                        <div className={`${styles.servicesColumn}`}>
                            <p className='big-body-text text-forest-green'>$120/up to 50 min session </p>

                            <p className='big-body-text text-forest-green'>We do not accept insurance; however, we can provide you with a bill that you can submit to your insurance for possible reimbursement. It is up to you to contact your insurance and ask about out-of-network benefits for mental health coverage. Many clients have been able to receive partial reimbursement from their insurance company. </p>
                        </div>
                    </div>
                </section>

                <section className={`${styles.disclaimerContainer}`}>
                    <p className={`${styles.disclaimerText} big-body-text text-center text-forest-green`}>There are sliding scale options for those who are eligible. You may apply if you believe you may qualify. </p>

                    <Link href={'/contact'} className={`customButton sub-ovo-header`}>Contact</Link>

                    <p className={`${styles.smallDisclaimer} sub-ovo-header text-forest-green text-center`}>Please be advised, to respect both the provider and the clients on the waitlist, we uphold a 24-hour cancellation policy. If the appointment is not cancelled within 24-hours, the full fee will be charged.</p>
                </section>
            </div>

            <section className={`${styles.goodFaithContainer}`}>

                <h2 id='good-faith-estimate' className={`big-ovo-header text-center text-med-brown ${styles.title}`} >Good Faith Estimate</h2>

                <p className={`${styles.goodFaithText} big-body-text text-center text-forest-green`}>You have the right to receive a “Good Faith Estimate” explaining how much your medical and mental health care will cost.</p>

                <p className={`${styles.goodFaithText} big-body-text text-center text-forest-green`}>Under the law, health care providers need to give patients who don&apos;t have insurance or who are not using insurance an estimate of the expected charges for medical services, including psychotherapy services.</p>

                <p className={`${styles.goodFaithText} big-body-text text-center text-forest-green`}>You have the right to receive a Good Faith Estimate for the total expected cost of any non-emergency healthcare services, including psychotherapy services.</p>

                <p className={`${styles.goodFaithText} big-body-text text-center text-forest-green`}>You can ask your health care provider, and any other provider you choose, for a Good Faith Estimate before you schedule a service.</p>

                <p className={`${styles.goodFaithText} big-body-text text-center text-forest-green`}>If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill. Make sure to save a copy or picture of your Good Faith Estimate.</p>

                <p className={`${styles.goodFaithText} big-body-text text-center text-forest-green`}>For questions or more information about your right to a Good Faith Estimate, visit <span className={`text-link`}>
                    <Link href={'https://www.cms.gov/nosurprises'}>www.cms.gov/nosurprises</Link>
                </span>.</p>

            </section>
            {/* //! Resources */}
            <section className={`${styles.backgroundWrapper}`}>

                <h2 id='resources' className={`big-ovo-header text-center text-med-brown ${styles.title}`} >Resources</h2>

                {/* //! Eating Disorders */}
                <Resources
                    title="Eating Disorders"
                    productList={
                        [
                            {
                                id: 1,
                                name: 'Embodiment and Eating Disorders',
                                author: 'Hillary McBride',
                                href: 'https://amzn.to/48FjbqG',
                                imageSrc: '/img/embodiement.jpg',
                                imageAlt: 'Book - Embodiment and Eating Disorders',
                            },
                            {
                                id: 2,
                                name: 'Sick Enough: A Guide to the Medical Complications of Eating Disorders',
                                author: 'Jennifer Gaudiani',
                                href: 'https://amzn.to/3YW0zPX',
                                imageSrc: '/img/sickEnough.jpg',
                                imageAlt: 'Book - Sick Enough: A Guide to the Medical Complications of Eating Disorders',
                            },
                            {
                                id: 3,
                                name: 'Life Without Ed',
                                author: 'Jenni Schaefer',
                                href: 'https://amzn.to/4fHiyiV',
                                imageSrc: '/img/lifeWithout.jpg',
                                imageAlt: 'Book - Life Without Ed',
                            },
                            {
                                id: 4,
                                name: 'Goodbye Ed, Hello Me',
                                author: 'Jenni Schaefer',
                                href: 'https://amzn.to/4focts0',
                                imageSrc: '/img/goodbyeEd.jpg',
                                imageAlt: 'Book - Goodbye Ed, Hello Me',
                            },
                            {
                                id: 5,
                                name: '8 Keys To Recovery Workbook',
                                author: 'Carolyn Costin',
                                href: 'https://amzn.to/3CjnP1H',
                                imageSrc: '/img/8Keys.jpg',
                                imageAlt: 'Book - 8 Keys To Recovery Workbook',
                            },
                            {
                                id: 6,
                                name: 'Intuitive Eating Book 4th Edition',
                                author: 'Evelyn Tribole and Elyse Resch',
                                href: 'https://amzn.to/4emrPfb',
                                imageSrc: '/img/4thEd.jpg',
                                imageAlt: 'Book - Intuitive Eating Book 4th Edition',
                            },
                            {
                                id: 7,
                                name: 'Intuitive Eating Workbook',
                                author: 'Evelyn Tribole and Elyse Resch',
                                href: 'https://amzn.to/3AKDWES',
                                imageSrc: '/img/workbook.jpg',
                                imageAlt: 'Book - Intuitive Eating Workbook',
                            },
                            {
                                id: 8,
                                name: 'Intuitive Eating Workbook for Teens',
                                author: 'Elyse Resch',
                                href: 'https://amzn.to/4hGGu7D',
                                imageSrc: '/img/teens.jpg',
                                imageAlt: 'Book - Intuitive Eating Workbook for Teens',
                            }
                        ]
                    }
                />

                {/* //! Body Image */}

                <Resources
                    title="Body Image"
                    productList={
                        [
                            {
                                id: 1,
                                name: 'Mothers, Daughters, and Body Image',
                                author: 'Hillary McBride',
                                href: 'https://amzn.to/4fEtXjy',
                                imageSrc: '/img/mothers.jpg',
                                imageAlt: 'Book - Mothers, Daughters, and Body Image',
                            },
                            {
                                id: 2,
                                name: 'Soul-Deep Beauty: Fighting for Our True Worth in a World Demanding Flawless',
                                author: 'Melissa Johnson',
                                href: 'https://amzn.to/3YEOxJt',
                                imageSrc: '/img/soul.jpg',
                                imageAlt: 'Book - Soul-Deep Beauty: Fighting for Our True Worth in a World Demanding Flawless',
                            },
                            {
                                id: 3,
                                name: 'Body Image Inside Out',
                                author: 'Deb Schachter & Whitney Otto',
                                href: 'https://amzn.to/3AzpO1i',
                                imageSrc: '/img/body.jpg',
                                imageAlt: 'Book - Body Image Inside Out',
                            },
                        ]
                    }
                />

                {/* //! Embodiment */}

                <Resources
                    title="Embodiment"
                    productList={
                        [
                            {
                                id: 1,
                                name: 'The Wisdom of Your Body',
                                author: 'Hillary McBride',
                                href: 'https://amzn.to/3UDo5P9',
                                imageSrc: '/img/wisdom.jpg',
                                imageAlt: 'Book - The Wisdom of Your Body',
                            },
                            {
                                id: 2,
                                name: 'Practices For Embodied Living',
                                author: 'Hillary McBride',
                                href: 'https://amzn.to/3YEXzGv',
                                imageSrc: '/img/practices.jpg',
                                imageAlt: 'Book - Practices For Embodied Living',
                            },
                        ]
                    }
                />

                {/* //! Trauma */}

                <Resources
                    title="Trauma"
                    productList={
                        [
                            {
                                id: 1,
                                name: 'The Body Keeps The Score: Brain, Mind, and Body in the Healing of Trauma',
                                author: 'Bessel VanDerKolk',
                                href: 'https://amzn.to/40DEMxT',
                                imageSrc: '/img/score.jpg',
                                imageAlt: 'Book - The Body Keeps The Score: Brain, Mind, and Body in the Healing of Trauma',
                            },
                            {
                                id: 2,
                                name: 'No Bad Parts',
                                author: 'Richard Schwartz',
                                href: 'https://amzn.to/3O211WE',
                                imageSrc: '/img/badParts.jpg',
                                imageAlt: 'Book - No Bad Parts',
                            },
                            {
                                id: 3,
                                name: 'The Best of You',
                                author: 'Alison Cook',
                                href: 'https://amzn.to/3AA19K8',
                                imageSrc: '/img/bestOfYou.jpg',
                                imageAlt: 'Book - The Best of You',
                            },
                            {
                                id: 4,
                                name: 'What My Bones Know',
                                author: 'Stephanie Foo',
                                href: 'https://amzn.to/3YWq1VF',
                                imageSrc: '/img/bones.jpg',
                                imageAlt: 'Book - What My Bones Know',
                            },
                            {
                                id: 5,
                                name: 'The Primal Wound',
                                author: 'Nancy Newton Verrier',
                                href: 'https://amzn.to/4fB7eVq',
                                imageSrc: '/img/primal.jpg',
                                imageAlt: 'Book - The Primal Wound',
                            },
                            {
                                id: 6,
                                name: 'To Be Told',
                                author: 'Dan Allender',
                                href: 'https://amzn.to/4hEtv6q',
                                imageSrc: '/img/told.jpg',
                                imageAlt: 'Book - To Be Told',
                            },
                            {
                                id: 7,
                                name: 'The Healing Path',
                                author: 'Dan Allender',
                                href: 'https://amzn.to/3CfWPQK',
                                imageSrc: '/img/healing.jpg',
                                imageAlt: 'Book - The Healing Path',
                            },
                        ]
                    }
                />

                {/* //! Relationships */}

                <Resources
                    title="Relationships"
                    productList={
                        [
                            {
                                id: 1,
                                name: 'Boundaries',
                                author: 'Henry Cloud and John Townsend',
                                href: 'https://amzn.to/3Ck0jBG',
                                imageSrc: '/img/boundaries.jpg',
                                imageAlt: 'Book - Boundaries',
                            },
                            {
                                id: 2,
                                name: 'Safe People',
                                author: 'Henry Cloud and John Townsend',
                                href: 'https://amzn.to/4fDw0Ef',
                                imageSrc: '/img/safe.jpg',
                                imageAlt: 'Book - Safe People',
                            },
                            {
                                id: 3,
                                name: 'Attached',
                                author: 'Amir Levine and Rachel Heller',
                                href: 'https://amzn.to/40zrKl5',
                                imageSrc: '/img/attached.jpg',
                                imageAlt: 'Book - Attached',
                            },
                            {
                                id: 4,
                                name: 'Securely Attached',
                                author: 'Eli Harwood',
                                href: 'https://amzn.to/4hFljTp',
                                imageSrc: '/img/securely.jpg',
                                imageAlt: 'Book - Securely Attached',
                            },
                        ]
                    }
                />
                {/* //! Children's Books */}

                <Resources
                    title="Children's Books"
                    productList={
                        [
                            {
                                id: 1,
                                name: 'Fat and Beautiful',
                                author: 'Debbie Saroufim',
                                href: 'https://amzn.to/4epcLgC',
                                imageSrc: '/img/fat.jpg',
                                imageAlt: 'Book - Fat and Beautiful',
                            },
                            {
                                id: 2,
                                name: 'Bodies Are Cool',
                                author: 'Tyler Feder',
                                href: 'https://amzn.to/40F5PZz',
                                imageSrc: '/img/bodies.jpg',
                                imageAlt: 'Book - Bodies Are Cool',
                            },
                            {
                                id: 3,
                                name: 'The Reflection In Me',
                                author: 'Marc Colagiovanni',
                                href: 'https://amzn.to/4emeF1B',
                                imageSrc: '/img/reflection.jpg',
                                imageAlt: 'Book - The Reflection In Me',
                            },
                            {
                                id: 4,
                                name: 'The Rabbit Listened',
                                author: 'Cori Doerrfeld',
                                href: 'https://amzn.to/4esqx21',
                                imageSrc: '/img/rabbit.jpg',
                                imageAlt: 'Book - The Rabbit Listened',
                            },
                            {
                                id: 5,
                                name: 'Trying',
                                author: 'Kobi Yamada',
                                href: 'https://amzn.to/48Fl6eS',
                                imageSrc: '/img/trying.jpg',
                                imageAlt: 'Book - Trying',
                            },
                        ]
                    }
                />

            </section>
        </main>
    )
}