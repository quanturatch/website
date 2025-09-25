import { ContactForm } from "@/components/contact-form";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Quantura',
  description: 'Get in touch with Quantura. We are here to answer your questions and help you get started.',
};

export default function ContactPage() {
  return (
    <>
      <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
              Contact Us
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              We're here to help. Reach out to us with your questions, inquiries, or feedback.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-start gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Get in Touch Directly</h2>
              <p className="text-muted-foreground">
                Find our contact information below or fill out the form to send us a message.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <div className="bg-primary/10 p-3 rounded-full transition-transform duration-300 group-hover:scale-110">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Our Office</h3>
                  <p className="text-muted-foreground">6-134, Seetharam Puram, Jaggaiahpet, Andhra Pradesh</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="bg-primary/10 p-3 rounded-full transition-transform duration-300 group-hover:scale-110">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-muted-foreground">contact@quantura.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="bg-primary/10 p-3 rounded-full transition-transform duration-300 group-hover:scale-110">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-muted-foreground">9490371113</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
