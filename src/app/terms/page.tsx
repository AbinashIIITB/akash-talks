import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description: "Terms and Conditions for using Akash Talks services - College admission counseling and guidance.",
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
                <p className="text-muted-foreground mb-8">Last updated: February 2026</p>

                <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            By accessing and using the Akash Talks website (akashtalks.in), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Akash Talks provides educational counseling and admission guidance services for engineering, medical, and management colleges across India. Our services include:
                        </p>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                            <li>College admission counseling and guidance</li>
                            <li>Information about entrance exams (WBJEE, COMEDK, MHT-CET, NEET, etc.)</li>
                            <li>College comparison and selection assistance</li>
                            <li>Application and admission process support</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">3. Information Accuracy</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            While we strive to provide accurate and up-to-date information about colleges, fees, placements, and admissions, we cannot guarantee the accuracy of all information. College policies, fees, and requirements may change. We recommend verifying critical information directly with the respective institutions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">4. No Guarantee of Admission</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our services are advisory in nature. We do not guarantee admission to any college or university. Admission decisions are made solely by the respective institutions based on their criteria and availability.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">5. User Responsibilities</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            When using our services, you agree to:
                        </p>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li>Provide accurate and truthful information</li>
                            <li>Not misuse our services for any unlawful purpose</li>
                            <li>Respect the intellectual property rights of Akash Talks</li>
                            <li>Not reproduce or distribute our content without permission</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            All content on this website, including text, graphics, logos, and images, is the property of Akash Talks and is protected by copyright laws. Unauthorized use of any content may violate copyright and other laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Akash Talks shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our website or services. We are not responsible for decisions made based on information provided on this website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">8. Third-Party Links</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of any third-party sites.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after changes constitutes acceptance of the new terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Kolkata, West Bengal.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            If you have any questions about these Terms and Conditions, please contact us at:
                        </p>
                        <div className="mt-4 p-4 bg-muted rounded-lg">
                            <p className="font-medium">Akash Talks</p>
                            <p className="text-muted-foreground">GN-34/1, Aurora Water Front, Unit 21, 11th Floor</p>
                            <p className="text-muted-foreground">Sector V, Salt Lake, Kolkata - 700091</p>
                            <p className="text-muted-foreground">Email: akashtalks.in@gmail.com</p>
                            <p className="text-muted-foreground">Phone: +91 98748 78782</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
