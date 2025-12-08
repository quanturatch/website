import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Smartphone, Cpu, LayoutGrid, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project: Mobile App Development | Quantura",
  description:
    "High‑performance cross‑platform mobile app development for iOS and Android, built with modern UI/UX and scalable architecture.",
};

// Features
const features = [
  {
    title: "Cross‑Platform Development",
    description:
      "Build once and deploy on both iOS and Android using optimized native‑like performance.",
    icon: Smartphone,
  },
  {
    title: "Modern & Scalable Architecture",
    description:
      "Clean architecture + modular design ensures long‑term maintainability and scalability.",
    icon: Cpu,
  },
  {
    title: "Beautiful UI/UX Design",
    description:
      "Pixel‑perfect, intuitive, and smooth user experience tailored for all devices.",
    icon: LayoutGrid,
  },
  {
    title: "Fast Performance",
    description:
      "Optimized animations, faster loading, and smooth navigation for premium app experience.",
    icon: Sparkles,
  },
];

// Use Cases
const useCases = [
  {
    name: "Customer Engagement Apps",
    description:
      "Boost brand engagement through personalized, interactive customer‑facing apps.",
  },
  {
    name: "E‑Commerce Applications",
    description:
      "High‑performance shopping apps with secure payments and seamless browsing.",
  },
  {
    name: "Business Workflow Apps",
    description:
      "Automate internal workflows with custom mobile solutions for teams and enterprises.",
  },
];

export default function MobileAppDevPage() {
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
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            {/* TEXT SECTION */}
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary">
                Mobile Development
              </Badge>

              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Mobile App Development
              </h1>

              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                We build high‑quality cross‑platform mobile applications designed for speed,
                beautiful UI, and flawless user experience. Perfect for businesses looking to
                expand digitally through powerful mobile solutions.
              </p>

              <Button asChild size="lg">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  View Demo <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center">
              <Image
                src="/images/app_1.jpg"
                alt="Mobile App Development"
                width={550}
                height={400}
                className="rounded-xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="w-full py-12 md:py-24 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Key Features</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Designed for performance, longevity, and world‑class user experiences.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="p-5 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <feature.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 space-y-4">
            <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl">Use Cases</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {useCases.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center text-center bg-secondary/40 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all"
              >
                <h4 className="text-xl font-bold mb-2">{item.name}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
