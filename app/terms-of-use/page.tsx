import LegalLayout from "@/components/layout/LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — Wisher",
  description:
    "Read the terms and conditions governing your use of the Wisher gifting platform.",
};

export default function TermsOfUsePage() {
  return (
    <LegalLayout title="Terms of Use" lastUpdated="June 2025">
      <p>
        These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use
        of the Wisher mobile application and website (collectively, the
        &ldquo;Service&rdquo;) operated by Wisher (&ldquo;we&rdquo;,
        &ldquo;our&rdquo;, or &ldquo;us&rdquo;). By creating an account or
        using the Service, you agree to be bound by these Terms.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 18 years old and a resident of Nigeria to use the
        Service. By using Wisher, you represent and warrant that you meet these
        requirements.
      </p>

      <h2>2. Your Account</h2>
      <ul>
        <li>You are responsible for maintaining the security of your account credentials.</li>
        <li>You must provide accurate and complete information when registering.</li>
        <li>You may not share your account with others or create multiple accounts.</li>
        <li>You must notify us immediately at{" "}
          <a href="mailto:support@wishers.app">support@wishers.app</a> if you
          suspect unauthorised access to your account.
        </li>
      </ul>

      <h2>3. Wishlists and Content</h2>
      <h3>What you can do</h3>
      <ul>
        <li>Create wishlists with items, images, descriptions, and goal amounts.</li>
        <li>Share your unique wishlist link with friends, family, and on social media.</li>
        <li>Receive contributions from anyone who has your wishlist link.</li>
        <li>Boost your wishlist to appear in the public Featured section.</li>
      </ul>
      <h3>What you must not do</h3>
      <ul>
        <li>Create wishlists for fraudulent, deceptive, or illegal purposes.</li>
        <li>Impersonate another person or entity.</li>
        <li>Upload content that is unlawful, harmful, obscene, or infringes third-party rights.</li>
        <li>Use the Service to solicit funds under false pretences.</li>
        <li>Attempt to circumvent our payment or withdrawal systems.</li>
      </ul>

      <h2>4. Payments and Wallet</h2>
      <ul>
        <li>
          All payments are processed by{" "}
          <a href="https://paystack.com" target="_blank" rel="noopener noreferrer">
            Paystack
          </a>{" "}
          and subject to their terms and fees.
        </li>
        <li>Contributions made to wishlists are credited to the wishlist owner&apos;s Wisher wallet.</li>
        <li>Withdrawals are transferred to the Nigerian bank account linked to your profile.</li>
        <li>We reserve the right to apply processing fees; current fees are displayed within the app before any transaction.</li>
        <li>Contributions are non-refundable once confirmed by the contributor, except where required by Nigerian consumer protection law.</li>
      </ul>

      <h2>5. Boost Feature</h2>
      <ul>
        <li>Paying to Boost a wishlist places it in the public Featured section for the duration purchased.</li>
        <li>Boost fees are non-refundable.</li>
        <li>We reserve the right to remove any Boosted wishlist that violates these Terms.</li>
      </ul>

      <h2>6. Referral Programme</h2>
      <ul>
        <li>You earn 1% of each withdrawal made by users you refer.</li>
        <li>Referral earnings are credited to your Wisher wallet.</li>
        <li>We reserve the right to modify or discontinue the referral programme at any time with reasonable notice.</li>
        <li>Fraudulent referrals will result in account termination and forfeiture of earnings.</li>
      </ul>

      <h2>7. Intellectual Property</h2>
      <p>
        The Wisher name, logo, and Service content are the property of Wisher
        and protected by applicable intellectual property laws. You may not
        copy, modify, or distribute our branding without written permission.
      </p>
      <p>
        You retain ownership of the content you upload (wishlist items, images,
        descriptions). By uploading content, you grant us a non-exclusive,
        royalty-free licence to display and serve that content as part of
        operating the Service.
      </p>

      <h2>8. Termination</h2>
      <p>
        We may suspend or terminate your account at any time if you violate
        these Terms, engage in fraudulent activity, or if required by law.
        Upon termination, your right to use the Service ceases immediately. Any
        balance in your wallet at the time of termination will be processed in
        accordance with applicable law.
      </p>
      <p>
        You may delete your account at any time from within the app settings.
      </p>

      <h2>9. Disclaimers</h2>
      <p>
        The Service is provided &ldquo;as is&rdquo; without warranties of any
        kind, express or implied. We do not guarantee that the Service will be
        uninterrupted, error-free, or free from viruses. We are not responsible
        for the content of third-party wishlist items or the conduct of
        contributors.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by Nigerian law, Wisher shall not be
        liable for any indirect, incidental, special, or consequential damages
        arising from your use of the Service, including loss of contributions,
        withdrawal delays caused by third-party payment providers, or
        unauthorised account access resulting from your failure to secure your
        credentials.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the Federal Republic of Nigeria.
        Any disputes shall be submitted to the exclusive jurisdiction of the
        courts of Lagos State, Nigeria.
      </p>

      <h2>12. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. We will notify you of
        material changes via the app. Continued use of the Service after changes
        take effect constitutes your acceptance of the revised Terms.
      </p>

      <h2>13. Contact Us</h2>
      <p>Questions about these Terms? Reach us at:</p>
      <ul>
        <li>
          Email: <a href="mailto:support@wishers.app">support@wishers.app</a>
        </li>
        <li>Website: wishers.app</li>
      </ul>
    </LegalLayout>
  );
}
