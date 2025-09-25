import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Bone, FileJson, Stethoscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project: RadixScan | Quantura',
  description: 'A sophisticated AI tool for analyzing X-ray images, assisting medical professionals in detecting anomalies and improving diagnostic accuracy.',
};

export default function XRayAnalysisPage() {
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
              <Badge variant="outline" className="text-primary border-primary">Healthcare & AI</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">RadixScan (Project Kappa)</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                A sophisticated AI tool for analyzing X-ray images, assisting medical professionals in detecting anomalies and improving diagnostic accuracy. This project highlights our commitment to developing technology for critical sectors.
              </p>
              <Button asChild size="lg">
                <a href="https://ai-x-ray-analysis-app.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Visit Live Project <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://picsum.photos/550/402"
                data-ai-hint="medical imaging interface"
                width={550}
                height={400}
                alt="RadixScan Project"
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
                    Explore the core functionalities of the RadixScan AI.
                </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                        <Bone className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Anomaly Detection</h4>
                    <p className="text-muted-foreground">The AI model highlights potential fractures, abnormalities, and other points of interest on X-ray images for radiologist review.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                        <Stethoscope className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Diagnostic Assistance</h4>
                    <p className="text-muted-foreground">Provides a supportive second opinion, helping to reduce diagnostic errors and improve the speed and confidence of medical assessments.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                        <FileJson className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Structured Reporting</h4>
                    <p className="text-muted-foreground">Generates preliminary reports from the image analysis, which can be integrated into existing medical record systems to streamline workflows.</p>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
