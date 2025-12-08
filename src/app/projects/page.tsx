import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects | Quantura',
  description: 'Explore a selection of our innovative projects and successful client solutions.',
};

const projects = [
  {
    slug: "nutrilens",
    title: "NutriLens (Project Alpha)",
    category: "AI & Machine Learning",
    image: "https://www.istockphoto.com/photo/group-of-healthy-food-for-flexitarian-diet-gm1457433817-492225403?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_image&utm_content=srp_topbanner_media&utm_term=nutrition",
    aiHint: "nutrition analysis app",
    description: "An AI-powered nutrition analysis platform that provides instant, detailed nutritional information from a photo of a meal.",
  },
  {
    slug: "plant-identifier",
    title: "FloraLens (Project Iota)",
    category: "AI & Machine Learning",
    image: "https://picsum.photos/400/262",
    aiHint: "plant leaf",
    description: "An AI-powered plant identification tool that recognizes plants from leaf images, providing detailed information and care instructions.",
  },
  {
    slug: "x-ray-analysis",
    title: "RadixScan (Project Kappa)",
    category: "Healthcare & AI",
    image: "https://picsum.photos/400/263",
    aiHint: "medical x-ray",
    description: "A sophisticated AI tool for analyzing X-ray images, assisting medical professionals in detecting anomalies and improving diagnostic accuracy.",
  },
  {
    slug: "project-beta",
    title: "Project Beta",
    category: "Mobile Development",
    image: "https://picsum.photos/400/257",
    aiHint: "mobile app interface",
    description: "A sleek and intuitive cross-platform mobile application for iOS and Android, designed to enhance customer engagement and streamline access to services.",
  },
  {
    slug: "project-gamma",
    title: "Project Gamma",
    category: "Web Development",
    image: "https://picsum.photos/400/258",
    aiHint: "modern website design",
    description: "A complete redesign and development of a corporate website, focusing on performance, responsive design, and an improved user experience to drive conversions.",
  },
  {
    slug: "project-delta",
    title: "Project Delta",
    category: "Cybersecurity",
    image: "https://picsum.photos/400/259",
    aiHint: "network security",
    description: "A comprehensive cybersecurity overhaul for a financial institution, implementing multi-layered security protocols and threat detection systems.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section 
        className="w-full py-20 md:py-32 lg:py-40 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1083?blur=2&grayscale')" }}
        data-ai-hint="project blueprint"
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
              Our Projects
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
              A showcase of our commitment to innovation, quality, and client success.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.slug} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <Link href={`/projects/${project.slug}`} className="block overflow-hidden">
                  <Image src={project.image} data-ai-hint={project.aiHint} alt={project.title} width={400} height={250} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
                </Link>
                <CardHeader>
                  <Badge variant="outline" className="w-fit text-primary border-primary">{project.category}</Badge>
                  <CardTitle className="mt-2 text-lg">
                    <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0 text-accent">
                    <Link href={`/projects/${project.slug}`}>View Details <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}