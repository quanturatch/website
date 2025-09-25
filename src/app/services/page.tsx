import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Code, Megaphone, PenTool, ShieldCheck, TrendingUp } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Quantura',
  description: 'Explore the professional services offered by Quantura to help your business grow.',
};

const services = [
  {
    icon: PenTool,
    title: "Creative Design",
    description: "Crafting stunning visuals that tell your story and captivate your audience. From branding to UI/UX, our creative team brings your vision to life.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive, high-performance websites and applications for a seamless user experience across all devices. We use modern technologies to build for the future.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Driving growth and engagement with data-driven marketing strategies. Our services include SEO, SEM, content marketing, and social media management.",
  },
  {
    icon: Megaphone,
    title: "Brand Strategy",
    description: "Developing powerful brand identities that resonate with your target audience. We help you define your message and position yourself for success.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Consulting",
    description: "Protecting your digital assets with robust security assessments, strategies, and implementation. We help you stay ahead of threats.",
  },
  {
    icon: Briefcase,
    title: "Business Analytics",
    description: "Transforming data into actionable insights. Our analytics services help you make informed decisions and uncover new opportunities for growth.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section
        className="w-full py-20 md:py-32 lg:py-40 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1081?blur=2&grayscale')" }}
        data-ai-hint="business services"
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
              Our Services
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
              We provide a wide range of services to help your business succeed in the digital age.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
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