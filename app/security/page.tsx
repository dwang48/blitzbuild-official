import { Metadata } from "next";
import { Shield, Lock, FileCheck, Server } from "lucide-react";

export const metadata: Metadata = {
  title: "Security | Blitzbuild Software",
  description: "Enterprise-grade security for your AI and automation solutions",
};

export default function SecurityPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Enterprise-Grade Security</h1>
        <p className="text-xl text-muted-foreground">
          We implement rigorous security measures to protect your data and systems
        </p>
      </div>

      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-lg bg-card p-6 shadow-sm">
          <div className="mb-4">
            <Shield className="size-10 text-primary" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Data Protection</h3>
          <p className="text-muted-foreground">
            All data is encrypted both in transit and at rest using industry-standard AES-256 encryption. 
            We implement strict access controls and regular security audits to ensure your information remains protected.
          </p>
        </div>

        <div className="rounded-lg bg-card p-6 shadow-sm">
          <div className="mb-4">
            <Lock className="size-10 text-primary" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Secure Authentication</h3>
          <p className="text-muted-foreground">
            Multi-factor authentication, single sign-on capabilities, and role-based access controls 
            ensure only authorized personnel can access your systems and data.
          </p>
        </div>

        <div className="rounded-lg bg-card p-6 shadow-sm">
          <div className="mb-4">
            <FileCheck className="size-10 text-primary" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Compliance</h3>
          <p className="text-muted-foreground">
            Our solutions are compliant with GDPR, HIPAA, SOC 2, and other relevant regulations. 
            We maintain comprehensive audit trails and can provide documentation for your compliance requirements.
          </p>
        </div>

        <div className="rounded-lg bg-card p-6 shadow-sm">
          <div className="mb-4">
            <Server className="size-10 text-primary" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Infrastructure Security</h3>
          <p className="text-muted-foreground">
            Our infrastructure is hosted in secure, SOC 2 compliant data centers with 24/7 monitoring, 
            intrusion detection, and regular penetration testing to identify and address vulnerabilities.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl rounded-lg bg-muted p-8">
        <h2 className="mb-4 text-2xl font-bold">Our Security Commitment</h2>
        <p className="mb-4">
          Security is not just a feature of our products—it&apos;s foundational to everything we build. 
          Our dedicated security team works continuously to stay ahead of emerging threats and 
          implement best practices across all our solutions.
        </p>
        <p>
          We&apos;re happy to provide detailed security documentation and answer any questions during 
          your evaluation process. Contact our security team at security@yourcompany.com.
        </p>
      </div>
    </div>
  );
}