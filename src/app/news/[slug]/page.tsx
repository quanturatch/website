import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// In a real app, you would fetch this data based on the slug
const getArticleData = (slug: string) => {
  // Mock data
  const articles: { [key: string]: any } = {
    "new-ai-world": {
      title: "A New World of AI",
      date: "November 2, 2024",
      author: "Jane Doe",
      category: "Industry Insights",
      image: "https://picsum.photos/1200/600",
      aiHint: "artificial intelligence brain",
    },
    "we-are-establishing": {
      title: "We Are Establishing Our New Branch",
      date: "October 28, 2024",
      author: "John Smith",
      category: "Company News",
      image: "https://picsum.photos/1200/601",
      aiHint: "modern office architecture",
    },
    "cutting-edge-cloud": {
      title: "Embracing Cutting-Edge Cloud Computing",
      date: "October 24, 2024",
      author: "Alice Johnson",
      category: "Technology",
      image: "https://picsum.photos/1200/602",
      aiHint: "cloud data center",
    },
     "remote-work-productivity": {
      title: "Maximizing Productivity in a Remote Work Environment",
      date: "October 20, 2024",
      author: "Bob Williams",
      category: "Productivity",
      image: "https://picsum.photos/1200/603",
      aiHint: "focused work home",
    },
    // Fallback article
    "future-of-ai": {
      title: "The Future of AI in Business",
      date: "October 26, 2024",
      author: "Jane Doe",
      category: "Industry Insights",
      image: "https://picsum.photos/1200/600",
      aiHint: "business strategy future",
    },
  };
  return articles[slug] || articles['future-of-ai'];
};


export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleData(params.slug);
  return {
    title: `${article.title} | Quantura News`,
  };
}


export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleData(params.slug);

  return (
    <article className="container max-w-4xl mx-auto py-12 px-4">
      <div className="mb-8">
        <Link href="/news" className="inline-flex items-center text-accent hover:text-accent/80 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to News
        </Link>
      </div>

      <header className="mb-8">
        <Badge variant="outline" className="mb-4 text-primary border-primary">{article.category}</Badge>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{article.title}</h1>
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

      <div className="prose prose-invert prose-lg max-w-none mx-auto text-foreground/90">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.
        </p>
        <p>
          Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam. Sorbi in justo.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">A Deeper Dive</h2>
        <p>
          Fusce pellentesque suscipit nibh. Integer vitae libero ac risus egestas placerat. Vestibulum commodo felis quis tortor. Ut aliquam sollicitudin leo. Cras iaculis ultricies nulla. Sed quis magna. Phasellus accumsan sem. Ut nonummy, nisl vel sodales molestie, sem justo rhoncus justo, vitae pulvinar enim nunc eu purus. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede.
        </p>
        <blockquote>
          "The digital world is constantly evolving. The key is not just to keep up, but to anticipate what's next."
        </blockquote>
        <p>
          Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
        </p>
      </div>
    </article>
  );
}
