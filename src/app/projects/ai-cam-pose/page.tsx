import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, PersonStanding, Scan, Cpu, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project: AI Cam Pose Detector | Quantura",
  description:
    "An advanced real-time human pose detection system powered by AI, ideal for fitness apps, motion tracking, gesture control, and interactive applications.",
};

// Key Features Section
const poseFeatures = [
  {
    title: "Real-Time Pose Tracking",
    description:
      "Detects 17–33 body keypoints instantly using a high-performance pose estimation model optimized for mobile & web.",
    icon: PersonStanding,
  },
  {
    title: "Activity Recognition",
    description:
      "Classifies user movements such as squats, push-ups, yoga poses, walking, and sports motions.",
    icon: Sparkles,
  },
  {
    title: "On-Device AI Processing",
    description:
      "Runs directly on mobile devices for fast response, improved privacy, and zero server dependency.",
    icon: Cpu,
  },
  {
    title: "Low-Light & Complex Background Support",
    description:
      "Enhanced detection accuracy even in low-light environments or cluttered backgrounds.",
    icon: Scan,
  },
];

// Use-Cases Section
const useCases = [
  {
    name: "Fitness & Workout Apps",
    description:
      "Provides rep counting, posture correction, and movement accuracy scoring for smart training apps.",
  },
  {
    name: "Gesture-Based Navigation",
    description:
      "Users can control interfaces using hand or body gestures—ideal for kiosk and AR/VR use cases.",
  },
  {
    name: "Sports Performance Tracking",
    description:
      "Captures joint angles and movement flow to help athletes improve precision and reduce injuries.",
  },
];

export default function AICamPosePage() {
  return (
    <>
      {/* TOP SECTION */}
      <section className="w-full py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            {/* LEFT TEXT SECTION */}
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary">
                AI Applications
              </Badge>

              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                AI Cam Pose Detector
              </h1>

              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                A fast and accurate AI-powered Human Pose Estimation (HPE) system that detects
                body joints, tracks movement, and analyzes human posture in real time. Designed
                for fitness apps, sports analysis, gesture AI, and intelligent motion-aware
                applications.
              </p>

              <Button asChild size="lg">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Demo <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <Image
                src="https://picsum.dev/image/1267/view"
                data-ai-hint="human pose estimation interface"
                width={550}
                height={400}
                alt="AI Cam Pose Detector"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES SECTION */}
      <section className="w-full py-12 md:py-24 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Key Features</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Powerful real-time AI capabilities designed for next-generation motion-aware applications.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {poseFeatures.map((feature) => (
              <Card
                key={feature.title}
                className="p-5 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <feature.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES SECTION */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 mb-12 text-center">
            <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl">Use Cases</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {useCases.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center text-center bg-secondary/40 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all"
              >
                <h4 className="text-xl font-bold mb-2">{item.name}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
