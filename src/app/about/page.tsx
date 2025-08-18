'use client'

// import Image from 'next/image'
// import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/card/Footer'

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#F7F7F2] flex flex-col">
            <Header />
            <div className="pt-24 flex-grow">
                <div className="container mx-auto px-8 py-16 max-w-[1200px]">
                    {/* Header Section */}
                    <section className="text-center mb-16 flex flex-col items-center justify-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 pb-6 font-redotpaybold">
                            About Us
                        </h1>
                    </section>

                    {/* Vision Section */}
                    <section className="bg-white rounded-3xl p-8 md:p-12 mb-16 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 pb-6 font-redotpaybold">Our Vision</h2>
                        <p className="text-gray-600 text-lg">
                            Seamless Chat, Borderless Pay. We are dedicated to building a borderless financial and
                            communications infrastructure for global enterprises.
                        </p>
                    </section>

                    {/* Mission Section */}
                    <section className="bg-white rounded-3xl p-8 md:p-12 mb-16 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 pb-6 font-redotpaybold">Our Mission</h2>
                        <p className="text-gray-600 text-lg">
                            MPChat seamlessly integrates enterprise-grade end-to-end encrypted communication with a
                            powerful smart virtual card payment network to provide global businesses with highly secure,
                            efficient, and controllable financial management and payment solutions.
                        </p>
                    </section>

                    {/* We Provide Integrated Financial Solutions Section */}
                    <section className="bg-white rounded-3xl p-8 md:p-12 mb-16 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 pb-6 font-redotpaybold">
                            We Provide Integrated Financial Solutions for Global Enterprises
                        </h2>
                        <p className="text-gray-600 text-lg pb-6">
                            We are a fintech platform built specifically for the new generation of global enterprises.
                            We precisely identify and solve the core pain points that businesses encounter in
                            cross-border payments, team expense management, marketing ad spend, SaaS subscription
                            management, and internal secure communications. Our clients include:
                        </p>
                        <ul className="text-gray-600 text-lg list-disc pl-6 space-y-2">
                            <li>
                                <strong>E-commerce Businesses:</strong> Managing complex supplier payments and
                                international marketing expenditures.
                            </li>
                            <li>
                                <strong>Marketing Agencies:</strong> Efficiently managing ad budgets across multiple
                                clients and platforms while reducing account risks.
                            </li>
                            <li>
                                <strong>SaaS Companies:</strong> Simplifying global customer billing and corporate tool
                                subscription payments.
                            </li>
                            <li>
                                <strong>Globalized Business Teams:</strong> Centralizing the management of travel and
                                daily expenses for employees worldwide.
                            </li>
                        </ul>
                    </section>

                    {/* Core Services Section */}
                    <section className="bg-white rounded-3xl p-8 md:p-12 mb-16 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 pb-6 font-redotpaybold">
                            Core Services: Smart Virtual Cards & Corporate Expense Management Platform
                        </h2>
                        <p className="text-gray-600 text-lg pb-6">
                            We offer a comprehensive platform that combines secure communication with global payments,
                            centered around our smart virtual card issuance and management system.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 pb-4 font-redotpaybold">
                            How Do Smart Virtual Cards Work?
                        </h3>
                        <p className="text-gray-600 text-lg pb-4">
                            Our platform allows businesses to generate virtual payment cards in real-time and in bulk
                            for their teams or specific purposes. The entire process is clear, efficient, and
                            controllable:
                        </p>
                        <ol className="text-gray-600 text-lg list-decimal pl-6 space-y-3 mb-8">
                            <li>
                                <strong>Instant Issuance:</strong> Administrators can create single or bulk virtual
                                cards with a single click on our platform.
                            </li>
                            <li>
                                <strong>Set Precise Rules:</strong> Independently configure spending limits, valid time
                                periods, and authorized merchant categories (e.g., software subscriptions only, ad
                                platforms only) for each card.
                            </li>
                            <li>
                                <strong>Securely Assign & Use:</strong> Securely assign cards to designated employees or
                                link them to specific ad accounts and subscription services.
                            </li>
                            <li>
                                <strong>Real-time Monitoring & Reporting:</strong> All transactions are displayed in the
                                management dashboard in real-time, automatically generating clear spending reports and
                                eliminating cumbersome reimbursement processes.
                            </li>
                        </ol>

                        <h3 className="text-2xl font-bold text-gray-900 py-4 font-redotpaybold">
                            The Core Advantages Our Virtual Cards Bring to Your Business
                        </h3>
                        <ul className="text-gray-600 text-lg list-disc pl-6 space-y-3">
                            <li>
                                <strong>Ultimate Expense Control:</strong>
                                {`Prevent overspending and misuse from the
                                source by setting independent budgets and rules for every project, employee, or ad
                                campaign. The finance team gains absolute control over the company's cash flow.`}
                            </li>
                            <li>
                                <strong>Enhanced Security & Risk Management:</strong> Each virtual card is independent,
                                effectively isolating risks. If any suspicious activity is detected, the card can be
                                frozen or deleted instantly, leaving the main account funds secure. This significantly
                                reduces the risk of financial loss from compromised card information, especially in
                                high-risk payment scenarios like ad spending.
                            </li>
                            <li>
                                <strong>Streamlined Financial Processes:</strong> Track all expenditures in real-time
                                and automatically collect spending data. Finance personnel no longer need to process
                                stacks of invoices and reimbursement requests, dramatically improving internal
                                operational efficiency and allowing human resources to focus on higher-value work.
                            </li>
                            <li>
                                <strong>Optimized Business Expenditures:</strong> Create dedicated virtual cards in bulk
                                for ad campaigns on platforms like Facebook, Google, and TikTok. This not only
                                simplifies budget tracking but also effectively reduces the risk of account suspension
                                due to payment issues. Effortlessly manage all corporate SaaS subscriptions, such as
                                Adobe and AWS, to avoid service interruptions.
                            </li>
                        </ul>
                    </section>

                    {/* For Developers Section */}
                    <section className="bg-white rounded-3xl p-8 md:p-12 mb-16 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 pb-6 font-redotpaybold">
                            For Developers: Build Your Custom Payment Capabilities
                        </h2>
                        <p className="text-gray-600 text-lg">
                            We provide a powerful Payment API (for card issuance, transfers, balance inquiries, etc.),
                            allowing your business to seamlessly integrate our secure and convenient payment
                            capabilities into your own applications or services. This enables you to build a closed-loop
                            business ecosystem, achieving business automation and scalable growth.
                        </p>
                    </section>

                    {/* Five Innovative B2B Uses of Virtual Cards in 2025 */}
                    {/* <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 text-center pb-12 font-redotpaybold">
                            Five Innovative B2B Uses of Virtual Cards in 2025
                        </h2>
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
                            <p className="text-gray-600 text-lg mb-6">
                                {`Everyone knows about virtual debit and credit cards. They're everywhere — on our phones,
                                our watches, even our rings. And they aren't slowing down, either. Juniper Research is
                                projecting virtual card transactions to surpass $175 billion by 2028.`}
                            </p>
                            <p className="text-gray-600 text-lg pb-8">
                                While widely used by consumers, businesses are also adopting them for expenses, one-off
                                payments, and departmental spend. But the full B2B potential of virtual cards extends
                                far beyond this.
                            </p>

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 pb-4 font-redotpaybold">
                                    1. Travel Intermediaries: New Products and Services
                                </h3>
                                <p className="text-gray-600 text-lg pb-4">
                                    Online travel agencies are using virtual cards for global supplier payments and to
                                    create new revenue streams with value-add products at checkout.
                                </p>
                                <p className="text-gray-600 text-lg">
                                    {`Travel intermediaries have been using virtual cards to streamline global hotel and
                                    airline payments for decades. Now, they're expanding their use to offer extra
                                    products and services directly within the payment process, boosting revenue and
                                    improving the booking experience.`}
                                </p>
                                <p className="text-gray-600 text-lg pt-4">
                                    {` With fierce competition and little price disparity, this is a great way for travel
                                    companies to differentiate themselves. For instance, holidaymakers can pay a fee to
                                    "lock in" a price, which is either applied to the booking later or retained if the
                                    booking is canceled. This model requires online travel agencies and aggregators to
                                    present a single checkout price that includes all services while handling supplier
                                    payments worldwide. It's an entirely in-house revenue stream integrated into the
                                    payment flow and it's powered by virtual cards.`}
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 pb-4 font-redotpaybold">
                                    2. Insurance Providers: Introducing Instant Claims
                                </h3>
                                <p className="text-gray-600 text-lg pb-4">
                                    Insurance companies are leveraging virtual cards for instant settlement payouts to
                                    healthcare providers.
                                </p>
                                <p className="text-gray-600 text-lg">
                                    AXA Global Healthcare recently launched their virtual payment card, enabling members
                                    to pay for eligible outpatient treatment without using their funds, needing to
                                    submit a claim, or contacting their insurer to pre-authorize their treatment before
                                    they pay it.
                                </p>
                                <p className="text-gray-600 text-lg pt-4">
                                    {` A virtual card is generated on the insurance app in the policy holder's Apple Pay or
                                    Google Pay wallet that can be used anywhere that accepts contactless Visa payments.
                                    Companies like Paysure are integrated into the payment flow and check the claim
                                    history and eligibility in real-time. The MPChat issued virtual card then
                                    facilitates a direct and instant payment from the insurer to the medical provider,
                                    eliminating receipt fraud and avoiding lengthy reimbursement processes for the
                                    customer.`}
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 pb-4 font-redotpaybold">
                                    3. Freight and Logistics: Digitizing Port Payments
                                </h3>
                                <p className="text-gray-600 text-lg pb-4">
                                    Global logistics and freight companies are using virtual cards to digitize shipping
                                    payments.
                                </p>
                                <p className="text-gray-600 text-lg">
                                    By their very nature, global logistics, freight, and shipping companies must make
                                    regular payments to multiple partners and vendors around the world. But this has
                                    traditionally involved paper-based invoicing and manual reconciliation.
                                </p>
                                <p className="text-gray-600 text-lg pt-4">
                                    {`Virtual cards are enabling these businesses to go digital. For example, in
                                    partnership with DP World, Mastercard is currently introducing virtual cards to
                                    eliminate physical invoicing from global shipping payments. This enables instant
                                    payments and automated reconciliation for all freight, port, and logistics costs.
                                    The platform will expand across Latin America and eventually to DP World's ports
                                    worldwide, supporting a global revenue of over $18 billion in virtual payments.`}
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 pb-4 font-redotpaybold">
                                    4. Digital Marketing: Greater Control on Ad Spending
                                </h3>
                                <p className="text-gray-600 text-lg pb-4">
                                    E-commerce businesses and marketing departments are leveraging virtual cards to
                                    boost control and transparency of advertising spend.
                                </p>
                                <p className="text-gray-600 text-lg">
                                    {` As global e-commerce continues to rise, businesses selling goods online are
                                    increasingly turning to digital advertising as a way to target their buyers and
                                    generate cut-through. In 2023, Meta's US advertising revenue reached almost $132
                                    billion, with millions of businesses running ads on Facebook and Instagram every
                                    month.`}
                                </p>
                                <p className="text-gray-600 text-lg pt-4">
                                    {` Virtual cards are increasingly playing a role here, with innovative fintechs like
                                    Franklin realising their potential to solve business' marketing needs. For example,
                                    Franklin can link a MPChat-issued virtual card to a specific ad campaign or client
                                    on behalf of their customers. The ability to set high and flexible spend limits and
                                    expiration dates on each virtual card helps businesses to increase control and
                                    oversight over marketing spend.`}
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 pb-4 font-redotpaybold">
                                    5. Workplace Benefits: Replacing Coupons with Cards
                                </h3>
                                <p className="text-gray-600 text-lg pb-4">
                                    Employers are using virtual cards to digitize employee meal vouchers, a popular
                                    benefit in continental Europe.
                                </p>
                                <p className="text-gray-600 text-lg">
                                    Employee expenses have long been a key use case for virtual cards, but meal
                                    vouchers, a popular benefit in continental Europe, have remained largely analogue.
                                    In France, 57% of employers currently give their employees a voucher for every day
                                    worked in a month, and often in the form of a physical coupon. In 2024, these meal
                                    vouchers had a total value of close to €8.5 billion.
                                </p>
                                <p className="text-gray-600 text-lg pt-4">
                                    {`However, four voucher issuers control 99% of the market, and the French Competition
                                    Authority (ADLC) has called for tighter regulation and mandatory digitization. In
                                    2024, 40% of vouchers were still issued as physical coupons. In countries like Italy
                                    and Portugal, high processing fees – ranging from 5-20% – make these schemes costly
                                    for retailers. Employee issued single-use virtual cards, controlled by merchant
                                    category codes, could solve this problem and significantly modernize this $25-$30
                                    billion market opportunity across Europe.`}
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-6 mt-8">
                                <h3 className="text-2xl font-bold text-gray-900 pb-4 font-redotpaybold">
                                    The First-Mover Advantage
                                </h3>
                                <p className="text-gray-600 text-lg">
                                    {`Virtual cards are already impacting multiple industries, but there's still so much
                                    more to come. The space remains an open playing field, with the companies that
                                    recognize the full B2B potential of virtual cards still able to create a competitive
                                    edge, boost efficiency, and drive growth.`}
                                </p>
                            </div>
                        </div>
                    </section> */}

                    {/* Best Credit Card Processing Solutions for Small Businesses in 2025 */}
                    {/* <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 text-center pb-12 font-redotpaybold">
                            Best Credit Card Processing Solutions for Small Businesses in 2025: Recommendations
                        </h2>
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
                            <p className="text-gray-600 text-lg mb-6">
                                {`Selecting the right credit card payment processing service is critical to the success of
                                any small business. To meet customer demands and streamline operations, small businesses
                                need secure and cost-effective payment solutions. Against a backdrop of rising
                                processing fees and rapidly evolving technology, finding the right payment provider
                                directly impacts a company's profitability.`}
                            </p>
                            <p className="text-gray-600 text-lg pb-8">
                                This article will explore the key factors in choosing a credit card payment processing
                                service for small businesses, examine industry trends for 2025, and highlight innovative
                                payment solutions that can empower small and medium-sized enterprises (SMEs).
                            </p>

                            <div className="mb-10">
                                <h3 className="text-2xl font-bold text-gray-900 pb-6 font-redotpaybold">
                                    Why Small Businesses Need the Best Credit Card Processing Service
                                </h3>
                                <p className="text-gray-600 text-lg pb-6">
                                    Small businesses rely on flexible and efficient operations, and an excellent credit
                                    card processing system is a key tool to achieve this goal. A stable and reliable
                                    payment provider not only ensures smooth transactions but also reduces costs and
                                    enhances customer trust. Key advantages include:
                                </p>
                                <ul className="text-gray-600 text-lg list-disc pl-6 space-y-2">
                                    <li>
                                        <span className="font-semibold">Customer Convenience:</span> Offering multiple
                                        payment options, including credit and debit cards, improves customer
                                        satisfaction and increases sales conversions.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Cost Control:</span> High processing fees can
                                        erode profits. An optimal payment processing solution should feature transparent
                                        and competitive rates.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Data Security:</span> With rising cybersecurity
                                        risks, PCI DSS compliance and advanced anti-fraud technology have become
                                        non-negotiable.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Scalability:</span> As a business grows, the
                                        ability to support multi-currency and cross-border transactions becomes
                                        especially important.
                                    </li>
                                </ul>
                                <p className="text-gray-600 text-lg pt-6">
                                    Choosing the right credit card payment service not only optimizes operational
                                    efficiency but also improves cash flow and supports market expansion.
                                </p>
                            </div>

                            <div className="mb-10">
                                <h3 className="text-2xl font-bold text-gray-900 pb-6 font-redotpaybold">
                                    Key Features to Look for in a Credit Card Processing Service
                                </h3>
                                <p className="text-gray-600 text-lg pb-6">
                                    When searching for the ideal credit card payment processing service for your small
                                    business, focus on these core features:
                                </p>
                                <ul className="text-gray-600 text-lg flex flex-col gap-4">
                                    <li>
                                        <span className="font-semibold">Transparent and Reasonable Pricing:</span>{' '}
                                        Payment processing fees can be complex, including transaction fees, monthly
                                        fees, and setup fees. Choose a provider that offers flat-rate or low
                                        per-transaction pricing to avoid hidden costs. If your transaction volume is
                                        high, you may be able to negotiate lower rates with the provider.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Global Payment Support:</span> Small businesses
                                        targeting international markets should prioritize providers that support
                                        multi-currency settlements and cross-border payments. This helps avoid losses
                                        from exchange rate fluctuations and expands your global customer base.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Security and Compliance Guarantees:</span>{' '}
                                        Payment security must be a top priority. Select a payment service provider that
                                        is PCI DSS Level 1 certified and supports 3D Secure 2.0 verification to protect
                                        customer information and reduce fraud risk. Real-time transaction monitoring can
                                        also help detect suspicious activity promptly.
                                    </li>
                                    <li>
                                        <span className="font-semibold">System Integration and Ease of Use:</span> The
                                        best credit card processing services should integrate seamlessly with your
                                        existing systems, such as e-commerce platforms, accounting software, or POS
                                        systems. The admin dashboard should be user-friendly, and real-time reporting
                                        features can help you manage expenses and reconcile accounts.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Flexible Card Issuing Services:</span> Some
                                        payment services offer card-issuing capabilities, allowing businesses to issue
                                        virtual or physical cards for employees or customers as needed. This feature is
                                        particularly beneficial for cross-border operations, helping to optimize
                                        financial management and payment flexibility.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-10">
                                <h3 className="text-2xl font-bold text-gray-900 pb-6 font-redotpaybold">
                                    Credit Card Payment Processing Industry Trends in 2025
                                </h3>
                                <p className="text-gray-600 text-lg pb-6">
                                    The payment industry is evolving rapidly, driven by technological advancements and
                                    consumer expectations. Small businesses should pay attention to the following
                                    trends:
                                </p>
                                <ul className="text-gray-600 text-lg list-disc pl-6 flex flex-col gap-2">
                                    <li>
                                        <span className="font-semibold">The Rise of Contactless Payments:</span> Mobile
                                        wallets and tap-to-pay are becoming increasingly popular. Service providers must
                                        support NFC technology to meet user preferences.
                                    </li>
                                    <li>
                                        <span className="font-semibold">AI-Powered Fraud Prevention:</span> Using
                                        artificial intelligence to detect fraudulent activities, reduce chargebacks, and
                                        enhance payment security is now a standard feature of top-tier payment services.
                                    </li>
                                    <li>
                                        <span className="font-semibold">{`Embedded Finance Solutions:</span> Integrating
                                        payment functions directly into a business's native systems significantly
                                        improves operational efficiency and user experience.`}</span>
                                    </li>
                                    <li>
                                        <span className="font-semibold">Global Market Expansion:</span> As more small
                                        businesses go international, the demand for payment solutions that support
                                        low-cost cross-border transactions is surging.
                                    </li>
                                </ul>
                                <p className="text-gray-600 text-lg pt-6">
                                    Keeping up with these trends will help businesses remain agile and achieve
                                    sustainable growth in a competitive market.
                                </p>
                            </div>

                            <div className="mb-10">
                                <h3 className="text-2xl font-bold text-gray-900 pb-6 font-redotpaybold">
                                    How to Choose the Best Credit Card Processing Service for Your Business
                                </h3>
                                <p className="text-gray-600 text-lg pb-6">
                                    To select the right credit card processing solution for your company, follow these
                                    evaluation steps:
                                </p>
                                <ol className="text-gray-600 text-lg list-decimal pl-6 flex flex-col gap-2">
                                    <li>
                                        <span className="font-semibold">Assess Your Business Needs:</span> Determine
                                        your transaction volume, average ticket size, and whether you need to support
                                        online, in-person, or international payments.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Compare Pricing Models:</span> Opt for a plan
                                        with transparent pricing and no hidden fees. Businesses with low transaction
                                        volumes may prefer a flat-rate model, while those with high frequency are better
                                        suited to a cost-plus model.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Check Integration Capabilities:</span> Confirm
                                        that the payment service can connect with your e-commerce platform, POS system,
                                        or accounting software.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Evaluate Security Measures:</span> Prioritize
                                        providers with PCI DSS certification and robust anti-fraud systems.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Consider Scalability:</span> Choose a provider
                                        that supports advanced features like international payments and card issuing to
                                        accommodate future business growth.
                                    </li>
                                </ol>
                                <p className="text-gray-600 text-lg pt-6">
                                    By focusing on these factors, businesses can find a payment solution that truly fits
                                    their operational model.
                                </p>
                            </div>

                            <div className="mb-10">
                                <h3 className="text-2xl font-bold text-gray-900 pb-6 font-redotpaybold">
                                    Spotlight Recommendation: MPChat, Powering the New Era of Global Payments
                                </h3>
                                <p className="text-gray-600 text-lg pb-6">
                                    If you are looking for an innovative payment solution, MPChat is a brand worth your
                                    attention. MPChat is a global digital financial infrastructure provider dedicated to
                                    enhancing payment efficiency and business capabilities through its one-stop tools.
                                </p>
                                <p className="text-gray-600 text-lg">
                                    <span className="font-semibold">Highlights of the MPCard Payment Solution</span>
                                </p>
                                <p className="text-gray-600 text-lg">
                                    Designed specifically for SMEs, MPCard offers the following core advantages:
                                </p>
                                <ul className="text-gray-600 text-lg list-disc pl-6 flex flex-col gap-2 pt-4">
                                    <li>
                                        Multi-Currency Support: Pay in local currencies to avoid exchange rate losses
                                        and facilitate global transactions.
                                    </li>
                                    <li>
                                        Real-Time Expense Management: Automatically records transaction data and
                                        provides spending alerts and report generation for greater financial
                                        transparency.
                                    </li>
                                    <li>
                                        Customizable Spending Controls: Set transaction limits, usage times, and
                                        merchant categories to ensure financial compliance.
                                    </li>
                                    <li>
                                        Global Acceptance: MPCard is accepted at 150 million merchants worldwide, making
                                        it suitable for a wide range of operational scenarios.
                                    </li>
                                    <li>
                                        Top-Tier Security: Supports PCI DSS certification and 3D Secure 2.0 verification
                                        to ensure all transactions are secure.
                                    </li>
                                    <li>
                                        High System Integration: Seamlessly connects with major e-commerce platforms,
                                        ERP systems, and financial tools to optimize payment workflows.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-10">
                                <h3 className="text-2xl font-bold text-gray-900 pb-6 font-redotpaybold">
                                    Practical Tips for Reducing Credit Card Processing Costs
                                </h3>
                                <p className="text-gray-600 text-lg pb-6">
                                    To increase profit margins, small businesses can adopt the following strategies when
                                    using credit card processing services:
                                </p>
                                <ul className="text-gray-600 text-lg list-disc pl-6 flex flex-col gap-2">
                                    <li>
                                        <span className="font-semibold">Negotiate Rates:</span> Merchants with high
                                        transaction volumes can often negotiate more favorable pricing with their
                                        providers.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Opt for a Flat-Rate Plan:</span> This can be
                                        more cost-effective for small businesses with stable transaction frequencies.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Choose a Global Platform:</span> Services like
                                        MPChat can reduce intermediary steps, resulting in more direct, secure, and
                                        lower-cost transactions.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Monitor Chargeback Rates:</span> Implement
                                        anti-fraud tools to reduce losses caused by disputed transactions.
                                    </li>
                                </ul>
                                <p className="text-gray-600 text-lg pt-6">
                                    By using these strategies, businesses can effectively control costs and improve
                                    financial operational efficiency.
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-6">
                                <h3 className="text-2xl font-bold text-gray-900 pb-4 font-redotpaybold">Conclusion</h3>
                                <p className="text-gray-600 text-lg">
                                    In 2025, choosing the best credit card processing service for a small business
                                    requires balancing cost, security, and scalability. As contactless payments and
                                    AI-driven security become standard, businesses should partner with flexible,
                                    globally-minded providers. With its innovative MPCard and physical card offerings,
                                    MPChat provides businesses with a more secure, flexible, and low-cost payment
                                    management solution, enabling SMEs to stand out in the wave of globalization and
                                    achieve sustainable growth.
                                </p>
                            </div>
                        </div>
                    </section> */}

                    {/* CTA Section */}
                    {/* <section className="text-center py-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-redotpaybold">
                            Join Our Community
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Experience the future of secure communication and payments today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/card/personal">
                                <button className="text-nowrap text-lg sm:text-xl px-8 py-4 bg-[#06C55B] text-white font-semibold rounded-full hover:bg-[#05B052] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 font-redotpaybold">
                                    Try Personal Card
                                </button>
                            </Link>
                            <Link href="/card/corporate">
                                <button className="text-nowrap text-lg sm:text-xl px-8 py-4 bg-[#06C55B] text-white font-semibold rounded-full hover:bg-[#05B052] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 font-redotpaybold">
                                    Try Business Card
                                </button>
                            </Link>
                        </div>
                    </section> */}
                </div>
            </div>
            <Footer />
        </div>
    )
}
