"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Scale, MessageCircle, MapPin, Store, Zap, ShieldCheck, Briefcase, Code } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const products = [
  {
    icon: Code,
    title: "WaForge",
    description: "AI-powered WhatsApp API gateway with REST API, Express.js backend, and JWT auth — integrate WhatsApp messaging into any app.",
    href: "/products#waforge",
  },
  {
    icon: Scale,
    title: "E-Court Automate",
    description: "A CLI-based app that fetches your court case status daily and delivers a comprehensive digest straight to your email inbox.",
    href: "/products#e-court-automate",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Status Saver",
    description: "Save WhatsApp statuses from your contacts seamlessly \u2014 photos, videos, and text statuses, all with a single tap.",
    href: "/products#whatsapp-status-saver",
  },
  {
    icon: MapPin,
    title: "ByKm",
    description: "Your neighbourhood app to find everything within 15km \u2014 grocery stores, house rentals, sales, and local services from your current location.",
    href: "/products#bykm",
  },
  {
    icon: Store,
    title: "Town Trade",
    description: "An exclusive marketplace for local shops and vendors to sell products, showcase house rentals and sales \u2014 connecting your community.",
    href: "/products#town-trade",
  },
];

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target]);
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 relative overflow-hidden circle-wave-bg">
        <div className="aurora-glow aurora-glow-1" />
        <div className="aurora-glow aurora-glow-2" />
        <div className="aurora-ring aurora-ring-1" />
        <div className="aurora-ring aurora-ring-2" />
        <div className="aurora-ring aurora-ring-3" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <p className="text-primary font-medium tracking-wide uppercase text-sm">Quantura Technologies</p>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  The best way to{" "}
                  <span className="text-primary">PREDICT</span>{" "}
                  the future is to{" "}
                  <span className="text-accent">CREATE</span>{" "}
                  it.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                  We solve real-world problems by building simple, powerful software \u2014 products that are elegant, dependable and built to scale.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/products">Explore Our Products</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Talk to Us</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-secondary to-accent/10 border border-border flex flex-col items-center justify-center gap-4">
                <div className="grid grid-cols-3 gap-4 p-6">
                  {[Code, Scale, MessageCircle, MapPin, Store].map((Icon, i) => (
                    <Link key={i} href={products[i].href} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border/60 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:shadow-primary/20 hover:-translate-y-1 cursor-pointer no-underline">
                      <Icon className="h-8 w-8 text-primary" />
                      <span className="text-[10px] text-muted-foreground text-center font-medium">
                        {products[i].title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-16 relative overflow-hidden circle-wave-bg">
        <div className="aurora-glow aurora-glow-2" />
        <div className="aurora-ring aurora-ring-2" />
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">
                <AnimatedCounter target={5} />
              </p>
              <p className="text-sm text-muted-foreground">Products Built</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">
                <AnimatedCounter target={10} suffix="+" />
              </p>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">
                <AnimatedCounter target={3} />
              </p>
              <p className="text-sm text-muted-foreground">Years of Delivery</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">
                <AnimatedCounter target={100} suffix="%" />
              </p>
              <p className="text-sm text-muted-foreground">Citizen-first Focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="outline">Our Products</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What We Build</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Purpose-built products that solve real problems \u2014 from legal tech to hyperlocal discovery.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-stretch gap-6 py-12 sm:grid-cols-2 lg:max-w-none">
            {products.map((product, index) => (
              <Card key={index} className="flex flex-col transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-2">
                    <product.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0 text-accent">
                    <Link href={product.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button asChild variant="link" className="text-accent">
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden circle-wave-bg">
        <div className="aurora-glow aurora-glow-1" />
        <div className="aurora-ring aurora-ring-3" />
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="outline">Our Values</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How We Work</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The principles that guide every product we build.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
            <div className="grid gap-2 text-center p-4 rounded-lg transition-all duration-300 hover:bg-background/50 hover:-translate-y-2">
              <Zap className="h-10 w-10 mx-auto text-primary" />
              <h3 className="text-lg font-bold">Innovation</h3>
              <p className="text-sm text-muted-foreground">We grow daily, challenge the status quo, and embrace feedback to build better solutions.</p>
            </div>
            <div className="grid gap-2 text-center p-4 rounded-lg transition-all duration-300 hover:bg-background/50 hover:-translate-y-2">
              <ShieldCheck className="h-10 w-10 mx-auto text-primary" />
              <h3 className="text-lg font-bold">Quality Standards</h3>
              <p className="text-sm text-muted-foreground">Highly efficient, usable, and innovative solutions built on industry best practices.</p>
            </div>
            <div className="grid gap-2 text-center p-4 rounded-lg transition-all duration-300 hover:bg-background/50 hover:-translate-y-2">
              <Briefcase className="h-10 w-10 mx-auto text-primary" />
              <h3 className="text-lg font-bold">Quick &amp; Efficient</h3>
              <p className="text-sm text-muted-foreground">We set the bar by delivering bigger results with modern technology, faster.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge>Get in Touch</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let&apos;s Build Something Together</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Tell us about your project \u2014 we&apos;ll get back to you shortly.
              </p>
            </div>
            <Button asChild size="lg" className="mt-4 bg-accent hover:bg-accent/90">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
