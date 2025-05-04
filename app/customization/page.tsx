import { Metadata } from "next";
import { Settings, Code, Workflow, Zap, Puzzle, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customization | Your Company",
  description: "Tailor our AI and automation solutions to your specific business needs",
};

export default function CustomizationPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Tailored Solutions for Your Business</h1>
        <p className="text-xl text-muted-foreground">
          Our AI and automation platforms are designed to be customized to your specific workflows and requirements
        </p>
      </div>

      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="rounded-lg bg-card p-6 shadow-sm">
          <div className="mb-4">
            <Settings className="size-10 text-primary" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Configurable Workflows</h3>
          <p className="text-muted-foreground">
            Easily configure AI agents and automation workflows without coding. Our visual workflow builder 
            lets you design complex processes with drag-and-drop simplicity.
          </p>
        </div>

        <div className="rounded-lg bg-card p-6 shadow-sm">
          <div className="mb-4">
            <Code className="size-10 text-primary" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Developer APIs</h3>
          <p className="text-muted-foreground">
            For advanced customization, our comprehensive APIs and SDKs allow your developers to extend 
            functionality and integrate with your existing systems.
          </p>
        </div>

        <div className="rounded-lg bg-card p-6 shadow-sm">
          <div className="mb-4">
            <Puzzle className="size-10 text-primary" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Modular Architecture</h3>
          <p className="text-muted-foreground">
            Our solutions are built with a modular architecture, allowing you to select and implement 
            only the components you need, with the ability to add more as your needs evolve.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Customization Process</h2>
        <div className="relative">
          {/* Timeline connector */}
          <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-border"></div>
          
          {/* Timeline items */}
          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="pb-10 md:pr-12 md:text-right">
              <div className="absolute right-0 flex size-8 items-center justify-center rounded-full bg-primary md:left-1/2 md:-translate-x-1/2">
                <span className="font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Discovery</h3>
              <p className="text-muted-foreground">
                We begin with a thorough assessment of your current workflows, pain points, and objectives to 
                understand exactly what you need.
              </p>
            </div>
            <div className="pb-10 md:pl-12"></div>

            <div className="pb-10 md:pr-12 md:text-right"></div>
            <div className="pb-10 md:pl-12">
              <div className="absolute left-0 flex size-8 -translate-x-1/2 items-center justify-center rounded-full bg-primary md:left-1/2">
                <span className="font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Solution Design</h3>
              <p className="text-muted-foreground">
                Our experts design a tailored solution that addresses your specific challenges, 
                leveraging our platform&apos;s customization capabilities.
              </p>
            </div>

            <div className="pb-10 md:pr-12 md:text-right">
              <div className="absolute right-0 flex size-8 items-center justify-center rounded-full bg-primary md:left-1/2 md:-translate-x-1/2">
                <span className="font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Implementation</h3>
              <p className="text-muted-foreground">
                We configure and customize the solution according to the design, integrating with your 
                existing systems and training your AI models with your data.
              </p>
            </div>
            <div className="pb-10 md:pl-12"></div>

            <div className="pb-10 md:pr-12 md:text-right"></div>
            <div className="pb-10 md:pl-12">
              <div className="absolute left-0 flex size-8 -translate-x-1/2 items-center justify-center rounded-full bg-primary md:left-1/2">
                <span className="font-bold text-primary-foreground">4</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Testing & Refinement</h3>
              <p className="text-muted-foreground">
                We thoroughly test the solution in your environment and make refinements based on feedback 
                to ensure it meets your expectations.
              </p>
            </div>

            <div className="md:pr-12 md:text-right">
              <div className="absolute right-0 flex size-8 items-center justify-center rounded-full bg-primary md:left-1/2 md:-translate-x-1/2">
                <span className="font-bold text-primary-foreground">5</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Deployment & Support</h3>
              <p className="text-muted-foreground">
                We deploy the solution and provide ongoing support, including updates, monitoring, 
                and continuous improvement recommendations.
              </p>
            </div>
            <div className="md:pl-12"></div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl rounded-lg bg-muted p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">Ready to customize your solution?</h2>
        <p className="mb-6">
          Our team of experts is ready to help you design and implement a customized AI and automation 
          solution that addresses your specific business challenges.
        </p>
        <Button size="lg">
          <Link href="/contact">Schedule a Consultation</Link>
        </Button>
      </div>
    </div>
  );
}