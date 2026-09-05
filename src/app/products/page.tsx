import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, MessageCircle, MapPin, Store, Mail, Smartphone, Home, Search, ShoppingCart, Users, Code, Server, Shield, Zap, Database, Globe } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Quantura",
  description: "Explore our innovative products designed to solve real-world problems — from legal automation to local marketplace solutions.",
};

const products = [
  {
    id: "waforge",
    icon: Code,
    title: "WaForge",
    tagline: "AI Powered WhatsApp API Gateway",
    description:
      "WaForge is a powerful AI-driven WhatsApp API gateway that enables developers and businesses to integrate WhatsApp messaging into their applications seamlessly. Built with Express.js, MongoDB, and JWT authentication, WaForge provides a robust REST API layer over WhatsApp — making it easy to send messages, manage conversations, build chatbots, and automate workflows at scale.",
    features: [
      "RESTful API gateway for WhatsApp messaging integration",
      "AI-powered message processing and automation",
      "JWT token-based secure authentication system",
      "Express.js backend with MongoDB for scalable data storage",
      "Webhook support for real-time message delivery and events",
      "Template message management and bulk messaging capabilities",
      "Multi-session support for managing multiple WhatsApp numbers",
      "Comprehensive API documentation and SDKs",
      "Rate limiting and queue management for high-throughput messaging",
      "End-to-end encryption and secure credential storage",
    ],
    useCases: [
      "Businesses automating customer support via WhatsApp",
      "Developers building WhatsApp chatbots and assistants",
      "E-commerce platforms sending order updates and notifications",
      "Marketing teams running bulk WhatsApp campaigns",
    ],
    platform: "API (REST) & CLI",
    status: "Available",
    image: "/images/waforge.jpg",
  },
  {
    id: "e-court-automate",
    icon: Scale,
    title: "E-Court Automate",
    tagline: "Your Daily Court Case Status — Delivered to Your Inbox",
    description:
      "A powerful CLI-based application that automatically fetches the latest status of your court cases and delivers a comprehensive daily digest straight to your email inbox. Never miss a hearing date, filing update, or case progress again.",
    features: [
      "Automated daily case status fetching from e-Court portals",
      "Email digest with case summaries, next hearing dates, and orders",
      "Support for tracking multiple cases simultaneously",
      "Command-line interface for power users and automation scripts",
      "Scheduled runs via cron jobs or task schedulers",
      "Secure authentication with encrypted credentials storage",
    ],
    useCases: [
      "Lawyers tracking multiple client cases",
      "Individuals monitoring their own pending cases",
      "Legal firms automating case status reporting",
    ],
    platform: "CLI (Command Line Interface)",
    status: "Available",
    image: "/images/e-court-automate.png",
  },
  {
    id: "whatsapp-status-saver",
    icon: MessageCircle,
    title: "WhatsApp Status Saver",
    tagline: "Save Your WhatsApp Statuses — Seamlessly",
    description:
      "A lightweight and intuitive app that lets you view and save WhatsApp statuses from your contacts without them ever knowing. Photos, videos, and text statuses — all saved with a single tap.",
    features: [
      "View all WhatsApp statuses from your contacts in one place",
      "Save photos and videos directly to your gallery",
      "Support for both regular WhatsApp and WhatsApp Business",
      "No root access required",
      "Clean, ad-free user interface",
      "Auto-detects new statuses and refreshes automatically",
      "Built-in media viewer with zoom and playback controls",
    ],
    useCases: [
      "Saving memorable status updates from friends and family",
      "Archiving business status updates for reference",
      "Re-sharing important announcements offline",
    ],
    platform: "Mobile App (Android)",
    status: "Available",
    image: "/images/whatsapp-status-saver.png",
  },
  {
    id: "bykm",
    icon: MapPin,
    title: "ByKm",
    tagline: "Your Neighbourhood App — Everything Within 15km",
    description:
      "A hyperlocal discovery app that helps you find everything you need in your neighbourhood — from grocery stores and vegetable vendors to house rentals, house sales, local services, and more — all within a 15km radius of your current location.",
    features: [
      "Location-based discovery using your current GPS position",
      "Find grocery stores, vegetable markets, pharmacies, and more",
      "Browse house rentals and house sales in your area",
      "Discover local services — plumbers, electricians, tutors, etc.",
      "15km adjustable search radius with map view",
      "Filter by category, distance, ratings, and price range",
      "List your own business or property for free",
      "Real-time distance and route calculation",
    ],
    useCases: [
      "Finding the nearest grocery store or vegetable vendor",
      "Searching for rental homes or properties for sale nearby",
      "Discovering local service providers in your area",
      "Listing your own shop, rental property, or service",
    ],
    platform: "Mobile App (Android & iOS)",
    status: "In Development",
    image: "/images/bykm.png",
  },
  {
    id: "town-trade",
    icon: Store,
    title: "Town Trade",
    tagline: "Your Local Marketplace — Buy, Sell & Discover Locally",
    description:
      "An exclusive platform built for local shops, vendors, and individuals to showcase and sell their products, list house rentals, and advertise house sales — all within your town. Town Trade empowers local commerce by connecting buyers and sellers in the same community.",
    features: [
      "Product listings for local shops and vendors",
      "Showcase house rentals and house sales with photos and details",
      "Category-based browsing — groceries, electronics, fashion, real estate, and more",
      "Direct buyer-seller messaging and inquiry system",
      "Location-based search to find sellers in your town",
      "Shop profiles with ratings, reviews, and business hours",
      "Promote your listings with featured ads",
      "Secure in-app communication between buyers and sellers",
    ],
    useCases: [
      "Local shops listing their products for online discovery",
      "Vendors advertising fresh produce and daily deals",
      "Homeowners listing rental properties or houses for sale",
      "Buyers finding the best local deals without traveling far",
    ],
    platform: "Mobile App & Web",
    status: "In Development",
    image: "/images/town-trade.png",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="w-full py-20 md:py-32 lg:py-40 bg-cover bg-center bg-no-repeat relative overflow-hidden circle-wave-bg"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1920&q=80')" }}
        data-ai-hint="technology futuristic laptop"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(228,35%,8%)]/80 via-[hsl(228,35%,8%)]/70 to-[hsl(228,35%,8%)]/90" />
        <div className="aurora-ring aurora-ring-1" />
        <div className="aurora-glow aurora-glow-1" />
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
              Our Products
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
              Innovative solutions designed to solve real-world problems — from legal automation to hyperlocal discovery.
            </p>
          </div>
        </div>
      </section>

      {/* Products List */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-16 lg:space-y-24">
            {products.map((product, index) => (
              <div
                key={product.id}
                id={product.id}
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-24 ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <product.icon className="h-8 w-8 text-primary" />
                      </div>
                      <Badge variant={product.status === "Available" ? "default" : "outline"} className="text-xs">
                        {product.status}
                      </Badge>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{product.title}</h2>
                    <p className="text-lg text-primary font-medium">{product.tagline}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground/80">Platform: {product.platform}</p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Key Features</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">✦</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Use Cases</h3>
                    <ul className="space-y-1">
                      {product.useCases.map((useCase, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      <a href="#contact">Learn More</a>
                    </Button>
                  </div>
                </div>

                {/* Image */}
                <div className={`flex justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-xl overflow-hidden bg-secondary border border-border/50 flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={`${product.title} - ${product.tagline}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge>Interested?</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let&apos;s Build Something Together</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have an idea for a product or want to collaborate? We&apos;d love to hear from you.
              </p>
            </div>
            <Button asChild size="lg" className="mt-4 bg-accent hover:bg-accent/90">
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
