import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Globe, Layers, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project: Web Development | Quantura",
  description:
    "Modern, responsive, SEO-optimized website development services for businesses, startups, and enterprises.",
};

// Key Features
const features = [
  {
    title: "Responsive UI/UX Design",
    description:
      "Pixel-perfect layouts that adapt seamlessly across desktop, mobile, and tablet.",
    icon: Globe,
  },
  {
    title: "High-Performance Websites",
    description:
      "Optimized for speed, SEO, and Core Web Vitals with modern frameworks like Next.js.",
    icon: Rocket,
  },
  {
    title: "Custom Business Solutions",
    description:
      "From landing pages to full-scale web platforms tailored to your requirements.",
    icon: Layers,
  },
];

// Use-Cases
const useCases = [
  {
    name: "Business Websites",
    description:
      "Professional company websites that represent your brand with clarity and professionalism.",
  },
  {
    name: "E-Commerce Platforms",
    description:
      "Fully-featured online stores with secure checkout, product management, and analytics.",
  },
  {
    name: "Portfolio & Personal Sites",
    description:
      "Beautiful personal branding websites for creators, developers, and professionals.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <>
      {/* TOP SECTION */}
      <section className="w-full py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            {/* LEFT TEXT */}
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary">
                Web Development
              </Badge>

              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Modern & Responsive Website Development
              </h1>

              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                We build high-quality websites with stunning design, advanced performance,
                SEO optimization, and clean modern UI — crafted for businesses, startups,
                agencies, and professionals.
              </p>

              <Button asChild size="lg">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Visit Demo <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <Image
                src="https://gorevity.com/wp-content/uploads/2021/05/Website-Development-What-Your-Website-Says-About-Your-Business.jpg"
                width={550}
                height={400}
                alt="Web Development"
                className="rounded-xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="w-full py-12 md:py-24 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center mb-12 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Key Features</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Powerful, modern, business-ready website solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <Card
                key={f.title}
                className="p-6 flex flex-col items-center text-center transition-all hover:shadow-lg hover:scale-105"
              >
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <f.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl">Use Cases</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {useCases.map((u) => (
              <div
                key={u.name}
                className="flex flex-col items-center text-center bg-secondary/40 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all"
              >
                <h4 className="text-xl font-bold mb-2">{u.name}</h4>
                <p className="text-muted-foreground">{u.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}