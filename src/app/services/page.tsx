import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Smartphone, Cloud, Database, Link } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Quantura",
  description: "Explore the professional services offered by Quantura — AI-driven IT solutions tailored to your needs.",
};

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: (
      <>
        Predictive models, computer vision, NLP and{" "}
        <span className="font-semibold text-purple-600">generative AI</span> engineered for your domain and
        embedded into <span className="font-semibold text-primary">real workflows</span>.
      </>
    ),
  },
  {
    icon: Code,
    title: "Custom Software Engineering",
    description: (
      <>
        <span className="font-semibold text-primary">Bespoke web, mobile, and enterprise platforms</span> designed
        around your exact process — not the other way round.
      </>
    ),
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: (
      <>
        Creating <span className="font-semibold text-blue-600">high-performance</span>,{" "}
        <span className="font-semibold text-primary">user-friendly</span> mobile applications tailored to your
        business needs that drive <span className="font-semibold text-emerald-600">scalable results</span>.
      </>
    ),
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: (
      <>
        <span className="font-semibold text-primary">Scalable, secure, cloud-native infrastructure</span> with
        continuous delivery so solutions ship fast and stay reliable.
      </>
    ),
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    description: (
      <>
        Pipelines, warehouses and <span className="font-semibold text-blue-600">decision dashboards</span> that
        turn scattered, raw data into <span className="font-semibold text-primary">insight you can act on</span>.
      </>
    ),
  },
  {
    icon: Link,
    title: "Systems Integration",
    description: (
      <>
        Connect <span className="font-semibold text-primary">disparate systems and legacy software</span> into one
        seamless, dependable platform that just works together.
      </>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <section
        className="w-full py-20 md:py-32 lg:py-40 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80')" }}
        data-ai-hint="programming code screen"
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
              Our Services
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
              AI-driven IT solutions, tailored to you — never one-size-fits-all.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <Badge variant="outline">What We Do</Badge>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We solve complex business and operational problems with AI-driven technology built around your needs.
              </p>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col transition-all duration-300 hover:shadow-accent/20 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="flex flex-col items-start space-y-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
