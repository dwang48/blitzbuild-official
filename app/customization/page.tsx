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
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Tailored Solutions for Your Business</h1>
        <p className="text-xl text-muted-foreground">
          Our AI and automation platforms are designed to be customized to your specific workflows and requirements
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <div className="mb-4">
            <Settings className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Configurable Workflows</h3>
          <p className="text-muted-foreground">
            Easily configure AI agents and automation workflows without coding. Our visual workflow builder 
            lets you design complex processes with drag-and-drop simplicity.
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm">
          <div className="mb-4">
            <Code className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Developer APIs</h3>
          <p className="text-muted-foreground">
            For advanced customization, our comprehensive APIs and SDKs allow your developers to extend 
            functionality and integrate with your existing systems.
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm">
          <div className="mb-4">
            <Puzzle className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Modular Architecture</h3>
          <p className="text-muted-foreground">
            Our solutions are built with a modular architecture, allowing you to select and implement 
            only the components you need, with the ability to add more as your needs evolve.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Customization Process</h2>
        <div className="relative">
          {/* Timeline connector */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border"></div>
          
          {/* Timeline items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            <div className="md:text-right md:pr-12 pb-10">
              <div className="absolute right-0 md:right-auto md:left-1/2 transform translate-x-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-muted-foreground">
                We begin with a thorough assessment of your current workflows, pain points, and objectives to 
                understand exactly what you need.
              </p>
            </div>
            <div className="md:pl-12 pb-10"></div>

            <div className="md:text-right md:pr-12 pb-10"></div>
            <div className="md:pl-12 pb-10">
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Solution Design</h3>
              <p className="text-muted-foreground">
                Our experts design a tailored solution that addresses your specific challenges, 
                leveraging our platform's customization capabilities.
              </p>
            </div>

            <div className="md:text-right md:pr-12 pb-10">
              <div className="absolute right-0 md:right-auto md:left-1/2 transform translate-x-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-muted-foreground">
                We configure and customize the solution according to the design, integrating with your 
                existing systems and training your AI models with your data.
              </p>
            </div>
            <div className="md:pl-12 pb-10"></div>

            <div className="md:text-right md:pr-12 pb-10"></div>
            <div className="md:pl-12 pb-10">
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Testing & Refinement</h3>
              <p className="text-muted-foreground">
                We thoroughly test the solution in your environment and make refinements based on feedback 
                to ensure it meets your expectations.
              </p>
            </div>

            <div className="md:text-right md:pr-12">
              <div className="absolute right-0 md:right-auto md:left-1/2 transform translate-x-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">5</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Deployment & Support</h3>
              <p className="text-muted-foreground">
                We deploy the solution and provide ongoing support, including updates, monitoring, 
                and continuous improvement recommendations.
              </p>
            </div>
            <div className="md:pl-12"></div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto bg-muted p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to customize your solution?</h2>
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