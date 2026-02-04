import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy for Akash Talks - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                <p className="text-muted-foreground mb-8">Last updated: February 2026</p>

                <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Welcome to Akash Talks. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website akashtalks.in.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            We collect information that you voluntarily provide to us when you:
                        </p>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li>Fill out our contact or enquiry forms</li>
                            <li>Request a consultation or callback</li>
                            <li>Subscribe to our newsletter</li>
                            <li>Communicate with us via phone, email, or WhatsApp</li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            This information may include your name, phone number, email address, and any other details you choose to provide.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li>Provide admission counseling and guidance services</li>
                            <li>Respond to your inquiries and requests</li>
                            <li>Send you relevant updates about admissions and colleges</li>
                            <li>Improve our website and services</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">4. Data Protection</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We implement appropriate technical and organizational security measures to protect your personal information. However, no electronic transmission over the internet can be guaranteed to be 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">5. Third-Party Sharing</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We do not sell, trade, or rent your personal information to third parties. We may share your information with partner colleges only with your explicit consent to facilitate your admission process.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at akashtalks.in@gmail.com.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            If you have any questions about this Privacy Policy, please contact us at:
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
