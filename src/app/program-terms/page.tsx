'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/card/Footer'

export default function ProgramTermsPage() {
    return (
        <div className="min-h-screen bg-[#F7F7F2] flex flex-col">
            <Header />
            <div className="container mx-auto px-8 py-16 max-w-[1200px] flex-grow">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8 font-redotpaybold text-center">
                        MPChat Card Program Terms
                    </h1>

                    <div className="prose max-w-none">
                        <p className="text-gray-600 mb-6">
                            <strong>Last Updated:</strong> 2025-06-04
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-redotpaybold">
                            1. Definitions
                        </h2>
                        <ul className="list-disc pl-8 text-gray-600 mb-4 space-y-2">
                            <li>
                                <strong>MPChat Card:</strong> A virtual or physical payment card issued by our partner
                                financial institution and provided by MPChat. It is accessible digitally with a unique
                                16-digit card number, expiration date (MM/YY), and CVV code, operating on the
                                [Visa/Mastercard] network.
                            </li>
                            <li>
                                <strong>Cardholder:</strong> An individual (18+ years old) or a registered legal entity
                                that has successfully applied for, completed identity verification for, and activated an
                                MPChat Card.
                            </li>
                            <li>
                                <strong>MPChat Account:</strong> The electronic stored-value account provided by MPChat
                                where the Cardholder holds USD funds used for Card transactions.
                            </li>
                            <li>
                                <strong>Funding Source:</strong> A verified and linked bank account, credit/debit card,
                                or other approved method used to load funds into the MPChat Account.
                            </li>
                            <li>
                                <strong>Issuer:</strong> The licensed financial institution that issues the MPChat Card.
                            </li>
                            <li>
                                <strong>Card Network:</strong> The payment network (e.g., Visa, Mastercard) through
                                which Card transactions are processed.
                            </li>
                            <li>
                                <strong>Card Network Rules:</strong> The official rules, regulations, and operating
                                guidelines issued by the Card Network.
                            </li>
                            <li>
                                <strong>Chargeback:</strong>{' '}
                                {`A reversal of a Card transaction initiated by the Cardholder, where funds are disputed and may be returned to the Cardholder's MPChat Account.`}
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-redotpaybold">
                            2. Scope of Terms
                        </h2>
                        <p className="text-gray-600 mb-4">
                            These Terms govern the application, issuance, use, and management of the MPChat Card. By
                            applying for or using the MPChat Card, the Cardholder agrees to these Terms, our Privacy
                            Policy, and all applicable Card Network Rules and Singaporean laws, including the Payment
                            Services Act 2019.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-redotpaybold">
                            3. Application & Activation
                        </h2>
                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.1 Eligibility</h3>
                        <p className="text-gray-600 mb-4">To be eligible for an MPChat Card, you must:</p>
                        <ul className="list-disc pl-8 text-gray-600 mb-4 space-y-2">
                            <li>Be at least 18 years of age (for individuals) or be a duly registered legal entity.</li>
                            <li>
                                Successfully complete our Customer Due Diligence (CDD) and identity verification
                                (KYC/KYB) process.
                            </li>
                            <li>Maintain an MPChat account in good standing.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.2 Approval Process</h3>
                        <p className="text-gray-600 mb-4">
                            All applications are subject to approval by us and our Issuer partners. We reserve the
                            right, in our sole discretion, to refuse any application or change eligibility criteria at
                            any time. Additional documentation may be requested to complete the review.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.3 Card Activation</h3>
                        <p className="text-gray-600 mb-4">
                            {`The MPChat Card is activated upon the Cardholder's acceptance of these Terms within the
                            MPChat application. A minimum initial load of [Amount, e.g., $10 USD] from an approved
                            Funding Source is required to begin using the Card.`}
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-redotpaybold">
                            4. Card Usage Rules
                        </h2>
                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.1 Permitted Use</h3>
                        <p className="text-gray-600 mb-4">
                            The MPChat Card is designed for legitimate personal and business transactions, including:
                        </p>
                        <ul className="list-disc pl-8 text-gray-600 mb-4 space-y-2">
                            <li>
                                <strong>Online Purchases:</strong> Making payments at e-commerce merchants worldwide
                                that accept the Card Network.
                            </li>
                            <li>
                                <strong>Recurring Subscriptions:</strong> Paying for services like software, streaming,
                                and memberships.
                            </li>
                            <li>
                                <strong>Business Expenses:</strong> Managing corporate expenses, such as paying for
                                online advertising, software, and supplier invoices.
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.2 Prohibited Use</h3>
                        <p className="text-gray-600 mb-4">
                            The MPChat Card must not be used for any illegal or high-risk activities, including but not
                            limited to:
                        </p>
                        <ul className="list-disc pl-8 text-gray-600 mb-4 space-y-2">
                            <li>
                                Any activity that violates any law or regulation in Singapore or the jurisdiction of the
                                transaction.
                            </li>
                            <li>Transactions related to illegal goods, narcotics, weapons, or gambling.</li>
                            <li>Products or services that infringe on intellectual property rights.</li>
                            <li>Funding or facilitating any activity on sanctions lists (e.g., OFAC, UN).</li>
                            <li>
                                Peer-to-peer (P2P) money transfers, unless this feature is explicitly enabled for your
                                account.
                            </li>
                            <li>
                                Transactions in the following jurisdictions: Afghanistan, Belarus, Cuba, Iran, Iraq,
                                North Korea, Russia, Somalia, Syria, Ukraine (Crimea, Donetsk, and Luhansk regions),
                                Venezuela, Yemen, and Zimbabwe.
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.3 Limits & Expiry</h3>
                        <ul className="list-disc pl-8 text-gray-600 mb-4 space-y-2">
                            <li>
                                <strong>Limits:</strong> Transaction and balance limits apply to your MPChat Card and
                                are based on your account verification level. These limits are displayed within your
                                MPChat app.
                            </li>
                            <li>
                                <strong>Expiry:</strong> The Card expires on the last day of the month shown on the card
                                (MM/YY). A replacement Card will be automatically issued if the account is in good
                                standing. Funds from an expired Card will be transferred to the new Card.
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.4 Security Obligations</h3>
                        <p className="text-gray-600 mb-4">
                            The Cardholder is responsible for the security of their Card details. You must:
                        </p>
                        <ul className="list-disc pl-8 text-gray-600 mb-4 space-y-2">
                            <li>Never share your full card number, CVV, or PIN with anyone.</li>
                            <li>
                                Immediately report any lost, stolen, or compromised Card details via the MPChat app to
                                freeze the Card.
                            </li>
                            <li>
                                Report any unauthorized transactions within 60 days of the transaction date. Failure to
                                do so may result in the loss of funds.
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.5 Chargebacks</h3>
                        <p className="text-gray-600 mb-4">
                            If you wish to dispute a transaction, you must contact us at support@mpchats.com within 60
                            days of the transaction date. You are required to provide a written explanation and any
                            supporting documentation. We will assist in raising the dispute with the merchant and the
                            Card Network. The final decision on any Chargeback is determined by the Card Network Rules.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-redotpaybold">5. Fees</h2>
                        <p className="text-gray-600 mb-4">
                            You agree to pay all applicable fees associated with your MPChat Card, which will be
                            disclosed to you in the MPChat app and on our website. Fees may include, but are not limited
                            to, card issuance fees, currency conversion fees, and ATM withdrawal fees (if applicable).
                            All fees are non-refundable and will be deducted from your MPChat Account balance.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-redotpaybold">
                            6. Suspension & Termination
                        </h2>
                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.1 Suspension</h3>
                        <p className="text-gray-600 mb-4">
                            We may suspend your MPChat Card at any time, without prior notice, if we suspect:
                        </p>
                        <ul className="list-disc pl-8 text-gray-600 mb-4 space-y-2">
                            <li>Fraudulent or unauthorized activity.</li>
                            <li>A violation of these Terms or any applicable law.</li>
                            <li>Your account is subject to a regulatory order.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.2 Termination</h3>
                        <ul className="list-disc pl-8 text-gray-600 mb-4 space-y-2">
                            <li>
                                <strong>By You:</strong> You may terminate your MPChat Card at any time through the
                                MPChat app.
                            </li>
                            <li>
                                <strong>By Us:</strong> We reserve the right to terminate your Card for any reason,
                                including prolonged inactivity or breach of these Terms.
                            </li>
                        </ul>
                        <p className="text-gray-600 mb-4">
                            Upon termination, you must cease all use of the Card. Any remaining balance will be returned
                            to you in accordance with our standard procedures, subject to the deduction of any
                            outstanding fees.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-redotpaybold">
                            7. Liability & Disclaimers
                        </h2>
                        <p className="text-gray-600 mb-4">
                            To the fullest extent permitted by law, MPChat disclaims all warranties, express or implied.
                            Our liability shall be limited to the re-supply of the service or the cost of re-supplying
                            the service. We are not liable for any indirect, consequential, or punitive damages, nor for
                            losses arising from unforeseeable events (force majeure) or the actions of third parties.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-redotpaybold">
                            8. Indemnification
                        </h2>
                        <p className="text-gray-600 mb-4">
                            You agree to indemnify and hold MPChat, its affiliates, and partners harmless from any claim
                            or demand (including legal fees) arising out of your breach of these Terms, your use of the
                            MPChat Card, or your violation of any law or third-party right.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-redotpaybold">
                            9. Privacy & Data
                        </h2>
                        <p className="text-gray-600 mb-4">
                            We collect and process your personal data (e.g., KYC documents, transaction history) in
                            accordance with our MPChat Privacy Policy. Your data is used for identity verification,
                            compliance with AML/CFT regulations, fraud prevention, and service provision. All data is
                            stored securely using industry-standard encryption.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-redotpaybold">
                            10. Amendments
                        </h2>
                        <p className="text-gray-600 mb-4">
                            {`We may amend these Terms at any time by posting the revised version on our website. We will
                            provide at least 30 days' notice for any material changes. Your continued use of the MPChat
                            Card after the notice period constitutes your acceptance of the changes.`}
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-redotpaybold">
                            11. Governing Law & Dispute Resolution
                        </h2>
                        <p className="text-gray-600 mb-4">
                            These Terms shall be governed by and construed in accordance with the laws of the Republic
                            of Singapore. Any dispute arising out of or in connection with these Terms shall be referred
                            to and finally resolved by arbitration administered by the Singapore International
                            Arbitration Centre (SIAC) in accordance with its prevailing rules. The seat of the
                            arbitration shall be Singapore.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
