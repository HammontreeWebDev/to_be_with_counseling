'use client';
import styles from '@/app/css/equine-therapy.module.css';
import Image from 'next/image';
import Link from 'next/link';
import FAQ from '@/app/ui/common/FAQ';

export default function equineTherapy() {
    return (
        <main>
            <section className={`${styles.titleContainer}`}>
                <h1 className={`${styles.titleSlogan} adjusted-script-titles text-center`}>
                    Horses are non-judgmental and unbiased creatures that provide feedback, reflect emotional states, and inspire metaphors that encourage one on the road toward evident transformation and lasting change.
                </h1>
            </section>

            <section className={`${styles.philosophyContainer}`}>
                <div className={`${styles.philosophyColumn}`}>
                    <h2 id='philosophy' className={`big-ovo-header text-center text-med-brown ${styles.title}`}>Philosophy</h2>

                    <p className='big-body-text text-forest-green'>Equine Therapy is a proven method of treatment due to the interactions that occur between horse and client. As the horse mirrors the intricacies of the inner world of the client, the client develops a deeper understanding of themselves as a new ability of self-awareness forms, ground themselves with the support of the calming nature of a horse, and become more embodied as the comfort of being present in one&apos;s body evolves.</p>

                    <p className='big-body-text text-forest-green'>Nature-Based Therapy, with and without the use of horses, provides benefits to mental health therapy that are often difficult to find within the typical counseling room. For children and adolescents, this type of setting often allows them to be more at ease and invoke a type of natural play that supports the processing that occurs within mental health therapy.</p>

                    <p className='big-body-text text-forest-green'>Common areas and mental health issues that are positively addressed through equine and nature-based therapy are eating disorders, trauma, anxiety, depression, autism, relationship difficulties including social anxiety, low self-esteem and self-confidence.</p>

                    <p className='big-body-text text-forest-green'>Whether you are interested in individual counseling with periodic sessions of equine and nature-based therapy or you would prefer for equine therapy to be a prominent focus in your counseling journey, we will tailor each nature-based session to your unique needs. While we typically provide equine and nature-based therapy to children and adolescents, individuals of all ages, including adults, can derive benefits through the use of these therapies.</p>
                </div>
            </section>

            <div className={styles.backgroundWrapper}>
                <section className={`${styles.servicesContainer} ${styles.transBg}`}>
                    <h2 id='services-and-fees' className={`big-ovo-header text-center text-med-brown ${styles.title}`} >Services & Fees</h2>

                    <div className={`${styles.servicesRow}`}>
                        <Image
                            src={'/img/equine-services.png'}
                            height={1040}
                            width={880}
                            layout="responsive"
                            alt='woman hugging a horse'
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

            {/* //! FAQ Section */}
            <section id='FAQ' className={`${styles.backgroundWrapper}`}>
                {/* Place FAQ Component Below */}
                <div className={styles.transBg}>
                    <FAQ
                        faqList={
                            [
                                {
                                    id: 1,
                                    question: "What is Equine Therapy?",
                                    answer:
                                        "Equine Therapy is a type of mental health therapy that utilizes horses to promote and engage one’s whole body within the healing process. Horses are authentic creatures who will attune to the client and always respond honestly to them.",
                                },
                                {
                                    id: 2,
                                    question: "Do I need to know how to ride a horse?",
                                    answer:
                                        "No, you do not need to have any experience with horses to participate in Equine Therapy.",
                                },
                                {
                                    id: 3,
                                    question: "How is it different than therapy in an office?",
                                    answer:
                                        "Equine Therapy is different from therapy in an office as there is a unique experiential component that can be difficult to duplicate in an office setting. This experiential component aids the client in engaging with themselves in a more natural way through the companionship of a horse.",
                                },
                                {
                                    id: 4,
                                    question: "What do you do in Equine Therapy?",
                                    answer:
                                        "Each session is tailored to the specific needs of the client. Some things you may do are walk, groom, and spend quality time with the horse and Therapist.",
                                },
                                {
                                    id: 5,
                                    question: "Do I have to pay more for Equine Therapy?",
                                    answer:
                                        "No, the price for Equine Therapy is similar to the price of a therapy session in an office. This is subject to change in the future.",
                                },
                                {
                                    id: 6,
                                    question: "What should I wear?",
                                    answer:
                                        "It is recommended to wear close toed shoes and clothing you are comfortable in.",
                                },
                                {
                                    id: 7,
                                    question: "Can I bring treats for the horses?",
                                    answer:
                                        "No, please do not bring treats for the horses. At times, I will supply treats that are safe for the horses to eat. ",
                                },
                                {
                                    id: 8,
                                    question: "What is confidentiality like on a farm?",
                                    answer:
                                        "Your confidentiality is of the upmost importance. We do have precautions and protocols in place to ensure a quiet and protected therapy session. Since the farm is an open area, your confidentiality cannot be guaranteed as you may be viewed from the road or surrounding areas.",
                                },
                            ]
                        }
                    />
                </div>
            </section>
        </main>
    )
}