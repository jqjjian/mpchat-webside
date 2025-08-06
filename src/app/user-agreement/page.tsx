'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/card/Footer'

export default function UserAgreementPage() {
    return (
        <div className="min-h-screen bg-[#F7F7F2] flex flex-col">
            <Header />
            <div className="container mx-auto px-8 py-16 max-w-[1200px] flex-grow">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8 font-redotpaybold text-center">
                        MPChat User Agreement
                    </h1>

                    <div className="prose max-w-none">
                        <p className="text-gray-600 mb-6">
                            <strong>Effective Date:</strong> [2024-11-09]
                        </p>

                        <h3 className="py-2 font-bold text-xl">Welcome to MPChat!</h3>

                        <p className="text-gray-600 pt-2">
                            {`This MPChat User Agreement (hereinafter referred to as "this Agreement") is a legally binding agreement entered into between you (hereinafter also referred to as "User") and the MPChat Operating Entity (hereinafter referred to as "we," "us," or "MPChat") concerning your download, installation, registration, login, and use of the MPChat software and related services (hereinafter collectively referred to as "the Service").`}
                        </p>

                        <p className="text-gray-600 pt-2">
                            {`Please read carefully and fully understand all the terms and conditions of this Agreement
                            before you start using the Service, especially clauses excluding or limiting our liability,
                            and those addressing applicable law and dispute resolution (which may be highlighted in
                            bold, underlined, or by other means for your attention). By clicking "Agree" via a web page,
                            by your actual use of the Service, or by any other means of expressing or implying your
                            acceptance of this Agreement, you confirm that you have read, understood, and agree to be
                            bound by this Agreement, which shall thereupon become legally effective between you and us.`}
                        </p>

                        <p className="text-gray-600 pt-2">
                            If you are a minor (as defined by the laws of your jurisdiction), please read this Agreement
                            accompanied by your legal guardian, and ensure that your legal guardian agrees to your use
                            of the Service and acceptance of this Agreement.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-redotpaybold">
                            1. Scope of Agreement and Definitions
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1.1 Scope of Application</h3>
                        <p className="text-gray-600 mb-4">
                            {`This Agreement applies to all individuals or entities using any of MPChat's services.`}
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1.2 Service Content</h3>
                        <p className="text-gray-600 mb-4">
                            {`The Service primarily provides end-to-end encrypted instant messaging ("MPChat Chat"). To
                            enhance the social interactive experience, the Service also includes certain convenient
                            payment features that allow users to conduct transfers in U.S. Dollars (USD) within chats,
                            and to optionally apply for an associated payment card ("MPChat Card") for daily
                            consumption. We may also launch other features or services in the future. The specific
                            service content is subject to what MPChat actually provides.`}
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1.3 Relevant Definitions</h3>
                        <ul className="list-disc pl-8 text-gray-600 mb-4 space-y-2">
                            <li>
                                <strong>User Content:</strong> Refers to any data, information, communications, images,
                                audio, or other materials that a User uploads, publishes, transmits, or otherwise shares
                                in the course of using the Service.
                            </li>
                            <li>
                                <strong>
                                    {`MPChat Account:</strong> Refers to the electronic stored-value function provided
                                by MPChat to the User for holding, managing, and using U.S. Dollar (USD) funds, which
                                can be used for transfers and MPChat Card payments within the Service. It is also
                                sometimes referred to as "Balance".`}
                                    /
                                </strong>
                            </li>
                            <li>
                                <strong>KYC/AML:</strong>
                                {`Stands for "Know Your Customer" and "Anti-Money Laundering."
                                To comply with applicable laws and regulations, we are required to conduct identity
                                verification and screening procedures on users to prevent financial crimes.`}
                            </li>
                            <li>
                                <strong>Affiliates:</strong>{' '}
                                {`Refers to any entity that directly or indirectly controls,
                                is controlled by, or is under common control with a party. For the purposes of this
                                definition, "control" means the power to direct or cause the direction of the management
                                and policies of an entity, whether through the ownership of voting securities, by
                                contract, or otherwise.`}
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-redotpaybold">
                            2. Account Registration and Use
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.1 Account Eligibility</h3>
                        <p className="text-gray-600 mb-4">
                            You represent and warrant that you are a natural person, legal person, or other organization
                            with full capacity for civil rights and civil conduct. If you do not meet the foregoing
                            qualifications, you and your guardian shall bear all consequences arising therefrom.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.2 Account Information</h3>
                        <p className="text-gray-600 mb-4">
                            You agree to provide true, accurate, complete, and current registration information
                            (including but not limited to your mobile phone number, email address, etc.) and to update
                            it in a timely manner.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.3 Account Security</h3>
                        <p className="text-gray-600 mb-4">
                            You are responsible for maintaining the security and confidentiality of your account
                            username, password, PIN, API keys, and any other codes or credentials used to access the
                            Service. You shall be fully responsible for all activities that occur under your account.
                            You must notify us immediately if you discover any unauthorized use of your account.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.4 Account Use Restrictions</h3>
                        <p className="text-gray-600 mb-4">
                            Your account is for your personal use only and may not be gifted, loaned, leased,
                            transferred, or sold.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                            2.5 Identity Verification (KYC/AML)
                        </h3>
                        <p className="text-gray-600 mb-4">
                            To use all or part of the Service (especially to activate and use the MPChat Account and
                            MPChat Card features), you agree to complete the identity verification (KYC) and anti-money
                            laundering (AML) review procedures as required by us and applicable laws and regulations.
                            You agree to provide the true, accurate personal information and documents we request for
                            this purpose. We reserve the right to refuse to open, or to suspend/terminate, part or all
                            of the services for you based on our risk assessment and compliance requirements.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-redotpaybold">
                            3. MPChat Services
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.1 MPChat Chat Service</h3>
                        <ul className="list-disc pl-8 text-gray-600 mb-4 space-y-2">
                            <li>
                                <strong>3.1.1</strong> We provide end-to-end encrypted instant messaging services. This
                                means, to the extent technically implemented, your messages are encrypted upon sending,
                                and only you and your designated recipient(s) can decrypt and read them. We cannot
                                access your encrypted message content.
                            </li>
                            <li>
                                <strong>3.1.2</strong> You can use MPChat Chat to send text, images, voice messages,
                                videos, and files, etc.
                            </li>
                            <li>
                                <strong>3.1.3</strong> You agree not to use MPChat Chat to send spam, harassing
                                messages, illegal content, content that infringes on the rights of others, or to engage
                                in any activity that violates this Agreement or applicable laws and regulations.
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                            3.2 Convenient Payment Features
                        </h3>
                        <ul className="list-disc pl-8 text-gray-600 mb-4 space-y-2">
                            <li>
                                <strong>3.2.1 MPChat Account and Balance:</strong>{' '}
                                {`You can activate and manage a
                                stored-value account ("MPChat Account") within MPChat for holding USD funds. You may top
                                up your account balance through compliant methods we support at the time (such as bank
                                cards, etc.).`}
                            </li>
                            <li>
                                <strong>3.2.2 Transfers:</strong> You can directly transfer USD to your friends in
                                chats. The relevant funds will be deducted from or deposited into your MPChat Account
                                balance.
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.3 MPChat Card Service</h3>
                        <ul className="list-disc pl-8 text-gray-600 mb-4 space-y-2">
                            <li>
                                <strong>3.3.1</strong>{' '}
                                {`You may optionally apply for and use an MPChat Card (virtual or
                                physical) to spend your MPChat Account's USD balance at merchants worldwide that accept
                                the corresponding card network (e.g., Visa/Mastercard).`}
                            </li>
                            <li>
                                <strong>3.3.2 Application and Activation:</strong> You must meet our application
                                criteria and complete the necessary verification to obtain and activate an MPChat Card.
                            </li>
                            <li>
                                <strong>3.3.3 Spending and Conversion:</strong>{' '}
                                {`When you use the MPChat Card for a
                                transaction, the corresponding amount will be deducted directly from your MPChat
                                Account's USD balance. If the transaction currency is not USD, a currency conversion
                                will be performed at the exchange rate effective at that time by the card network (e.g.,
                                Visa/Mastercard) to complete the payment.`}
                            </li>
                            <li>
                                <strong>3.3.4 Fees and Limits:</strong> The use of the MPChat Card may be subject to
                                fees such as annual fees, transaction fees, currency conversion fees, and ATM withdrawal
                                fees, and may have spending limits. Specific details will be provided separately or
                                stipulated in relevant agreements.
                            </li>
                            <li>
                                <strong>3.3.5 Relationship with Issuing Institutions:</strong> The MPChat Card may be
                                issued by our third-party financial institution partners. Your use of the card will be
                                subject to their relevant terms in addition to this Agreement.
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-redotpaybold">
                            4. User Conduct
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.1 Legal Compliance</h3>
                        <p className="text-gray-600 mb-4">
                            You undertake to comply with all applicable laws, regulations, rules, and policies.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.2 Prohibited Activities</h3>
                        <p className="text-gray-600 mb-4">
                            You shall not use the Service for any illegal purpose or in any manner, including but not
                            limited to:
                        </p>
                        <ul className="list-disc pl-8 text-gray-600 mb-4 space-y-2">
                            <li>
                                Financial criminal activities such as money laundering, terrorist financing, fraud, or
                                illegal fundraising;
                            </li>
                            <li>
                                Infringing upon the intellectual property rights, privacy rights, or other legitimate
                                rights of others;
                            </li>
                            <li>Disseminating viruses, Trojan horses, or other malicious software;</li>
                            <li>
                                {`Engaging in any activity that could compromise the security of the Service's systems or
                                network;`}
                            </li>
                            <li>
                                Publishing or disseminating content that is unlawful, obscene, defamatory, threatening,
                                harassing, hateful, racially or ethnically offensive, or otherwise objectionable;
                            </li>
                            <li>Impersonating any person or entity;</li>
                            <li>{`Collecting other users' information without authorization;`}</li>
                            <li>
                                Engaging in any activity that we, in our sole discretion, deem inappropriate or in
                                violation of the spirit of this Agreement.
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.3 Enforcement Rights</h3>
                        <p className="text-gray-600 mb-4">
                            We reserve the right to monitor your use of the Service. If we believe your conduct violates
                            this Agreement or applicable laws, we have the right, at our sole discretion, to take
                            measures including but not limited to issuing warnings, restricting features, suspending
                            services, terminating your account, deleting content, and reporting to relevant authorities,
                            without prior notice to you.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-redotpaybold">
                            5. User Content
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                            5.1 Responsibility for Content
                        </h3>
                        <p className="text-gray-600 mb-4">
                            {`You are solely responsible for any content you upload, send, store, or share via the Service
                            ("User Content"). You warrant that you own all necessary rights to your User Content or have
                            obtained legal authorization.`}
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.2 License Grant</h3>
                        <p className="text-gray-600 mb-4">
                            {`You grant us a worldwide, non-exclusive, royalty-free, sublicensable, and transferable
                            license to use, copy, distribute, create derivative works of, display, and perform your User
                            Content for the sole purpose of operating and providing the Service (e.g., to display your
                            messages on your designated recipients' devices). This license is limited to what is
                            necessary for operating and providing the Service.`}
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.3 Content Moderation</h3>
                        <p className="text-gray-600 mb-4">
                            We are not the publisher of and do not endorse User Content. We reserve the right, at our
                            sole discretion and without prior notice, to remove or block any User Content that we
                            believe violates this Agreement or applicable laws.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-redotpaybold">
                            6. Intellectual Property
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.1 Ownership</h3>
                        <p className="text-gray-600 mb-4">
                            All intellectual property rights (including copyrights, trademarks, patents, trade secrets,
                            etc.) in and to the Service (including but not limited to the software, technology, text,
                            graphics, user interfaces, trademarks, logos, etc.) are and will remain the exclusive
                            property of us or our licensors.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.2 Restrictions</h3>
                        <p className="text-gray-600 mb-4">
                            Without our prior written consent, you may not copy, modify, distribute, sell, lease,
                            reverse engineer, or otherwise exploit any part of the Service.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-redotpaybold">
                            7. Third-Party Services and Links
                        </h2>

                        <p className="text-gray-600 mb-4">
                            The Service may contain links to or allow you to access features or content provided by
                            third-party websites, applications, or services. These third-party services are governed by
                            their own respective terms and privacy policies. We are not responsible for the content,
                            accuracy, security, or functionality of any third-party services.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-redotpaybold">
                            8. Fees and Taxes
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">8.1 Service Fees</h3>
                        <p className="text-gray-600 mb-4">
                            You agree to pay all applicable fees incurred in connection with your use of the Service
                            (such as account top-up/management fees, card-related fees, currency conversion fees, etc.).
                            Fee schedules will be published within the MPChat application or on our website. We reserve
                            the right to adjust the fee schedules.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">8.2 Tax Responsibilities</h3>
                        <p className="text-gray-600 mb-4">
                            You are solely responsible for determining, reporting, and remitting all applicable taxes
                            that may arise from your use of the Service and your financial transactions or any taxable
                            income generated from using the Service.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-redotpaybold">
                            9. Disclaimers and Limitation of Liability
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">{`9.1 Service Provided "As Is"`}</h3>
                        <p className="text-gray-600 mb-4">
                            {`The Service is provided on an "as is" and "as available" basis. We make no warranties of any
                            kind, either express or implied, including, but not limited to, warranties of
                            merchantability, fitness for a particular purpose, non-infringement, or that the Service
                            will be uninterrupted, error-free, secure, reliable, or that information will be accurate or
                            complete.`}
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                            9.2 Payment Feature Risk Warning
                        </h3>
                        <p className="text-gray-600 mb-4">
                            {`You understand and agree that when using payment features such as transfers, you are
                            responsible for carefully verifying the recipient's information. You shall bear any
                            financial loss resulting from your own operational errors (such as transferring to the wrong
                            account or leaking your password). MPChat is not liable for user-to-user transfer errors not
                            caused by us.`}
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">9.3 Limitation of Liability</h3>
                        <p className="text-gray-600 mb-4">
                            To the maximum extent permitted by law, in no event shall we be liable for any indirect,
                            incidental, consequential, special, or punitive damages (including loss of profits, data, or
                            goodwill) arising out of or in connection with this Agreement or the use of the Service,
                            even if we have been advised of the possibility of such damages.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">9.4 Force Majeure</h3>
                        <p className="text-gray-600 mb-4">
                            We shall not be liable for any service interruption or loss resulting from causes outside
                            our reasonable control, such as acts of God, war, terrorism, government actions, network
                            failures, or cyber-attacks.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-redotpaybold">
                            10. Indemnification
                        </h2>

                        <p className="text-gray-600 mb-4">
                            {` You agree to indemnify, defend, and hold harmless us, our affiliates, and their respective
                            directors, officers, employees, and agents from and against any and all claims, liabilities,
                            damages, losses, and expenses (including reasonable attorneys' fees) arising out of or in
                            any way connected with your breach of this Agreement, misuse of the Service, violation of
                            any third-party rights, or violation of any applicable laws.`}
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-redotpaybold">
                            11. Changes, Suspension, and Termination of Agreement
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">11.1 Changes</h3>
                        <p className="text-gray-600 mb-4">
                            We reserve the right, at our sole discretion, to modify this Agreement at any time. For
                            material changes, we will notify you through reasonable means, such as an in-app notice, a
                            notice on our website, or an email. The modified Agreement will become effective on the date
                            specified. Your continued use of the Service after the changes constitutes your acceptance
                            of the modified Agreement. If you do not agree to the modifications, you must stop using the
                            Service.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                            11.2 Suspension and Termination
                        </h3>
                        <ul className="list-disc pl-8 text-gray-600 mb-4 space-y-2">
                            <li>
                                <strong>Termination by You:</strong> You may terminate this Agreement at any time by
                                deleting your MPChat account and ceasing to use the Service.
                            </li>
                            <li>
                                <strong>Termination by Us:</strong> If we believe you have violated any provision of
                                this Agreement, or that your conduct poses a risk or harm to us, other users, or third
                                parties, or as required by law or for business reasons, we reserve the right, at our
                                sole discretion, to suspend or terminate your access to or use of the Service, without
                                prior notice (unless required by law).
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">11.3 Effect of Termination</h3>
                        <p className="text-gray-600 mb-4">
                            Upon termination, your right to use the Service will immediately cease. Certain provisions
                            (such as those regarding intellectual property, disclaimers, limitation of liability,
                            indemnification, and dispute resolution) will survive the termination of this Agreement.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-redotpaybold">
                            12. Your Legal Responsibilities
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">12.1 Compliance Obligations</h3>
                        <p className="text-gray-600 mb-4">
                            You represent and warrant that you will be independently and solely responsible for
                            understanding and complying with all applicable laws, regulations, and policies in any and
                            all jurisdictions to which you are subject and in which you use any MPChat services.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                            12.2 Jurisdictional Compliance
                        </h3>
                        <p className="text-gray-600 mb-4">
                            By using MPChat services, you acknowledge and agree that it is your obligation to ensure
                            that your use of the Service is lawful and compliant in your jurisdiction. You shall be
                            solely liable for any and all liability, penalties, or claims arising from your failure to
                            comply with local laws.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-redotpaybold">
                            13. Miscellaneous
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">13.1 Entire Agreement</h3>
                        <p className="text-gray-600 mb-4">
                            This Agreement, along with any other policies and guidelines we may publish from time to
                            time (such as the Privacy Policy and specific service terms), constitutes the entire
                            agreement between you and us regarding the Service and supersedes any prior oral or written
                            agreements.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">13.2 Severability</h3>
                        <p className="text-gray-600 mb-4">
                            If any provision of this Agreement is held by a court of competent jurisdiction to be
                            invalid or unenforceable, such provision shall be modified to the minimum extent necessary
                            to make it valid and enforceable, and the remaining provisions will continue in full force
                            and effect.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">13.3 Waiver</h3>
                        <p className="text-gray-600 mb-4">
                            Our failure to exercise or enforce any right or provision of this Agreement shall not
                            constitute a waiver of such right or provision.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">13.4 Assignment</h3>
                        <p className="text-gray-600 mb-4">
                            You may not assign any of your rights or obligations under this Agreement without our prior
                            written consent. We are entitled to assign any or all of our rights and obligations under
                            this Agreement to our affiliates or to any third party in connection with a merger,
                            acquisition, reorganization, or sale of assets.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">13.5 Notices</h3>
                        <p className="text-gray-600 mb-4">
                            We may provide you with notices related to the Service via email, in-app notifications, or
                            by posting on our website.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">13.6 Headings</h3>
                        <p className="text-gray-600 mb-4">
                            The section headings in this Agreement are for convenience only and have no legal or
                            contractual effect.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">13.7 Language</h3>
                        <p className="text-gray-600 mb-4">
                            This Agreement may be provided in multiple languages. In the event of any conflict or
                            inconsistency between different language versions, the English version shall prevail.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-redotpaybold">
                            14. Contact Us
                        </h2>

                        <p className="text-gray-600 mb-4">
                            If you have any questions about this Agreement, please contact us at:{' '}
                            <Link href="mailto:support@mpchats.com" className="text-[#06C55B] hover:underline">
                                support@mpchats.com
                            </Link>
                        </p>

                        <p className="text-gray-600 mb-4">
                            Please confirm again that you have carefully read and understood all terms of this
                            Agreement.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
