import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education | Quantura",
  description:
    "Explore the latest education articles, research, and learning insights curated by Quantura.",
};

const educationArticles = [
  {
    title: "Free AI Training By Qualcomm",
    date: "2025-12-17",
    author: "Qualcomm",
    category: "EdTech",
    image: "/images/Qualcomm_logo.png",  /*"https://picsum.photos/800/450?1",*/
    url: "https://academy.qualcomm.com/course-catalog/AI-Upskilling-Registration?cmpid=pdsrc-IrF8ySITKB&utm_medium=pdsrc&utm_source=AW&utm_campaign=AI-Upskilling&gad_source=1&gad_campaignid=22624412112&gbraid=0AAAAAol8cCsW5peVPIsrRjNRPURgIayS3&gclid=Cj0KCQiAxonKBhC1ARIsAIHq_ltxEukMuu5rpBDvFNYnxaRAKwfpHPGiOPiRFWTecA5q86j9NEqTlEAaAlyfEALw_wcB",
    excerpt:
      "Artificial intelligence is redefining how students learn and teachers teach across the globe.",
  },
  {
    title: "Introduction to Generative AI",
    date: "2025-12-17",
    author: "AWS",
    category: "EdTech",
    image: "/images/aws_skillbooster.jpg",
    url: "https://skillbuilder.aws/learn/ZEVZZ1D4AS/introduction-to-generative-ai--art-of-the-possible/Y7MTGJCW1U?refid=34e7a278-73df-4017-bb0e-85af91cbced8",
    excerpt:
      "Introduction to Generative AI - Art of the Possible",
  },
  {
    title: "Why Student Mental Health Matters More Than Ever",
    date: "2025-12-17",
    author: "Cambridge Wellbeing Check",
    category: "Wellbeing",
    image: "/images/cambridge.png",
    url: "https://www.cambridge.org/insight/discover/what-is-wellbeing-in-schools",
    excerpt:
      "Wellbeing is a subjective, psychological state that changes over time. Context also plays a crucial role so two children in the same class, who achieve the same marks, who even had the same breakfast, can experience very different levels of wellbeing.",
  },
  {
    title: "FREE:Certified Phishing Prevention Specialist",
    date: "2025-12-19",
    author: "Hack and Fix",
    category: "Edtech",
    image: "/images/CPPS-cover.png",
    url: "https://academy.hackandfix.com/courses-archive/certified-phishing-prevention-specialist/",
    excerpt:
      "Certified Phishing Prevention Specialist (CPPS), demonstrating their proficiency in safeguarding organizational and personal data against phishing attacks.Wellbeing is a subjective, psychological state that changes over time. Context also plays a crucial role so two children in the same class, who achieve the same marks, who even had the same breakfast, can experience very different levels of wellbeing.",
  },
];

export default function EducationPage() {
  // ✅ auto-sort latest → oldest
  const sortedArticles = [...educationArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section
        className="relative w-full py-20 md:py-32 lg:py-40 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/learning.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Badge>Education</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-white">
              Education Insights
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
              Curated articles, research, and learning insights from trusted
              education sources.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- ARTICLES ---------- */}
      <section className="w-full py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {sortedArticles.map((article, index) => (
              <Card
                key={index}
                className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={800}
                    height={450}
                    className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <CardHeader>
                  <Badge className="w-fit">{article.category}</Badge>
                  <CardTitle className="mt-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription>
                    {article.author} •{" "}
                    {new Date(article.date).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">
                    {article.excerpt}
                  </p>
                </CardContent>

                <CardFooter>
                  <Button asChild variant="link" className="p-0 text-accent">
                    <Link
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get/Ref
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
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
