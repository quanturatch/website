import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Quantura',
  description: 'Learn about Quantura, our mission, our values, and the team that makes it all happen.',
};

const teamMembers = [
  {
    name: "Kiran Kumar.N",
    role: "Chief Executive Officer",
    avatar: "https://picsum.photos/id/1015/200/200",
    aiHint: "professional man"
  },
  {
    name: "Naresh.V",
    role: "Chief Technology Officer",
    avatar: "https://picsum.photos/id/1016/200/200",
    aiHint: "professional man"
  },
  // {
  //   name: "Rajylakshmi",
  //   role: "Chief Operating Officer",
  //   avatar: "https://picsum.photos/id/1018/200/200",
  //   aiHint: "professional woman"
  // },
  {
    name: "Mahankali Phani",
    role: "Developer",
    avatar: "https://picsum.photos/id/1019/200/200",
    aiHint: "creative woman"
  },
];

export default function AboutPage() {
  return (
    <>
      <section 
        className="w-full py-20 md:py-32 lg:py-40 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?blur=2&grayscale')" }}
        data-ai-hint="modern office background"
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
              About Quantura
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
              We are a team of passionate innovators dedicated to building the future of digital business solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 2024, Quantura started with a simple yet powerful idea: to make cutting-edge technology accessible to businesses of all sizes. What began in a small garage has grown into a leading provider of corporate solutions, serving clients worldwide. Our journey has been one of relentless innovation, commitment to quality, and a deep-seated desire to help our clients succeed.
              </p>
              <p className="text-muted-foreground">
                Through the years, we've navigated the ever-changing tides of technology, always staying one step ahead to ensure our partners are equipped with the best tools for growth. Our success is a testament to the strong relationships we've built and the tangible results we've delivered.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://picsum.photos/550/311"
                width={550}
                height={310}
                alt="Our Story"
                data-ai-hint="technology nature"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-primary">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with innovative and reliable technology solutions that drive growth, efficiency, and success in a rapidly evolving digital landscape.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-primary">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the most trusted and sought-after partner for businesses navigating digital transformation, recognized for our expertise, integrity, and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The driving force behind our success is our team of dedicated and talented professionals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-6xl mt-12">
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