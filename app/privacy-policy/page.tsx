import LegalLayout from "@/components/layout/LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Wisher",
  description:
    "Learn how Wisher collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="June 2025">
      <p>
        Welcome to Wisher (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
        &ldquo;us&rdquo;). We are committed to protecting your personal
        information and your right to privacy. This Privacy Policy explains how
        we collect, use, disclose, and safeguard your information when you use
        the Wisher mobile application and website (collectively, the
        &ldquo;Service&rdquo;).
      </p>
      <p>
        Please read this policy carefully. If you disagree with its terms,
        please discontinue use of the Service.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>Information you provide directly</h3>
      <ul>
        <li>Account registration details (name, email address, phone number)</li>
        <li>Profile information and wishlist content (titles, descriptions, images)</li>
        <li>Bank account details for withdrawal purposes</li>
        <li>Communications you send us</li>
      </ul>

      <h3>Information collected automatically</h3>
      <ul>
        <li>Device information (device type, operating system, unique device identifiers)</li>
        <li>Usage data (pages visited, features used, time spent)</li>
        <li>Log data (IP address, browser type, referring URLs)</li>
        <li>Wishlist view and contribution activity</li>
      </ul>

      <h3>Information from third parties</h3>
      <ul>
        <li>
          Payment information processed by{" "}
          <a
            href="https://paystack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Paystack
          </a>{" "}
          — we do not store your card details directly
        </li>
        <li>Social media profile information if you link your accounts</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Create and manage your Wisher account</li>
        <li>Process wishlist contributions and wallet withdrawals</li>
        <li>Display your wishlists to contributors you share links with</li>
        <li>Send transactional notifications (contributions received, withdrawal status)</li>
        <li>Operate the Boost feature to feature your wishlist publicly</li>
        <li>Calculate and distribute referral earnings</li>
        <li>Improve and personalise the Service</li>
        <li>Comply with legal obligations and prevent fraud</li>
      </ul>

      <h2>3. Sharing Your Information</h2>
      <p>
        We do not sell your personal data. We may share information with:
      </p>
      <ul>
        <li>
          <strong>Paystack</strong> — to process payments and withdrawals
        </li>
        <li>
          <strong>Firebase / Google Cloud</strong> — for database and infrastructure services
        </li>
        <li>
          <strong>Cloudinary</strong> — to store and serve wishlist images
        </li>
        <li>
          <strong>Law enforcement</strong> — when required by applicable Nigerian law or a valid court order
        </li>
      </ul>
      <p>
        When you share your wishlist link, the wishlist title, description,
        cover image, goal amount, and progress are visible to anyone with the
        link.
      </p>

      <h2>4. Data Storage and Security</h2>
      <p>
        Your data is stored on servers located within secure cloud
        infrastructure. We implement industry-standard security measures
        including encryption in transit (TLS) and access controls. However, no
        method of transmission over the internet is 100% secure, and we cannot
        guarantee absolute security.
      </p>
      <p>
        We retain your personal data for as long as your account is active, and
        for up to 5 years after account deletion to comply with Nigerian
        financial regulations.
      </p>

      <h2>5. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Correct inaccurate or incomplete data</li>
        <li>Request deletion of your account and associated data</li>
        <li>Opt out of non-transactional marketing communications</li>
        <li>Lodge a complaint with the Nigeria Data Protection Commission (NDPC)</li>
      </ul>
      <p>
        To exercise these rights, contact us at{" "}
        <a href="mailto:support@wishers.app">support@wishers.app</a>.
      </p>

      <h2>6. Cookies and Tracking</h2>
      <p>
        The Wisher website uses essential cookies to maintain session state and
        remember your theme preference. We do not use advertising trackers or
        sell browsing data to third parties.
      </p>

      <h2>7. Children&apos;s Privacy</h2>
      <p>
        The Service is not directed to children under 13. We do not knowingly
        collect personal information from children under 13. If you believe we
        have collected such information, please contact us immediately.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of material changes by posting the new policy in the app and updating
        the &ldquo;last updated&rdquo; date above. Continued use of the Service
        after changes constitutes acceptance of the revised policy.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have questions or concerns about this Privacy Policy, please
        contact us:
      </p>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:support@wishers.app">support@wishers.app</a>
        </li>
        <li>Website: wishers.app</li>
      </ul>
    </LegalLayout>
  );
}
