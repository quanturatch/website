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
    title: "AI & ML Development",
    description: (
      <>
        Building <span className="font-semibold text-purple-600">intelligent systems</span> powered by 
        <span className="font-semibold text-blue-600"> advanced machine learning</span>. From 
        <span className="font-semibold text-emerald-600"> CC camera detection</span> and 
        <span className="font-semibold text-emerald-600"> real-time pose analysis</span> to fully 
        <span className="font-semibold text-primary"> custom AI model development</span>, 
        we create smart solutions that enhance accuracy and unlock new capabilities.
      </>
    ),
  },
  {
    icon: Code,
    title: "Web Development",
    description: (
      <>
        Building <span className="font-semibold text-primary">responsive</span>, 
        <span className="font-semibold text-blue-600"> high-performance websites</span> and 
        applications for a seamless user experience across all devices. We use 
        <span className="font-semibold text-emerald-600"> modern technologies</span> to build for the future.
      </>
    ),
  },
  {
    icon: Megaphone,
    title: "App Development",
    description: (
      <>
        Creating <span className="font-semibold text-blue-600">high-performance</span>, 
        <span className="font-semibold text-primary"> user-friendly</span> mobile and web applications 
        tailored to your business needs. We deliver 
        <span className="font-semibold text-emerald-600"> scalable digital experiences</span> that drive results.
      </>
    ),
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: (
      <>
        Driving growth with 
        <span className="font-semibold text-primary"> data-driven strategies</span>. 
        Our services include <span className="font-semibold text-blue-600">SEO</span>, 
        <span className="font-semibold text-purple-600"> SEM</span>, content marketing, and 
        <span className="font-semibold text-emerald-600"> social media management</span>.
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Consulting",
    description: (
      <>
        Protecting your digital assets with 
        <span className="font-semibold text-primary"> robust security assessments</span> and strategies. 
        We help you stay ahead of <span className="font-semibold text-red-600">cyber threats</span>.
      </>
    ),
  },
  {
    icon: Briefcase,
    title: "AI/ML Consulting",
    description: (
      <>
        Empowering businesses with <span className="font-semibold text-primary">intelligent insights</span> 
        and <span className="font-semibold text-purple-600">strategic AI guidance</span>.  
        From model evaluation to <span className="font-semibold text-emerald-600">workflow automation</span>, 
        we help you leverage machine learning to improve decision-making and unlock growth.
      </>
    ),
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