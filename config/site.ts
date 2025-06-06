import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "Blitzbuild Software",
  description:
    "THE ULTIMATE LOW-CODE PLATFORM",
  url: site_url,
  ogImage: `${site_url}/logo.png`,
  links: {
    twitter: "hhttps://x.com/Blitzbuild_soft",
    github: "https://github.com/dwang48",
  },
  mailSupport: "info@blitzbuild.net",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      // { title: "About", href: "/about" },
      { title: "Enterprise", href: "/enterprise" },
      { title: "Terms", href: "/terms" },
      { title: "Privacy", href: "/privacy" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "Security", href: "/security" },
      { title: "Customization", href: "/customization" },
      // { title: "Customers", href: "/customers" },
      // { title: "Changelog", href: "#" },
    ],
  },
  // {
  //   title: "Docs",
  //   items: [
  //     { title: "Introduction", href: "#" },
  //     { title: "Installation", href: "#" },
  //     { title: "Components", href: "#" },
  //     { title: "Code Blocks", href: "#" },
  //   ],
  // },
];
