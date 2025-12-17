import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// ---------------- ARTICLE DATA ----------------
const getArticleData = (slug: string) => {
  const articles: Record<string, any> = {
    "new-ai-world": {
      title: "A New World of AI",
      date: "December 2, 2025",
      author: "Jane Doe",
      category: "Industry Insights",
      image: "https://picsum.photos/1200/600",
      aiHint: "artificial intelligence brain",
      body: (
        <div className="prose prose-invert prose-lg max-w-none mx-auto text-foreground/90">
          <p>
            Artificial intelligence is reshaping industries by automating
            workflows and enhancing decision-making across sectors.
          </p>
          <p>
            Businesses adopting AI early are seeing improved efficiency and
            faster innovation cycles.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">
            A Deeper Dive
          </h2>
          <p>
            From predictive analytics to generative AI, modern tools are
            redefining how organizations operate.
          </p>
          <blockquote>
            "AI will not replace humans, but humans using AI will replace those who don’t."
          </blockquote>
        </div>
      ),
    },

    "cutting-edge-cloud": {
      title: "Embracing Cutting-Edge Cloud Computing",
      date: "October 24, 2024",
      author: "Alice Johnson",
      category: "Technology",
      image: "https://picsum.photos/1200/602",
      aiHint: "cloud data center",
      body: (
        <div className="prose prose-invert prose-lg max-w-none mx-auto text-foreground/90">
          <p>
            Cloud computing has become the backbone of modern digital
            infrastructure.
          </p>
          <p>
            Organizations rely on cloud platforms for scalability, security, and
            operational flexibility.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">
            Key Cloud Benefits
          </h2>
          <p>
            Reduced costs, high availability, and faster deployment drive cloud
            adoption worldwide.
          </p>
          <blockquote>
            "The cloud is not the future — it is the present."
          </blockquote>
        </div>
      ),
    },

    "remote-work-productivity": {
      title: "Maximizing Productivity in a Remote Work Environment",
      date: "October 20, 2024",
      author: "Bob Williams",
      category: "Productivity",
      image: "https://picsum.photos/1200/603",
      aiHint: "focused work home",
      body: (
        <div className="prose prose-invert prose-lg max-w-none mx-auto text-foreground/90">
          <p>
            Remote work offers flexibility, but productivity depends on
            discipline and structure.
          </p>
          <p>
            Clear communication and the right collaboration tools are critical
            for success.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">
            Productivity Strategies
          </h2>
          <p>
            Time management, focus techniques, and healthy work boundaries help
            remote teams thrive.
          </p>
          <blockquote>
            "Productivity is less about time and more about focus."
          </blockquote>
        </div>
      ),
    },

    "sustainability-in-tech": {
      title: "The Growing Importance of Sustainability in Tech",
      date: "October 18, 2024",
      author: "Emily Green",
      category: "Sustainability",
      image: "https://picsum.photos/1200/604",
      aiHint: "green technology sustainability",
      body: (
        <div className="prose prose-invert prose-lg max-w-none mx-auto text-foreground/90">
          <p>
            Sustainability is becoming a core priority in the technology
            industry.
          </p>
          <p>
            Companies are investing in energy-efficient infrastructure and
            eco-friendly practices.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">
            Why Sustainability Matters
          </h2>
          <p>
            Responsible innovation reduces environmental impact while improving
            long-term business resilience.
          </p>
          <blockquote>
            "Sustainability is not a trend — it is a responsibility."
          </blockquote>
        </div>
      ),
    },
  };

  return articles[slug] || articles["new-ai-world"];
};

// ---------------- METADATA ----------------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleData(slug);

  return {
    title: `${article.title} | Quantura News`,
  };
}

// ---------------- PAGE ----------------
export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleData(slug);

  return (
    <article className="container max-w-4xl mx-auto py-12 px-4">
      <div className="mb-8">
        <Link
          href="/news"
          className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to News
        </Link>
      </div>

      <header className="mb-8">
        <Badge
          variant="outline"
          className="mb-4 text-primary border-primary"
        >
          {article.category}
        </Badge>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          {article.title}
        </h1>

        <p className="text-muted-foreground">
          Published on {article.date} by {article.author}
        </p>
      </header>

      <Image
        src={article.image}
        alt={article.title}
        width={1200}
        height={600}
        data-ai-hint={article.aiHint}
        className="w-full rounded-lg shadow-lg mb-8"
        priority
      />

      {/* Dynamic content per slug */}
      {article.body}
    </article>
  );
}
