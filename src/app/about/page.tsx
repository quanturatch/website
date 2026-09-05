import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Quantura",
  description: "Learn about Quantura — an established software company building innovative products for real-world problems.",
};

const teamMembers = [
  {
    name: "Rajyalakshmi.N",
    role: "Chief Executive Officer",
    avatar: "https://picsum.photos/id/1015/200/200",
    aiHint: "professional woman",
  },
  {
    name: "Naresh.V",
    role: "Chief Technology Officer",
    avatar: "https://picsum.photos/id/1016/200/200",
    aiHint: "professional man",
  },
  {
    name: "N.K.V.Harshavardhan",
    role: "Developer",
    avatar: "https://picsum.photos/id/1019/200/200",
    aiHint: "creative man",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="w-full py-20 md:py-32 lg:py-40 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80')" }}
        data-ai-hint="circuit board technology"
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
              About Quantura
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
              An established, research-oriented software company building products that solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Quantura Technologies was founded with a simple yet powerful idea: to make technology accessible and useful for everyone — from individuals to local businesses. What started as a small initiative has grown into a team delivering innovative products across legal tech, local commerce, and hyperlocal discovery.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We help our clients identify risks and opportunities — addressing both short-term challenges and long-term value creation. From our home base in Andhra Pradesh, we bring products and ideas into the digital space with a focus on quality, simplicity, and impact.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-[500px] aspect-video rounded-xl overflow-hidden bg-secondary/50 border border-border/50 flex items-center justify-center">
                <p className="text-sm text-muted-foreground/60">Company Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-primary">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower individuals and local businesses with simple, innovative technology solutions that make daily life easier — whether it&apos;s tracking court cases, discovering local shops, or finding the perfect home.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-primary">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted technology partner for communities and local businesses, recognized for building products that are elegant, dependable, and built to scale — with a citizen-first focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <Badge variant="outline">What We Do</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technology Driven by Purpose</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We solve complex problems with AI-driven technology built around your needs — never one-size-fits-all.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "AI & Machine Learning", desc: "Predictive models and intelligent systems engineered for real-world workflows." },
              { title: "Custom Software Engineering", desc: "Bespoke web, mobile, and enterprise platforms designed around your exact process." },
              { title: "Mobile App Development", desc: "High-performance, user-friendly apps for Android and iOS that drive results." },
              { title: "Cloud & DevOps", desc: "Scalable, secure, cloud-native infrastructure with continuous delivery." },
              { title: "Data Engineering & Analytics", desc: "Pipelines and dashboards that turn scattered data into actionable insight." },
              { title: "Systems Integration", desc: "Connecting disparate systems into one seamless, dependable platform." },
            ].map((item, i) => (
              <div key={i} className="space-y-2 p-4 rounded-lg transition-all duration-300 hover:bg-secondary/50 hover:-translate-y-1">
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The driving force behind our success — dedicated and talented professionals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-4xl mt-12">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.aiHint} />
                  <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-sm text-primary">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
