import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Eye, Microscope, Sprout } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project: PlantLens | Quantura',
  description: 'An AI-powered plant identification tool that recognizes plants from leaf images, providing detailed information and care instructions.',
};

export default function PlantIdentifierPage() {
  return (
    <>
      <section className="w-full py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <Link href="/projects" className="inline-flex items-center text-accent hover:text-accent/80 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary">AI & Machine Learning</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">PlantLens</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                An AI-powered plant identification tool that recognizes plants from leaf images, providing detailed information and care instructions. This project demonstrates our ability to apply AI to ecological and educational contexts.
              </p>
              <Button asChild size="lg">
                <a href="https://ai-plant-identify-app.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Visit Live Project <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://guangzhouflowershop.com/wp-content/uploads/2017/01/Tips-for-garden-flowers-and-plants.jpg"
                data-ai-hint="plant identification app"
                width={550}
                height={400}
                alt="FloraLens Project"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-secondary">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                    Explore the powerful features of the PlantLens platform.
                </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                        <Eye className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Instant Identification</h4>
                    <p className="text-muted-foreground">Upload a photo of a plant leaf and our AI will identify the species with high accuracy in seconds.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                        <Microscope className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Disease Diagnosis</h4>
                    <p className="text-muted-foreground">The system can detect common plant diseases and pests, offering potential solutions and preventive measures.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                        <Sprout className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Personalized Care Guides</h4>
                    <p className="text-muted-foreground">Receive detailed care instructions tailored to your identified plant, including watering, sunlight, and soil needs.</p>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
