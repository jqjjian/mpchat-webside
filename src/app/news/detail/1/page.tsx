'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/card/Footer'

export default function NewsDetailPage() {
    // Article data
    const article = {
        id: 1,
        title: 'Five Innovative B2B Uses of Virtual Cards in 2025',
        date: '2025-08-06',
        content: `
            <div class="flex flex-col gap-2">
            <p>Everyone knows about virtual debit and credit cards. They're everywhere — on our phones, our watches, even our rings. And they aren't slowing down, either. Juniper Research is projecting virtual card transactions to surpass $175 billion by 2028.</p>
            <p>While widely used by consumers, businesses are also adopting them for expenses, one-off payments, and departmental spend. But the full B2B potential of virtual cards extends far beyond this.</p>
            
            <p>Here are five innovative B2B use cases we're watching — and delivering for our customers and partners — in 2025 and beyond:</p>
            
            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Travel Intermediaries: New Products and Services</h2>
            <p>Online travel agencies are using virtual cards for global supplier payments and to create new revenue streams with value-add products at checkout.</p>
            <p>Travel intermediaries have been using virtual cards to streamline global hotel and airline payments for decades. Now, they're expanding their use to offer extra products and services directly within the payment process, boosting revenue and improving the booking experience.</p>
            <p>With fierce competition and little price disparity, this is a great way for travel companies to differentiate themselves. For instance, holidaymakers can pay a fee to "lock in" a price, which is either applied to the booking later or retained if the booking is canceled. This model requires online travel agencies and aggregators to present a single checkout price that includes all services while handling supplier payments worldwide. It's an entirely in-house revenue stream integrated into the payment flow and it's powered by virtual cards.</p>
            
            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Insurance Providers: Introducing Instant Claims</h2>
            <p>Insurance companies are leveraging virtual cards for instant settlement payouts to healthcare providers.</p>
            <p>AXA Global Healthcare recently launched their virtual payment card, enabling members to pay for eligible outpatient treatment without using their funds, needing to submit a claim, or contacting their insurer to pre-authorize their treatment before they pay it.</p>
            <p>A virtual card is generated on the insurance app in the policy holder's Apple Pay or Google Pay wallet that can be used anywhere that accepts contactless Visa payments. Companies like Paysure are integrated into the payment flow and check the claim history and eligibility in real-time. The MPChat issued virtual card then facilitates a direct and instant payment from the insurer to the medical provider, eliminating receipt fraud and avoiding lengthy reimbursement processes for the customer.</p>
            
            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Freight and Logistics: Digitizing Port Payments</h2>
            <p>Global logistics and freight companies are using virtual cards to digitize shipping payments.</p>
            <p>By their very nature, global logistics, freight, and shipping companies must make regular payments to multiple partners and vendors around the world. But this has traditionally involved paper-based invoicing and manual reconciliation.</p>
            <p>Virtual cards are enabling these businesses to go digital. For example, in partnership with DP World, Mastercard is currently introducing virtual cards to eliminate physical invoicing from global shipping payments. This enables instant payments and automated reconciliation for all freight, port, and logistics costs. The platform will expand across Latin America and eventually to DP World's ports worldwide, supporting a global revenue of over $18 billion in virtual payments.</p>
            
            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Digital Marketing: Greater Control on Ad Spending</h2>
            <p>E-commerce businesses and marketing departments are leveraging virtual cards to boost control and transparency of advertising spend.</p>
            <p>As global e-commerce continues to rise, businesses selling goods online are increasingly turning to digital advertising as a way to target their buyers and generate cut-through. In 2023, Meta's US advertising revenue reached almost $132 billion, with millions of businesses running ads on Facebook and Instagram every month.</p>
            <p>Virtual cards are increasingly playing a role here, with innovative fintechs like Franklin realising their potential to solve business' marketing needs. For example, Franklin can link a MPChat-issued virtual card to a specific ad campaign or client on behalf of their customers. The ability to set high and flexible spend limits and expiration dates on each virtual card helps businesses to increase control and oversight over marketing spend.</p>
            
            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Workplace Benefits: Replacing Coupons with Cards</h2>
            <p>Employers are using virtual cards to digitize employee meal vouchers, a popular benefit in continental Europe.</p>
            <p>Employee expenses have long been a key use case for virtual cards, but meal vouchers, a popular benefit in continental Europe, have remained largely analogue. In France, 57% of employers currently give their employees a voucher for every day worked in a month, and often in the form of a physical coupon. In 2024, these meal vouchers had a total value of close to €8.5 billion.</p>
            <p>However, four voucher issuers control 99% of the market, and the French Competition Authority (ADLC) has called for tighter regulation and mandatory digitization. In 2024, 40% of vouchers were still issued as physical coupons. In countries like Italy and Portugal, high processing fees – ranging from 5-20% – make these schemes costly for retailers. Employee issued single-use virtual cards, controlled by merchant category codes, could solve this problem and significantly modernize this $25-$30 billion market opportunity across Europe.</p>
            
            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">The First-Mover Advantage</h2>
            <p>Virtual cards are already impacting multiple industries, but there's still so much more to come. The space remains an open playing field, with the companies that recognize the full B2B potential of virtual cards still able to create a competitive edge, boost efficiency, and drive growth.</p>
            <div>
        `
    }

    return (
        <div className="min-h-screen bg-[#F7F7F2] flex flex-col">
            <Header />
            <div className="pt-24 flex-grow">
                <div className="container mx-auto px-8 py-16 max-w-[1200px]">
                    {/* Back Button */}
                    <div className="mb-8">
                        <Link
                            href="/news"
                            className="inline-flex items-center text-[#06C55B] hover:text-[#05B052] font-semibold transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                            Back to News
                        </Link>
                    </div>

                    {/* Article Content */}
                    <article className="bg-white rounded-3xl overflow-hidden shadow-lg">
                        <div className="p-6 md:p-10">
                            {/* Article Meta */}
                            <div className="text-sm text-gray-500 pb-4">{article.date}</div>

                            {/* Article Title */}
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 pb-6 font-redotpaybold">
                                {article.title}
                            </h1>

                            {/* Article Content */}
                            <div
                                className="prose max-w-none text-gray-700 text-lg"
                                dangerouslySetInnerHTML={{ __html: article.content }}
                            ></div>
                            {/* <div className="flex flex-col gap-4">
                                <p>
                                    {`Everyone knows about virtual debit and credit cards. They're everywhere — on our
                                    phones, our watches, even our rings. And they aren't slowing down, either. Juniper
                                    Research is projecting virtual card transactions to surpass $175 billion by 2028.`}
                                </p>
                                <p>
                                    While widely used by consumers, businesses are also adopting them for expenses,
                                    one-off payments, and departmental spend. But the full B2B potential of virtual
                                    cards extends far beyond this.
                                </p>

                                <p>
                                    {` Here are five innovative B2B use cases we're watching — and delivering for our
                                    customers and partners — in 2025 and beyond:`}
                                </p>

                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                    1. Travel Intermediaries: New Products and Services
                                </h2>
                                <p>
                                    Online travel agencies are using virtual cards for global supplier payments and to
                                    create new revenue streams with value-add products at checkout.
                                </p>
                                <p>
                                    {`Travel intermediaries have been using virtual cards to streamline global hotel and
                                    airline payments for decades. Now, they're expanding their use to offer extra
                                    products and services directly within the payment process, boosting revenue and
                                    improving the booking experience.`}
                                </p>
                                <p>
                                    {`With fierce competition and little price disparity, this is a great way for travel
                                    companies to differentiate themselves. For instance, holidaymakers can pay a fee to
                                    "lock in" a price, which is either applied to the booking later or retained if the
                                    booking is canceled. This model requires online travel agencies and aggregators to
                                    present a single checkout price that includes all services while handling supplier
                                    payments worldwide. It's an entirely in-house revenue stream integrated into the
                                    payment flow and it's powered by virtual cards.`}
                                </p>

                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                    2. Insurance Providers: Introducing Instant Claims
                                </h2>
                                <p>
                                    Insurance companies are leveraging virtual cards for instant settlement payouts to
                                    healthcare providers.
                                </p>
                                <p>
                                    AXA Global Healthcare recently launched their virtual payment card, enabling members
                                    to pay for eligible outpatient treatment without using their funds, needing to
                                    submit a claim, or contacting their insurer to pre-authorize their treatment before
                                    they pay it.
                                </p>
                                <p>
                                    {`A virtual card is generated on the insurance app in the policy holder's Apple Pay or
                                    Google Pay wallet that can be used anywhere that accepts contactless Visa payments.
                                    Companies like Paysure are integrated into the payment flow and check the claim
                                    history and eligibility in real-time. The MPChat issued virtual card then
                                    facilitates a direct and instant payment from the insurer to the medical provider,
                                    eliminating receipt fraud and avoiding lengthy reimbursement processes for the
                                    customer.`}
                                </p>

                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                    3. Freight and Logistics: Digitizing Port Payments
                                </h2>
                                <p>
                                    Global logistics and freight companies are using virtual cards to digitize shipping
                                    payments.
                                </p>
                                <p>
                                    By their very nature, global logistics, freight, and shipping companies must make
                                    regular payments to multiple partners and vendors around the world. But this has
                                    traditionally involved paper-based invoicing and manual reconciliation.
                                </p>
                                <p>
                                    {`Virtual cards are enabling these businesses to go digital. For example, in
                                    partnership with DP World, Mastercard is currently introducing virtual cards to
                                    eliminate physical invoicing from global shipping payments. This enables instant
                                    payments and automated reconciliation for all freight, port, and logistics costs.
                                    The platform will expand across Latin America and eventually to DP World's ports
                                    worldwide, supporting a global revenue of over $18 billion in virtual payments.`}
                                </p>

                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                    4. Digital Marketing: Greater Control on Ad Spending
                                </h2>
                                <p>
                                    E-commerce businesses and marketing departments are leveraging virtual cards to
                                    boost control and transparency of advertising spend.
                                </p>
                                <p>
                                    {`As global e-commerce continues to rise, businesses selling goods online are
                                    increasingly turning to digital advertising as a way to target their buyers and
                                    generate cut-through. In 2023, Meta's US advertising revenue reached almost $132
                                    billion, with millions of businesses running ads on Facebook and Instagram every
                                    month.`}
                                </p>
                                <p>
                                    {`Virtual cards are increasingly playing a role here, with innovative fintechs like
                                    Franklin realising their potential to solve business' marketing needs. For example,
                                    Franklin can link a MPChat-issued virtual card to a specific ad campaign or client
                                    on behalf of their customers. The ability to set high and flexible spend limits and
                                    expiration dates on each virtual card helps businesses to increase control and
                                    oversight over marketing spend.`}
                                </p>

                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                    5. Workplace Benefits: Replacing Coupons with Cards
                                </h2>
                                <p>
                                    Employers are using virtual cards to digitize employee meal vouchers, a popular
                                    benefit in continental Europe.
                                </p>
                                <p>
                                    Employee expenses have long been a key use case for virtual cards, but meal
                                    vouchers, a popular benefit in continental Europe, have remained largely analogue.
                                    In France, 57% of employers currently give their employees a voucher for every day
                                    worked in a month, and often in the form of a physical coupon. In 2024, these meal
                                    vouchers had a total value of close to €8.5 billion.
                                </p>
                                <p>
                                    However, four voucher issuers control 99% of the market, and the French Competition
                                    Authority (ADLC) has called for tighter regulation and mandatory digitization. In
                                    2024, 40% of vouchers were still issued as physical coupons. In countries like Italy
                                    and Portugal, high processing fees – ranging from 5-20% – make these schemes costly
                                    for retailers. Employee issued single-use virtual cards, controlled by merchant
                                    category codes, could solve this problem and significantly modernize this $25-$30
                                    billion market opportunity across Europe.
                                </p>

                                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                    The First-Mover Advantage
                                </h2>
                                <p>
                                    {`Virtual cards are already impacting multiple industries, but there's still so much
                                    more to come. The space remains an open playing field, with the companies that
                                    recognize the full B2B potential of virtual cards still able to create a competitive
                                    edge, boost efficiency, and drive growth.`}
                                </p>
                            </div> */}
                        </div>
                    </article>
                </div>
            </div>
            <Footer />
        </div>
    )
}
