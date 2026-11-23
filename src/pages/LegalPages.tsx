import React from "react";

interface LegalSection {
  title: string;
  content: string;
}

interface LegalPageProps {
  title: string;
  introduction: string;
  sections: LegalSection[];
}

function LegalPage({ title, introduction, sections }: LegalPageProps) {
  return (
    <article className="max-w-3xl mx-auto px-6 py-12 sm:py-16 space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
          Trievol
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          {title}
        </h1>
        <p className="text-sm text-slate-500">Last updated: 24 November 2026</p>
        <p className="text-sm sm:text-base leading-relaxed text-slate-600">{introduction}</p>
      </header>

      <div className="space-y-7">
        {sections.map((section) => (
          <section key={section.title} className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">{section.title}</h2>
            <p className="text-sm leading-7 text-slate-600">{section.content}</p>
          </section>
        ))}
      </div>
    </article>
  );
}

export function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      introduction="Trievol is operated by MD Ajharul Islam. This policy explains how information submitted through this website is handled."
      sections={[
        {
          title: "Information you provide",
          content: "The enquiry form may ask for your name, organisation, email address, and project details. Phone number, location and current website are optional. Please do not include sensitive personal information that is not needed to discuss your enquiry."
        },
        {
          title: "How information is used",
          content: "I use enquiry details to review and respond to your request and related follow-up. Submitted enquiries are sent through Gmail SMTP to trievolteam@gmail.com. Google processes the email as part of its mail service. The website host may process technical request and security logs to operate the site."
        },
        {
          title: "Retention and sharing",
          content: "Enquiry information is kept only as long as needed to handle the enquiry and related follow-up, then deleted unless it must be retained for a legal requirement. Enquiry details are not sold. Email delivery and website hosting providers process information as needed to provide those services."
        },
        {
          title: "Cookies and tracking",
          content: "This website does not currently use analytics, advertising pixels or non-essential tracking cookies. See the Cookie Policy for details."
        },
        {
          title: "Your requests and contact",
          content: "You may contact me to ask about, correct or request deletion of enquiry information, subject to applicable law. Email trievolteam@gmail.com. This policy is intended as a plain-language summary and does not replace advice about legal obligations that apply to a particular situation."
        }
      ]}
    />
  );
}

export function WebsiteTerms() {
  return (
    <LegalPage
      title="Website Terms"
      introduction="These terms cover use of the Trievol website. They do not form a contract for paid services."
      sections={[
        {
          title: "Website information",
          content: "Website content is provided for general information and may be updated. It is not a promise of a particular result, price, delivery date or service availability."
        },
        {
          title: "Using this website",
          content: "Use the website lawfully and do not attempt to disrupt it, gain unauthorised access, or misuse its enquiry form. Website text, design and project material may not be copied or reused without permission from the relevant rights holder. Client names, marks and supplied content remain the property of their respective owners."
        },
        {
          title: "External websites",
          content: "Links to other websites are provided for convenience. Trievol does not control their content, privacy practices or availability."
        },
        {
          title: "Separate service agreements",
          content: "Any work for a client is subject to a separate written proposal or agreement that sets out the agreed scope, fees, responsibilities and timing. That written agreement takes precedence over general website information."
        },
        {
          title: "Applicable law",
          content: "These website-use terms are governed by the laws of Bangladesh, subject to any mandatory laws that apply to you."
        }
      ]}
    />
  );
}

export function CookiePolicy() {
  return (
    <LegalPage
      title="Cookie Policy"
      introduction="This policy describes the cookies and similar tracking technologies currently used by the Trievol website."
      sections={[
        {
          title: "Current use",
          content: "Trievol does not currently use analytics, advertising or other non-essential tracking cookies on this website."
        },
        {
          title: "External links",
          content: "If you follow a link to a third-party website, that website may use its own cookies and tracking technologies. Its own privacy and cookie information will apply."
        },
        {
          title: "Changes",
          content: "If non-essential cookies or analytics are introduced, this policy will be updated and any consent required by applicable law will be requested."
        },
        {
          title: "Questions",
          content: "For questions about this policy, email trievolteam@gmail.com."
        }
      ]}
    />
  );
}
