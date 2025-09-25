import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Droplets, Heart, Leaf, Shield, TestTube2, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project: NutriLens | Quantura',
  description: 'An AI-powered nutrition analysis platform that provides instant, detailed nutritional information from a photo of a meal.',
};

const nutrientProfile = [
    { name: "Calories", value: "5 kcal", description: "Energy for body functions", icon: Zap },
    { name: "Carbohydrates", value: "1.4 g", description: "Primary energy source", icon: Zap },
    { name: "Fiber", value: "0.2 g", description: "Aids digestion, gut health", icon: Leaf },
    { name: "Sugars", value: "1 g", description: "Natural sweetness, quick energy", icon: Zap },
    { name: "Vitamin C", value: "0.46 mg", description: "Immune support, antioxidant", icon: Shield },
    { name: "Potassium", value: "10.7 mg", description: "Electrolyte balance, heart health", icon: Heart },
    { name: "Vitamin K", value: "0.12 mcg", description: "Blood clotting, bone health", icon: Shield },
    { name: "Water", value: "8.4 g", description: "Hydration, cellular function", icon: Droplets },
    { name: "Quercetin", value: "trace", description: "Potent antioxidant, anti-inflammatory", icon: TestTube2 },
];

const dietarySuitability = [
    {
        name: "Diabetes",
        description: "Apples can be eaten by people with diabetes in moderation. Their fiber content helps to slow down sugar absorption, preventing sharp blood sugar spikes. Portion control is key.",
        icon: Leaf
    },
    {
        name: "Heart Health",
        description: "Apples support heart health through their fiber, antioxidant, and potassium content. They can help reduce cholesterol, blood pressure, and inflammation, all factors in cardiovascular disease prevention.",
        icon: Heart
    },
    {
        name: "Allergies",
        description: "Apple allergies are uncommon but possible, often associated with Oral Allergy Syndrome (OAS) in individuals allergic to birch pollen. Symptoms are usually mild.",
        icon: Shield
    }
];

export default function NutriLensPage() {
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">NutriLens (Project Alpha)</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                An AI-powered nutrition analysis platform that provides instant, detailed nutritional information from a photo of a meal. This project showcases our expertise in building intelligent systems with practical, real-world applications.
              </p>
              <Button asChild size="lg">
                <a href="https://nutrilens-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Visit Live Project <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://picsum.photos/550/400"
                data-ai-hint="nutrition analysis app interface"
                width={550}
                height={400}
                alt="NutriLens Project"
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
                    A closer look at the detailed analysis provided by NutriLens.
                </p>
            </div>
            <Card className="bg-background/50">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Heart className="text-green-500" /> Health Assessment: Healthy</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Red apples are a very healthy fruit, rich in fiber, vitamins, and antioxidants. They are low in calories and fat, contributing to overall well-being and disease prevention.</p>
                </CardContent>
            </Card>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="space-y-4 mb-12 text-center">
                <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nutrient Profile <span className="text-lg text-muted-foreground">(per 10g)</span></h3>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {nutrientProfile.map(nutrient => (
                    <Card key={nutrient.name} className="p-4 flex items-start gap-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        <nutrient.icon className="h-6 w-6 text-primary mt-1" />
                        <div>
                            <h4 className="font-semibold">{nutrient.name}: {nutrient.value}</h4>
                            <p className="text-sm text-muted-foreground">{nutrient.description}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-secondary">
        <div className="container px-4 md:px-6">
            <div className="space-y-4 mb-12 text-center">
                <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl">Dietary Suitability</h3>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
                {dietarySuitability.map(item => (
                    <div key={item.name} className="flex flex-col items-center text-center">
                        <div className="bg-primary/10 p-4 rounded-full mb-4">
                            <item.icon className="h-10 w-10 text-primary" />
                        </div>
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