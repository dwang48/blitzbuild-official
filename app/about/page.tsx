import { Metadata } from "next";
import { Cloud, Cpu, Users, Globe } from "lucide-react"; // Example icons

export const metadata: Metadata = {
  title: "About Us | Blitzbuild Software",
  description:
    "Learn about the experienced team behind Blitzbuild Software, based in New Jersey.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">About Blitzbuild Software</h1>
        <p className="text-xl text-muted-foreground">
          Innovative Software Solutions from Experienced Engineers
        </p>
      </div>

      <div className="mx-auto max-w-4xl space-y-8">
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Who We Are</h2>
          <p className="text-lg text-muted-foreground">
            Blitzbuild Software is powered by a team of top-notch engineers based
            right here in New Jersey. With over a decade of collective experience
            spanning cloud computing, the Internet of Things (IoT), Artificial
            Intelligence (AI), and diverse areas of software engineering, we bring
            a wealth of knowledge and expertise to every project.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">What We Do</h2>
          <p className="mb-4 text-lg text-muted-foreground">
            Our passion lies in creation. We develop our own innovative software
            products, pushing the boundaries of technology. Simultaneously, we
            thrive on collaboration and undertake software contracts, building
            bespoke solutions tailored to the unique needs of our clients.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <Cpu className="mb-3 size-8 text-primary" />
              <h3 className="mb-2 text-lg font-medium">Proprietary Software</h3>
              <p className="text-sm text-muted-foreground">
                Developing cutting-edge applications and platforms in-house.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <Users className="mb-3 size-8 text-primary" />
              <h3 className="mb-2 text-lg font-medium">Contract Development</h3>
              <p className="text-sm text-muted-foreground">
                Partnering with businesses to deliver custom software solutions.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Our Experience</h2>
          <p className="text-lg text-muted-foreground">
            We have a proven track record of serving international enterprises,
            delivering impactful, customized software solutions. Our expertise
            includes creating systems for complex challenges such as office
            automation, streamlined HR management, and insightful performance
            management platforms. We pride ourselves on understanding global
            business needs and delivering robust, scalable software.
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-muted-foreground">
             <Globe className="size-5"/> <span>Serving International Enterprises</span>
          </div>
        </section>

        {/* Optional: Add a Call to Action */}
        {/* <section className="text-center">
          <h2 className="mb-4 text-2xl font-semibold">Work With Us</h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Ready to discuss your next project? Contact us today.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </section> */}
      </div>
    </div>
  );
} 