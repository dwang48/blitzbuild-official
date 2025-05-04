import { Metadata } from "next";
import Image from "next/image"; // Assuming you might want an image for Vita
import Link from "next/link";
import { Smartphone } from "lucide-react"; // Example icon

export const metadata: Metadata = {
  title: "Products | Blitzbuild Software",
  description: "Explore the innovative products developed by Blitzbuild Software.",
};

// Define product data (can be expanded later)
const products = [
  {
    name: "Vita Health",
    description: "Your personal AI health agent for iOS and Android. Currently under development.",
    icon: Smartphone, // Or use an Image component if you have a logo
    image: "/images/vita-logo.png", // Example image path - ensure this exists
    href: "/products/vita-health", // Updated link to the dedicated page
    status: "In Development",
  },
  // Add more products here as needed
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Our Products</h1>
        <p className="text-xl text-muted-foreground">
          Discover the tools and applications we&apos;re building.
        </p>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            // Wrap the entire card content in a Link
            <Link key={product.name} href={product.href} className="group block">
              <div className="flex h-full flex-col overflow-hidden rounded-lg border bg-card shadow-sm transition-shadow group-hover:shadow-md">
                <div className="flex flex-grow flex-col p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    {/* Conditionally render icon OR image */}
                    {product.image ? (
                       <Image src={product.image} alt={`${product.name} Logo`} width={32} height={32} />
                    ) : product.icon ? (
                      <product.icon className="size-8 text-muted-foreground" />
                    ) : null}
                  </div>
                  <p className="flex-grow text-muted-foreground">
                    {product.description}
                  </p>
                  {product.status && (
                    <span className="mt-4 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                      {product.status}
                    </span>
                  )}
                </div>
                {/* Removed the optional link at the bottom as the whole card is now a link */}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center text-muted-foreground">
          <p>No products to display yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
} 