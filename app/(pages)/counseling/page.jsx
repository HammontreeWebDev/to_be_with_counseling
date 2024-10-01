'use client';
import styles from '@/app/css/counseling.module.css';
import Image from 'next/image';

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

                    <p className='big-body-text text-forest-green'>Do you struggle with eating behaviors, body shame, or trauma that affects your ability to live the life you want to live? Do you feel overwhelmed, frustrated, or confused by your relationship with food and your life story that has contributed to this relationship? Perhaps you wonder if you could ever have a relationship with food, your body, or yourself that feels freeing and whole, instead of one that leaves you feeling trapped and empty? Now more than ever, people of all genders, ages, and ethnicities are experiencing the effects of eating disorders, body shame, and trauma. </p>

                    <p className='big-body-text text-forest-green'>We believe full recovery from an eating disorder is possible. There is hope for long-lasting freedom as one uncovers the root issues that have contributed to the development of a broken relationship with food, your body, and ultimately yourself.</p>

                    <p className='big-body-text text-forest-green'>At To Be With Counseling we offer mental health therapy for children, adolescents, and adults. We start with uncovering the experiences in your story that have impacted you and broken your natural and intuitive relationship with yourself. We help you by processing this story and discovering the meaning you have created from this brokenness. We offer integrative treatment approaches, exposures, and a safe inclusive environment that allows struggle so that you can begin to take the necessary steps it takes to heal your relationship with food, your body, and yourself.</p>

                    <p className='big-body-text text-forest-green'>Eating disorders, body shame, and trauma therapy is our passion. This road may seem treacherous right now, but you are not alone. We practice from the belief that each person is unique and therefore requires a unique approach. We are committed to providing that space for you. Leaving diet culture at the door and inviting in the beliefs that all foods can fit, your body is good and wise, and you can be healthy at any size.</p>
                </div>
            </section>

            <section className={`${styles.servicesContainer}`}>
                <h2 className={`big-ovo-header text-center text-med-brown`} >Services & Fees</h2>

                <div className={`${styles.servicesRow}`}>
                    <Image
                        src={'/img/services.png'}
                        height={1040}
                        width={880}
                        alt='women in chairs'
                    />

                    <div className={`${styles.servicesColumn}`}>
                        <p className='big-body-text text-right text-forest-green'>$120/up to 50 min session </p>

                        <p className='big-body-text text-right text-forest-green'>We do not accept insurance; however, we can provide you with a bill that you can submit to your insurance for possible reimbursement. It is up to you to contact your insurance and ask about out-of-network benefits for mental health coverage. Many clients have been able to receive partial reimbursement from their insurance company. </p>
                    </div>
                </div>
            </section>

            <section className={`${styles.disclaimerContainer}`}>
                <p className={`${styles.disclaimerText} big-body-text text-center text-forest-green`}>There are sliding scale options for those who are eligible. You may apply if you believe you may qualify. </p>
            </section>
        </main>
    )
}