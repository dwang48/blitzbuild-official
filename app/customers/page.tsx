import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Customers | Your Company",
  description: "See how organizations are transforming their operations with our AI and automation solutions",
};

// You would replace these with actual customer logos and case studies
const customers = [
  { name: "Acme Corp", industry: "Manufacturing", logo: "/placeholder-logo.svg" },
  { name: "TechNova", industry: "Technology", logo: "/placeholder-logo.svg" },
  { name: "FinEdge", industry: "Financial Services", logo: "/placeholder-logo.svg" },
  { name: "MediCare", industry: "Healthcare", logo: "/placeholder-logo.svg" },
  { name: "RetailPlus", industry: "Retail", logo: "/placeholder-logo.svg" },
  { name: "LogiTech", industry: "Logistics", logo: "/placeholder-logo.svg" },
];

const caseStudies = [
  {
    customer: "Acme Corp",
    title: "Automating Quality Control with Computer Vision",
    description: "How Acme Corp reduced defects by 87% and inspection costs by 65% using our AI-powered quality control system.",
    industry: "Manufacturing",
    results: ["87% reduction in defects", "65% lower inspection costs", "3.2x faster production throughput"],
    image: "/case-studies/acme-case-study.jpg",
    slug: "acme-quality-control"
  },
  {
    customer: "FinEdge",
    title: "AI-Driven Fraud Detection and Prevention",
    description: "FinEdge implemented our machine learning solution to detect and prevent fraudulent transactions in real-time.",
    industry: "Financial Services",
    results: ["92% of fraud detected before transaction completion", "$4.7M in prevented fraud losses", "False positive rate reduced by 76%"],
    image: "/case-studies/finedge-case-study.jpg",
    slug: "finedge-fraud-detection"
  },
  {
    customer: "MediCare",
    title: "Streamlining Patient Documentation with AI",
    description: "How MediCare's medical staff saved 15+ hours per week with our AI-powered documentation automation.",
    industry: "Healthcare",
    results: ["15+ hours saved per clinician weekly", "93% accuracy in medical transcription", "Patient satisfaction increased by 28%"],
    image: "/case-studies/medicare-case-study.jpg",
    slug: "medicare-documentation"
  },
];

// export default function CustomersPage() {
//   return (
//     <div className="container mx-auto py-12 px-4 md:px-6">
//       <div className="max-w-3xl mx-auto mb-12 text-center">
//         <h1 className="text-4xl font-bold tracking-tight mb-4">Our Customers</h1>
//         <p className="text-xl text-muted-foreground">
//           See how organizations across industries are transforming their operations with our AI and automation solutions
//         </p>
//       </div>

//       <div className="mb-16">
//         <h2 className="text-2xl font-bold mb-8 text-center">Trusted by Industry Leaders</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
//           {customers.map((customer) => (
//             <div key={customer.name} className="flex flex-col items-center">
//               <div className="bg-muted rounded-lg p-6 flex items-center justify-center h-24 w-full">
//                 <Image 
//                   src={customer.logo} 
//                   alt={`${customer.name} logo`} 
//                   width={120} 
//                   height={60} 
//                   className="max-h-12 w-auto" 
//                 />
//               </div>
//               <p className="mt-2 text-sm text-muted-foreground">{customer.industry}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mb-16">
//         <h2 className="text-2xl font-bold mb-8 text-center">Success Stories</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {caseStudies.map((study) => (
//             <div key={study.slug} className="bg-card rounded-lg overflow-hidden shadow-sm">
//               <div className="relative h-48">
//                 <Image 
//                   src={study.image} 
//                   alt={study.title} 
//                   fill 
//                   className="object-cover" 
//                 />
//                 <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
//                   {study.industry}
//                 </div>
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
//                 <p className="text-muted-foreground mb-4">{study.description}</p>
//                 <div className="mb-4">
//                   <h4 className="text-sm font-medium mb-2">Key Results:</h4>
//                   <ul className="space-y-1">
//                     {study.results.map((result, index) => (
//                       <li key={index} className="flex items-start">
//                         <Star className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
//                         <span className="text-sm">{result}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <Button variant="outline" className="w-full">
//                   <Link href={`/case-studies/${study.slug}`}>
//                     Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
//                   </Link>
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="max-w-3xl mx-auto bg-muted p-8 rounded-lg text-center">
//         <h2 className="text-2xl font-bold mb-4">Join our growing list of successful customers</h2>
//         <p className="mb-6">
//           Discover how our AI and automation solutions can transform your business operations and drive measurable results.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Button size="lg">
//             <Link href="/contact">Request a Demo</Link>
//           </Button>
//           <Button variant="outline" size="lg">
//             <Link href="/case-studies">View All Case Studies</Link>
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }
// ... existing code ...

export default function CustomersPage() {
    return (
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Our Customers</h1>
          <p className="text-xl text-muted-foreground">
            See how organizations across industries are transforming their operations with our AI and automation solutions
          </p>
        </div>
  
        <div className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-3 lg:grid-cols-6">
            {customers.map((customer) => (
              <div key={customer.name} className="flex flex-col items-center">
                <div className="flex h-24 w-full items-center justify-center rounded-lg bg-muted p-6">
                  <Image 
                    src={customer.logo} 
                    alt={`${customer.name} logo`} 
                    width={120} 
                    height={60} 
                    className="max-h-12 w-auto" 
                  />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{customer.industry}</p>
              </div>
            ))}
          </div>
        </div>
  
        <div className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold">Success Stories</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <div key={study.slug} className="overflow-hidden rounded-lg bg-card shadow-sm">
                <div className="relative h-48">
                  <Image 
                    src={study.image} 
                    alt={study.title} 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute right-2 top-2 rounded bg-primary px-2 py-1 text-xs text-primary-foreground">
                    {study.industry}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{study.title}</h3>
                  <p className="mb-4 text-muted-foreground">{study.description}</p>
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-medium">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <Star className="mr-2 mt-1 size-4 flex-shrink-0 text-primary" />
                          <span className="text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Link href={`/case-studies/${study.slug}`}>
                      Read Case Study <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        <div className="mx-auto max-w-3xl rounded-lg bg-muted p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Join our growing list of successful customers</h2>
          <p className="mb-6">
            Discover how our AI and automation solutions can transform your business operations and drive measurable results.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg">
              <Link href="/contact">Request a Demo</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }