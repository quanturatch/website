"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart, Briefcase, Code, PenTool, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const heroImages = [
  "/images/home.jpg",
  "/images/home1.jpeg",
  "/images/home2.png",
];


const randomImage = heroImages[Math.floor(Math.random() * heroImages.length)];

export default function Home() {

  const [randomImage, setRandomImage] = useState(heroImages[0]);

  useEffect(() => {
    const index = Math.floor(Math.random() * heroImages.length);
    setRandomImage(heroImages[index]);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-20 md:py-32 lg:py-40 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
                  Innovative Solutions for a Digital World
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Quantura provides cutting-edge services to help your business thrive in the modern landscape. Let us be your partner in success.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <Image
              src={randomImage}
              width="600"
              height="400"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </div>
      </section>

      <section id="values" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="outline">Our Values</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Core Principles</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We are driven by a set of values that define our culture and guide our decisions.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
            <div className="grid gap-2 text-center p-4 rounded-lg transition-all duration-300 hover:bg-background/50 hover:-translate-y-2">
              <Zap className="h-10 w-10 mx-auto text-primary" />
              <h3 className="text-lg font-bold">Innovation</h3>
              <p className="text-sm text-muted-foreground">We embrace creativity and constantly seek better ways to solve problems and deliver value.</p>
            </div>
            <div className="grid gap-2 text-center p-4 rounded-lg transition-all duration-300 hover:bg-background/50 hover:-translate-y-2">
              <ShieldCheck className="h-10 w-10 mx-auto text-primary" />
              <h3 className="text-lg font-bold">Integrity</h3>
              <p className="text-sm text-muted-foreground">We uphold the highest standards of integrity in all of our actions, building trust with our clients.</p>
            </div>
            <div className="grid gap-2 text-center p-4 rounded-lg transition-all duration-300 hover:bg-background/50 hover:-translate-y-2">
              <Briefcase className="h-10 w-10 mx-auto text-primary" />
              <h3 className="text-lg font-bold">Excellence</h3>
              <p className="text-sm text-muted-foreground">We are committed to delivering outstanding results and exceeding expectations in everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services-preview" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
                <Badge>Our Services</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What We Offer</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Explore our range of professional services designed to elevate your business.
                </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-stretch gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
            <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2">
                <CardHeader>
                    <PenTool className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Creative Design</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Crafting stunning visuals that tell your story and captivate your audience.</p>
                </CardContent>
            </Card>
            <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2">
                <CardHeader>
                    <Code className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Web Development</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Building responsive, high-performance websites for a seamless user experience.</p>
                </CardContent>
            </Card>
            <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2">
                <CardHeader>
                    <BarChart className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Digital Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Driving growth and engagement with data-driven marketing strategies.</p>
                </CardContent>
            </Card>
          </div>
           <div className="flex justify-center">
              <Button asChild variant="link" className="text-accent">
                <Link href="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
           </div>
        </div>
      </section>

      <section id="projects-preview" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
                <Badge variant="outline">Our Projects</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Recent Work</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Take a look at some of the innovative solutions we've delivered for our clients.
                </p>
            </div>
          </div>
          <div className="mx-auto grid gap-8 py-12 sm:grid-cols-1 lg:grid-cols-2 lg:max-w-6xl">
            <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="overflow-hidden">
                    <Image src="/images/nutri.png" data-ai-hint="nutrition analysis app" alt="NutriLens Project" width={400} height={250} className="w-full object-cover transition-transform duration-300 hover:scale-105" />
                </div>
                <CardHeader>
                    <CardTitle className="mt-2">NutriLens</CardTitle>
                    <CardDescription>AI-Powered Nutrition Analysis Platform</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground line-clamp-3">A comprehensive platform that leverages machine learning to provide instant, detailed nutritional analysis from a photo.</p>
                </CardContent>
                <CardFooter>
                    <Button asChild variant="link" className="p-0 text-accent">
                        <Link href="/projects/nutrilens">View Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </CardFooter>
            </Card>
            <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="overflow-hidden">
                    <Image src="/images/x-ray.png" data-ai-hint="mobile app interface" alt="Project 2" width={400} height={250} className="w-full object-cover transition-transform duration-300 hover:scale-105" />
                </div>
                <CardHeader>
                    <CardTitle className="mt-2">RadixScan</CardTitle>
                    <CardDescription>A sophisticated AI tool for analyzing X-ray images</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground line-clamp-3">A sleek and intuitive mobile app for iOS and Android, designed to enhance customer engagement and streamline services.</p>
                </CardContent>
                <CardFooter>
                    <Button asChild variant="link" className="p-0 text-accent">
                        <Link href="/projects">View Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </CardFooter>
            </Card>
          </div>
           <div className="flex justify-center">
              <Button asChild variant="link" className="text-accent">
                <Link href="/projects">All Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
           </div>
        </div>
      </section>

      <section id="news-preview" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
                <Badge>News & Updates</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest from Quantura</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Stay informed with our latest company news, announcements, and industry insights.
                </p>
            </div>
          </div>
          <div className="mx-auto grid gap-8 py-12 sm:grid-cols-1 lg:grid-cols-2 lg:max-w-6xl">
            <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="overflow-hidden">
                    <Image src="https://picsum.photos/400/250" data-ai-hint="business strategy" alt="News article 1" width={400} height={250} className="w-full object-cover transition-transform duration-300 hover:scale-105" />
                </div>
                <CardHeader>
                    <Badge className="w-fit">Industry Insights</Badge>
                    <CardTitle className="mt-2">The Future of AI in Business</CardTitle>
                    <CardDescription>October 26, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground line-clamp-3">Discover how artificial intelligence is reshaping industries and what it means for your business strategy in the coming years...</p>
                </CardContent>
                <CardFooter>
                    <Button asChild variant="link" className="p-0 text-accent">
                        <Link href="/news/future-of-ai">Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </CardFooter>
            </Card>
            <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="overflow-hidden">
                    <Image src="https://picsum.photos/400/251" data-ai-hint="corporate announcement" alt="News article 2" width={400} height={250} className="w-full object-cover transition-transform duration-300 hover:scale-105" />
                </div>
                <CardHeader>
                    <Badge className="w-fit">Company News</Badge>
                    <CardTitle className="mt-2">Quantura Launches New Service Suite</CardTitle>
                    <CardDescription>October 20, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground line-clamp-3">We are thrilled to announce the launch of our new comprehensive service suite, designed to provide even more value to our clients...</p>
                </CardContent>
                <CardFooter>
                    <Button asChild variant="link" className="p-0 text-accent">
                        <Link href="/news/new-service-suite">Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </CardFooter>
            </Card>
          </div>
           <div className="flex justify-center">
              <Button asChild variant="link" className="text-accent">
                <Link href="/news">More News <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
           </div>
        </div>
      </section>
    </div>
  );
}