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
    title: "NutriLens",
    category: "AI & Machine Learning",
    image: "https://picsum.dev/image/1277/view",
    aiHint: "nutrition analysis app",
    description: "An AI-powered nutrition analysis platform that provides instant, detailed nutritional information from a photo of a meal.",
  },
  {
    slug: "plant-identifier",
    title: "PlantLens",
    category: "AI & Machine Learning",
    image: "https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg",
    aiHint: "plant leaf",
    description: "An AI-powered plant identification tool that recognizes plants from leaf images, providing detailed information and care instructions.",
  },
  {
    slug: "x-ray-analysis",
    title: "RadixScan",
    category: "Healthcare & AI",
    image: "https://dianova.in/assets/img/services/x-ray-700-400.jpg",
    aiHint: "medical x-ray",
    description: "A sophisticated AI tool for analyzing X-ray images, assisting medical professionals in detecting anomalies and improving diagnostic accuracy.",
  },
  {
    slug: "mobile-app-dev",
    title: "Mobile App Development",
    category: "Mobile Development",
    image: "/images/app.jpg",
    aiHint: "mobile app interface",
    description: "A sleek and intuitive cross-platform mobile application for iOS and Android, designed to enhance customer engagement and streamline access to services.",
  },
  {
    slug: "web-development",
    title: "Web Development",
    category: "Web Development",
    image: "https://acropolium.com/img/articles/ai-and-web-development-why-and-how-to-leverage-ai-for-digital-solutions/img01.jpg",
    aiHint: "modern website design",
    description: "A complete redesign and development of a corporate website, focusing on performance, responsive design, and an improved user experience to drive conversions.",
  },
  {
    slug: "ai-cam-pose",
    title: "AI Cam Pose Detector",
    category: "AI Apps",
    image: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/453321701/original/588e539c2b9c54a61da0dd0a67e9882ac344fda1/develop-ai-pose-estimation-and-motion-tracking-sports-analysis-software.png",
    aiHint: "network security",
    description: "Human Pose Estimation (HPE) is a way of identifying and classifying the joints in the human body.Essentially it is a way to capture a set of coordinates for each joint (arm, head, torso, etc.,) which is known as a key point that can describe a pose of a person. The connection between these points is known as a pair.",
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