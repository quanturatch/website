import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News | Quantura',
  description: 'Stay up-to-date with the latest news, announcements, and industry insights from Quantura.',
};

const newsArticles = [
  {
    slug: "new-ai-world",
    title: "A New World of AI",
    date: "November 2, 2024",
    category: "Industry Insights",
    image: "https://picsum.photos/400/250",
    aiHint: "artificial intelligence",
    excerpt: "Exploring the latest breakthroughs in AI and their impact on our world and the future of technology.",
  },
  {
    slug: "we-are-establishing",
    title: "We Are Establishing Our New Branch",
    date: "October 28, 2024",
    category: "Company News",
    image: "https://picsum.photos/400/251",
    aiHint: "new office",
    excerpt: "Quantura is excited to announce the opening of our new branch, expanding our reach and services to new horizons.",
  },
  {
    slug: "cutting-edge-cloud",
    title: "Embracing Cutting-Edge Cloud Computing",
    date: "October 24, 2024",
    category: "Technology",
    image: "https://picsum.photos/400/252",
    aiHint: "cloud computing",
    excerpt: "We're leveraging the latest in cloud technology to deliver faster, more reliable, and scalable services to our clients.",
  },
  {
    slug: "remote-work-productivity",
    title: "Maximizing Productivity in a Remote Work Environment",
    date: "October 20, 2024",
    category: "Productivity",
    image: "https://picsum.photos/400/253",
    aiHint: "home office",
    excerpt: "Remote work is here to stay. Learn effective strategies and tools to keep your team productive and engaged, no matter where they are.",
  },
  {
    slug: "sustainability-in-tech",
    title: "The Growing Importance of Sustainability in Tech",
    date: "October 15, 2024",
    category: "Technology",
    image: "https://picsum.photos/400/254",
    aiHint: "green technology",
    excerpt: "Sustainability is no longer a buzzword but a business imperative. Explore how the tech industry is moving towards a greener future.",
  },
  {
    slug: "q3-earnings-report",
    title: "Quantura Reports Record Growth in Q3",
    date: "October 1, 2024",
    category: "Company News",
    image: "https://picsum.photos/400/255",
    aiHint: "financial chart",
    excerpt: "A look at our strong performance in the third quarter, highlighting key achievements and future outlook.",
  },
];

export default function NewsPage() {
  return (
    <>
      <section 
        className="w-full py-20 md:py-32 lg:py-40 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1082?blur=2&grayscale')" }}
        data-ai-hint="news media"
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
              News & Updates
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
              The latest articles, announcements, and insights from the Quantura team.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles.map((article) => (
              <Card key={article.slug} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <Link href={`/news/${article.slug}`} className="block overflow-hidden">
                  <Image src={article.image} data-ai-hint={article.aiHint} alt={article.title} width={400} height={250} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
                </Link>
                <CardHeader>
                  <Badge variant="outline" className="w-fit text-primary border-primary">{article.category}</Badge>
                  <CardTitle className="mt-2 text-lg">
                    <Link href={`/news/${article.slug}`}>{article.title}</Link>
                  </CardTitle>
                  <CardDescription>{article.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0 text-accent">
                    <Link href={`/news/${article.slug}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
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