import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Lock,
  Scale,
  FileText,
  MapPin,
  Mail,
  Phone,
  UserCheck,
  Server,
  Clock,
  AlertCircle,
  CheckCircle2,
  Database,
  Smartphone,
  Code2,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Quantura Technologies",
  description:
    "Privacy Policy of Quantura Technologies formulated in compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act) and the Information Technology Act, 2000 of India.",
};

const quickHighlights = [
  {
    icon: ShieldCheck,
    title: "DPDP Act, 2023 Compliant",
    description:
      "Formulated under India's Digital Personal Data Protection Act, 2023 and the IT Act, 2000. Quantura acts as a responsible Data Fiduciary.",
  },
  {
    icon: Lock,
    title: "Strict Purpose Limitation",
    description:
      "We collect and process personal data exclusively for specified, lawful purposes with explicit user consent.",
  },
  {
    icon: Database,
    title: "Product-Specific Boundaries",
    description:
      "From ByKm's permission-based 15km hyperlocal discovery to WaForge's transient API routing and WhatsApp Status Saver's on-device storage, our products isolate and minimize data collection.",
  },
  {
    icon: UserCheck,
    title: "Empowered Data Principals",
    description:
      "Under Indian law, you have full statutory rights to access, correct, erase, withdraw consent, and nominate a representative for your data.",
  },
];

const tableOfContents = [
  { id: "scope", label: "1. Scope & Applicability" },
  { id: "legal-framework", label: "2. Indian Legal & Regulatory Framework" },
  { id: "data-we-collect", label: "3. Information We Collect (Product & Service Context)" },
  { id: "purpose-lawful-grounds", label: "4. Purpose & Lawful Grounds for Processing" },
  { id: "security-measures", label: "5. Reasonable Security Practices & Procedures" },
  { id: "data-retention", label: "6. Data Retention & Deletion Policy" },
  { id: "principal-rights", label: "7. Rights of Data Principals (Under DPDP Act)" },
  { id: "principal-duties", label: "8. Duties of Data Principals" },
  { id: "children-privacy", label: "9. Protection of Children's Personal Data" },
  { id: "third-parties-transfers", label: "10. Third-Party Disclosures & Cross-Border Transfers" },
  { id: "grievance-officer", label: "11. Grievance Redressal Mechanism & Officer" },
  { id: "updates-contact", label: "12. Policy Updates & Contact Information" },
];

export default function PrivacyPage() {
  const lastUpdated = "October 25, 2026";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="w-full py-16 md:py-24 bg-secondary border-b border-border/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Badge variant="outline" className="border-primary/40 text-primary px-3 py-1 bg-primary/5">
                <Scale className="w-3.5 h-3.5 mr-1.5" />
                Indian Legal Compliance
              </Badge>
              <Badge variant="outline" className="border-border/60 text-muted-foreground px-3 py-1">
                DPDP Act, 2023 & IT Act, 2000
              </Badge>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
              Privacy Policy
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed">
              At <strong className="text-foreground">Quantura Technologies</strong>, we are committed to safeguarding
              your privacy, respecting your personal data, and maintaining the highest standards of data security in
              compliance with the laws of the Republic of India.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-muted-foreground pt-2">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" />
                Last Updated: {lastUpdated}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary" />
                Jaggaiahpet, Andhra Pradesh, India
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* Left Sidebar: Quick Nav (Desktop) */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-24 space-y-6">
              <div className="rounded-xl border border-border/60 bg-card p-5 shadow-sm">
                <h3 className="text-sm font-semibold tracking-wide uppercase text-foreground mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  Table of Contents
                </h3>
                <nav className="space-y-1">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-xs py-1.5 px-2.5 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Grievance Quick Box */}
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 space-y-3">
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  <AlertCircle className="w-4 h-4" />
                  Grievance Redressal
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Have a data privacy question or request? Under the DPDP Act 2023, our Grievance Officer responds to all
                  requests within 48 hours.
                </p>
                <Button size="sm" asChild className="w-full">
                  <a href="#grievance-officer">View Officer Details</a>
                </Button>
              </div>
            </aside>

            {/* Right Column: Policy Sections */}
            <main className="lg:col-span-8 space-y-12">
              {/* Highlights Cards */}
              <div className="grid gap-4 sm:grid-cols-2">
                {quickHighlights.map((hl, i) => {
                  const Icon = hl.icon;
                  return (
                    <Card key={i} className="border-border/60 bg-card/60 backdrop-blur-sm">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            <Icon className="w-4 h-4" />
                          </div>
                          <CardTitle className="text-base font-semibold">{hl.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {hl.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Section 1 */}
              <article id="scope" className="space-y-4 pt-4 scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2 border-b border-border/40 pb-2">
                  <span className="text-primary text-lg">01.</span> Scope & Applicability
                </h2>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    This Privacy Policy applies to personal data collected and processed by{" "}
                    <strong className="text-foreground">Quantura Technologies</strong> (referred to as &quot;Quantura&quot;,
                    &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), having its principal place of business at{" "}
                    <span className="text-foreground font-medium">
                      6-134, Seetharam Puram, Jaggaiahpet, Andhra Pradesh - 521175, India
                    </span>.
                  </p>
                  <p>
                    This policy governs all digital interactions, platforms, mobile applications, APIs, and software
                    solutions developed, hosted, or operated by Quantura, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1.5 text-sm">
                    <li>
                      <strong className="text-foreground">Quantura Official Website</strong> (quanturatech.com / associated
                      domains) and inquiry portals.
                    </li>
                    <li>
                      <strong className="text-foreground">WaForge:</strong> AI-powered WhatsApp API gateway and developer
                      automation platform.
                    </li>
                    <li>
                      <strong className="text-foreground">E-Court Automate:</strong> Daily court case status tracking and email
                      digest automation service.
                    </li>
                    <li>
                      <strong className="text-foreground">ByKm:</strong> Hyperlocal neighbourhood discovery application operating
                      within a 15km radius.
                    </li>
                    <li>
                      <strong className="text-foreground">WhatsApp Status Saver:</strong> Media utility application for Android.
                    </li>
                    <li>
                      <strong className="text-foreground">Town Trade:</strong> Local commerce and business directory platform.
                    </li>
                    <li>
                      <strong className="text-foreground">Custom Software & AI Consulting:</strong> Bespoke digital solutions,
                      web applications, and cloud services delivered to enterprise clients.
                    </li>
                  </ul>
                </div>
              </article>

              {/* Section 2 */}
              <article id="legal-framework" className="space-y-4 pt-4 scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2 border-b border-border/40 pb-2">
                  <span className="text-primary text-lg">02.</span> Indian Legal & Regulatory Framework
                </h2>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    This policy is formulated and published pursuant to statutory requirements in India, specifically:
                  </p>
                  <div className="grid gap-3 pt-2">
                    <div className="p-4 rounded-lg border border-border/60 bg-secondary/40 space-y-1">
                      <div className="font-semibold text-foreground text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        The Digital Personal Data Protection Act, 2023 (DPDP Act, 2023)
                      </div>
                      <p className="text-xs text-muted-foreground pl-6">
                        Governing the processing of digital personal data within India and recognizing Quantura
                        Technologies as a <strong>Data Fiduciary</strong> and you as the <strong>Data Principal</strong>.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg border border-border/60 bg-secondary/40 space-y-1">
                      <div className="font-semibold text-foreground text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        The Information Technology Act, 2000 (IT Act) & Section 43A
                      </div>
                      <p className="text-xs text-muted-foreground pl-6">
                        Complying with the Information Technology (Reasonable Security Practices and Procedures and
                        Sensitive Personal Data or Information) Rules, 2011 (SPDI Rules).
                      </p>
                    </div>

                    <div className="p-4 rounded-lg border border-border/60 bg-secondary/40 space-y-1">
                      <div className="font-semibold text-foreground text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021
                      </div>
                      <p className="text-xs text-muted-foreground pl-6">
                        Ensuring fair practices, timebound grievance redressal, and intermediary due diligence across our
                        online platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Section 3 */}
              <article id="data-we-collect" className="space-y-4 pt-4 scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2 border-b border-border/40 pb-2">
                  <span className="text-primary text-lg">03.</span> Information We Collect (Product & Service Context)
                </h2>
                <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    We collect personal data strictly on a need-to-know basis to provide reliable software services. The
                    types of data collected depend upon the specific product or service you interact with:
                  </p>

                  <div className="space-y-4">
                    {/* Website */}
                    <div className="rounded-lg border border-border/60 p-4 space-y-2 bg-card">
                      <h4 className="font-semibold text-foreground text-sm sm:text-base flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        A. Website Inquiries & Contact Forms
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        When you reach out through our contact forms or email us, we collect your full name, email address,
                        phone number, company name, and details of your project or inquiry. This data is used solely to
                        respond to your communication and evaluate project requirements.
                      </p>
                    </div>

                    {/* WaForge */}
                    <div className="rounded-lg border border-border/60 p-4 space-y-2 bg-card">
                      <h4 className="font-semibold text-foreground text-sm sm:text-base flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-primary" />
                        B. WaForge (API Gateway & Developer Suite)
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        We process developer registration details, account credentials, JWT tokens, API keys, and webhook
                        URLs. For WhatsApp message transmission, WaForge acts as an API conduit; message payloads are
                        routed transiently over encrypted channels and are <strong>not stored</strong> on our persistent
                        databases beyond technical transmission logs required for rate-limiting, error diagnostics, and
                        audit compliance.
                      </p>
                    </div>

                    {/* E-Court Automate */}
                    <div className="rounded-lg border border-border/60 p-4 space-y-2 bg-card">
                      <h4 className="font-semibold text-foreground text-sm sm:text-base flex items-center gap-2">
                        <Scale className="w-4 h-4 text-primary" />
                        C. E-Court Automate
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        To deliver automated daily court case updates to your email, we store the case tracking numbers,
                        court forum identifiers, and recipient email address specified by you. Case status records fetched
                        are derived strictly from publicly accessible Indian judicial portals (such as e-Courts India) and
                        are processed on your explicit instruction.
                      </p>
                    </div>

                    {/* ByKm */}
                    <div className="rounded-lg border border-border/60 p-4 space-y-2 bg-card">
                      <h4 className="font-semibold text-foreground text-sm sm:text-base flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        D. ByKm & Hyperlocal Services
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        ByKm provides neighbourhood discovery within a 15km radius. We request access to your device GPS /
                        approximate location <strong>only with your explicit runtime permission</strong>. Your location is
                        used strictly in real-time to compute proximity to nearby businesses, houses, and services. We do
                        not track your location continuously in the background when the app is not in active use.
                      </p>
                    </div>

                    {/* WhatsApp Status Saver */}
                    <div className="rounded-lg border border-border/60 p-4 space-y-2 bg-card">
                      <h4 className="font-semibold text-foreground text-sm sm:text-base flex items-center gap-2">
                        <Smartphone className="w-4 h-4 text-primary" />
                        E. WhatsApp Status Saver (Mobile App)
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        WhatsApp Status Saver operates as a local utility on your device. Storage permissions are used
                        solely to read and save media (photos and videos) locally into your device gallery upon your direct
                        action. <strong>No media files or personal contacts are ever uploaded, transmitted, or backed up to Quantura servers.</strong>
                      </p>
                    </div>

                    {/* Analytics */}
                    <div className="rounded-lg border border-border/60 p-4 space-y-2 bg-card">
                      <h4 className="font-semibold text-foreground text-sm sm:text-base flex items-center gap-2">
                        <Server className="w-4 h-4 text-primary" />
                        F. Technical Telemetry & Cookies
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Our website uses privacy-friendly telemetry (e.g., Vercel Analytics) to track anonymized site
                        performance, visitor counts, and page load statistics without tracking individual browsing
                        histories across third-party websites. Essential cookies may be utilized for session management.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Section 4 */}
              <article id="purpose-lawful-grounds" className="space-y-4 pt-4 scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2 border-b border-border/40 pb-2">
                  <span className="text-primary text-lg">04.</span> Purpose & Lawful Grounds for Processing
                </h2>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    In accordance with Section 4 and Section 6 of the DPDP Act 2023, Quantura processes personal data
                    strictly for lawful purposes on one or more of the following grounds:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>
                      <strong className="text-foreground">Explicit Consent:</strong> Where you have provided informed,
                      unambiguous consent (e.g., subscribing to case alerts, allowing device location, submitting a query).
                    </li>
                    <li>
                      <strong className="text-foreground">Performance of a Contract:</strong> Necessary for executing service
                      agreements, API provisioning, billing, and providing contracted software development deliverables.
                    </li>
                    <li>
                      <strong className="text-foreground">Certain Legitimate Uses (Section 7 DPDP Act):</strong> Safeguarding
                      system security, preventing unauthorized access or fraud, and maintaining business continuity.
                    </li>
                    <li>
                      <strong className="text-foreground">Legal & Regulatory Compliance:</strong> Fulfilling mandatory
                      obligations under Indian laws, tax regulations, court orders, or governmental directives.
                    </li>
                  </ul>
                </div>
              </article>

              {/* Section 5 */}
              <article id="security-measures" className="space-y-4 pt-4 scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2 border-b border-border/40 pb-2">
                  <span className="text-primary text-lg">05.</span> Reasonable Security Practices & Procedures
                </h2>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    In compliance with Section 43A of the IT Act, 2000 and the SPDI Rules, 2011, Quantura maintains comprehensive
                    technical, physical, and administrative security measures:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2 pt-2">
                    <div className="border border-border/60 rounded-lg p-3 bg-secondary/30 space-y-1">
                      <div className="font-semibold text-xs sm:text-sm text-foreground flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-primary" />
                        Encryption in Transit & Rest
                      </div>
                      <p className="text-xs text-muted-foreground">
                        All web and API traffic is secured using TLS 1.3 / HTTPS encryption. Sensitive credentials and keys
                        are hashed and securely encrypted.
                      </p>
                    </div>

                    <div className="border border-border/60 rounded-lg p-3 bg-secondary/30 space-y-1">
                      <div className="font-semibold text-xs sm:text-sm text-foreground flex items-center gap-1.5">
                        <UserCheck className="w-3.5 h-3.5 text-primary" />
                        Role-Based Access Control (RBAC)
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Personal data is restricted strictly to authorized personnel who require access for legitimate
                        development or operational support.
                      </p>
                    </div>

                    <div className="border border-border/60 rounded-lg p-3 bg-secondary/30 space-y-1">
                      <div className="font-semibold text-xs sm:text-sm text-foreground flex items-center gap-1.5">
                        <Server className="w-3.5 h-3.5 text-primary" />
                        Infrastructure Security
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Our cloud infrastructure leverages enterprise-grade security standards with firewall protection,
                        rate-limiting, and regular security patching.
                      </p>
                    </div>

                    <div className="border border-border/60 rounded-lg p-3 bg-secondary/30 space-y-1">
                      <div className="font-semibold text-xs sm:text-sm text-foreground flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                        Audit Trails & Vulnerability Scanning
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Regular automated code checks and system logging ensure suspicious activities and potential
                        anomalies are flagged swiftly.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Section 6 */}
              <article id="data-retention" className="space-y-4 pt-4 scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2 border-b border-border/40 pb-2">
                  <span className="text-primary text-lg">06.</span> Data Retention & Deletion Policy
                </h2>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    We retain personal data only for as long as necessary to fulfill the specific purposes outlined in this
                    policy or as mandated under Indian statutory law:
                  </p>
                  <ul className="list-disc pl-6 space-y-1.5 text-sm">
                    <li>
                      <strong className="text-foreground">Inquiry Data:</strong> Retained for up to 12 months following the
                      conclusion of discussions, unless converted into an active client contract.
                    </li>
                    <li>
                      <strong className="text-foreground">API & Server Logs:</strong> Rotated and deleted within 90 days,
                      retained only for diagnostic and security auditing purposes.
                    </li>
                    <li>
                      <strong className="text-foreground">Service & Account Data:</strong> Retained for the duration of your
                      active account, and deleted within 30 days upon receiving a valid account closure or erasure request.
                    </li>
                    <li>
                      <strong className="text-foreground">Tax & Legal Records:</strong> Retained as required under the
                      Companies Act, 2013 and Goods and Services Tax (GST) laws of India.
                    </li>
                  </ul>
                  <p className="text-sm">
                    Once the retention period expires or upon a valid erasure request, personal data is irreversibly
                    deleted from our active systems and backups or permanently anonymized.
                  </p>
                </div>
              </article>

              {/* Section 7 */}
              <article id="principal-rights" className="space-y-4 pt-4 scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2 border-b border-border/40 pb-2">
                  <span className="text-primary text-lg">07.</span> Rights of Data Principals (Under DPDP Act, 2023)
                </h2>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    Under Chapter III of the Digital Personal Data Protection Act, 2023, you are endowed with distinct
                    enforceable rights with respect to your digital personal data:
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="p-4 rounded-lg border border-border/60 bg-card space-y-1">
                      <h4 className="font-semibold text-foreground text-sm">
                        1. Right to Access Information (Section 11)
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        You have the right to request a summary of personal data being processed by us, a description of
                        the processing activities undertaken, and the identities of any Data Processors or third parties
                        with whom such data has been shared.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg border border-border/60 bg-card space-y-1">
                      <h4 className="font-semibold text-foreground text-sm">
                        2. Right to Correction and Erasure (Section 12)
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        You may request the correction of inaccurate or misleading personal data, completion of incomplete
                        data, updating of outdated records, or erasure of personal data that is no longer necessary for the
                        purpose for which it was processed.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg border border-border/60 bg-card space-y-1">
                      <h4 className="font-semibold text-foreground text-sm">
                        3. Right of Grievance Redressal (Section 13)
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        You have the right to readily accessible grievance redressal mechanisms provided by Quantura in
                        respect of any act or omission regarding your data rights.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg border border-border/60 bg-card space-y-1">
                      <h4 className="font-semibold text-foreground text-sm">
                        4. Right to Nominate (Section 14)
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        You have the right to designate an individual who, in the event of your death or incapacity, shall
                        exercise the rights of the Data Principal on your behalf.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg border border-border/60 bg-card space-y-1">
                      <h4 className="font-semibold text-foreground text-sm">
                        5. Right to Withdraw Consent
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Where processing is based on consent, you may withdraw your consent at any time as easily as it was
                        given, without affecting the lawfulness of processing carried out prior to withdrawal.
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground pt-1">
                    To exercise any of these statutory rights, please send a written request to our Grievance Officer at{" "}
                    <a href="mailto:grievance@quantura.com" className="text-primary underline">
                      grievance@quantura.com
                    </a>.
                  </p>
                </div>
              </article>

              {/* Section 8 */}
              <article id="principal-duties" className="space-y-4 pt-4 scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2 border-b border-border/40 pb-2">
                  <span className="text-primary text-lg">08.</span> Duties of Data Principals
                </h2>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    As recognized under Section 15 of the DPDP Act 2023, users interacting with our services also have
                    certain statutory responsibilities:
                  </p>
                  <ul className="list-disc pl-6 space-y-1.5 text-sm">
                    <li>Do not impersonate another person when providing your personal data for any purpose.</li>
                    <li>Do not suppress any material information when providing personal data for official registrations.</li>
                    <li>Ensure that all information provided to Quantura is accurate, authentic, and complete.</li>
                    <li>
                      Do not register false, frivolous, or vexatious grievances or complaints with the Grievance Officer.
                    </li>
                  </ul>
                </div>
              </article>

              {/* Section 9 */}
              <article id="children-privacy" className="space-y-4 pt-4 scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2 border-b border-border/40 pb-2">
                  <span className="text-primary text-lg">09.</span> Protection of Children&apos;s Personal Data
                </h2>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    In strict compliance with Section 9 of the DPDP Act 2023:
                  </p>
                  <ul className="list-disc pl-6 space-y-1.5 text-sm">
                    <li>
                      Quantura does not knowingly process personal data of children under eighteen (18) years of age
                      without obtaining verifiable parental or lawful guardian consent.
                    </li>
                    <li>
                      We strictly refrain from undertaking tracking, behavioral monitoring, or targeted advertising
                      directed at children.
                    </li>
                    <li>
                      We do not engage in any processing of personal data that is likely to cause any detrimental effect on
                      the well-being of a child.
                    </li>
                  </ul>
                </div>
              </article>

              {/* Section 10 */}
              <article id="third-parties-transfers" className="space-y-4 pt-4 scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2 border-b border-border/40 pb-2">
                  <span className="text-primary text-lg">10.</span> Third-Party Disclosures & Cross-Border Transfers
                </h2>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong className="text-foreground">No Sale of Personal Data:</strong> Quantura does not sell, trade,
                    rent, or commercialize your personal information to third-party data brokers or advertisers.
                  </p>
                  <p>
                    We may engage vetted third-party service providers (such as cloud hosting, transactional email relays,
                    and telemetry infrastructure) strictly under confidentiality and Data Processing Agreements that
                    mandate compliance with Indian data privacy standards.
                  </p>
                  <p>
                    <strong className="text-foreground">Cross-Border Data Transfers:</strong> Any transfer of digital
                    personal data outside the territory of India is conducted strictly in accordance with Section 16 of the
                    DPDP Act 2023 and the guidelines or restrictions specified by the Central Government of India.
                  </p>
                  <p>
                    <strong className="text-foreground">Legal & Law Enforcement Disclosures:</strong> We may disclose
                    information when legally mandated by a formal warrant, court order, or subpoena issued by a competent
                    judicial or regulatory authority in India.
                  </p>
                </div>
              </article>

              {/* Section 11 - Grievance Redressal Card */}
              <article id="grievance-officer" className="space-y-4 pt-4 scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2 border-b border-border/40 pb-2">
                  <span className="text-primary text-lg">11.</span> Grievance Redressal Mechanism & Officer
                </h2>
                <p className="text-sm text-muted-foreground">
                  In accordance with the Information Technology Act, 2000, the IT Rules, 2021, and Section 13 of the Digital
                  Personal Data Protection Act, 2023, the contact details of our designated Grievance Redressal Officer are
                  provided below:
                </p>

                <Card className="border-primary/30 bg-card shadow-sm">
                  <CardHeader className="border-b border-border/40 pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <CardTitle className="text-lg font-bold text-foreground">
                          Grievance Redressal Officer
                        </CardTitle>
                        <p className="text-xs text-muted-foreground">Quantura Technologies</p>
                      </div>
                      <Badge variant="secondary" className="w-fit text-xs bg-primary/10 text-primary border-primary/20">
                        Statutory Indian Grievance Desk
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4 text-sm">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="flex items-start gap-3">
                        <UserCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs text-muted-foreground">Designated Officer</div>
                          <div className="font-medium text-foreground">Naresh V.</div>
                          <div className="text-xs text-muted-foreground">Chief Technology Officer / Grievance Officer</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs text-muted-foreground">Official Email</div>
                          <a
                            href="mailto:grievance@quantura.com"
                            className="font-medium text-primary hover:underline"
                          >
                            grievance@quantura.com
                          </a>
                          <div className="text-xs text-muted-foreground">Alt: contact@quantura.com</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs text-muted-foreground">Contact Phone</div>
                          <div className="font-medium text-foreground">+91 9494037782</div>
                          <div className="text-xs text-muted-foreground">Mon – Fri, 10:00 AM – 6:00 PM IST</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs text-muted-foreground">Physical Office Address</div>
                          <div className="font-medium text-foreground">
                            6-134, Seetharam Puram, Jaggaiahpet,
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Andhra Pradesh - 521175, India
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-md bg-secondary/60 p-3 text-xs text-muted-foreground space-y-1">
                      <div className="font-semibold text-foreground flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        Statutory Resolution Timeline:
                      </div>
                      <p>
                        We acknowledge all written privacy-related communications within <strong>48 hours</strong> and
                        provide a formal response or resolution within <strong>30 days</strong> from the date of receipt.
                      </p>
                      <p className="pt-1">
                        If you are not satisfied with the resolution provided by our Grievance Officer, you have the right
                        to approach the <strong>Data Protection Board of India (DPBI)</strong> in accordance with Section 13
                        and Section 28 of the DPDP Act, 2023.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </article>

              {/* Section 12 */}
              <article id="updates-contact" className="space-y-4 pt-4 scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2 border-b border-border/40 pb-2">
                  <span className="text-primary text-lg">12.</span> Policy Updates & Contact Information
                </h2>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    Quantura Technologies reserves the right to update or modify this Privacy Policy from time to time to
                    reflect changes in our technological infrastructure, products, or applicable legal guidelines issued
                    by the Government of India.
                  </p>
                  <p>
                    The &quot;Last Updated&quot; date at the top of this policy indicates when the most recent changes were
                    made. Continued use of our website and services following any revisions indicates your acknowledgment
                    of the updated terms.
                  </p>
                </div>

                {/* Contact Box */}
                <div className="p-6 rounded-xl border border-border/60 bg-secondary/30 mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground text-base">Have additional privacy questions?</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Reach out to our team directly. We are happy to assist you.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button asChild variant="outline" size="sm">
                      <Link href="/contact">Contact Page</Link>
                    </Button>
                    <Button asChild size="sm">
                      <a href="mailto:contact@quantura.com">Email Us</a>
                    </Button>
                  </div>
                </div>
              </article>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
