export default function FAQ({ faqList }) {

    const faqs = faqList;
    return (
        <div>
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                <h2 className="big-ovo-header text-center text-med-brown">Frequently Asked Questions</h2>
                <p className="mt-6 body-text text-[var(--forest-green)] text-center">
                    Have a different question?{' '}
                    <a href="/contact" className="font-semibold text-[var(--teal)] hover:text-[var(--sage-green)]">
                        Contact us
                    </a>{' '}
                    and we’ll get back to you as soon as we can!
                </p>
                <div className="mt-20">
                    <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
                        {faqs.map((faq) => (
                            <div key={faq.id}>
                                <dt className="text-base/7 font-semibold sub-ovo-header text-[var(--medium-brown)]">{faq.question}</dt>
                                <dd className="mt-2 text-base/7 body-text text-[var(--forest-green)]">{faq.answer}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
