import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import Logo from "@/components/logo";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-secondary">
      <div className="container py-10 md:py-12">
        {/* Top section */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Solving real-world problems by building simple, powerful software — products that are elegant, dependable and built to scale.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products#e-court-automate" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  E-Court Automate
                </Link>
              </li>
              <li>
                <Link href="/products#whatsapp-status-saver" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  WhatsApp Status Saver
                </Link>
              </li>
              <li>
                <Link href="/products#bykm" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  ByKm
                </Link>
              </li>
              <li>
                <Link href="/products#town-trade" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Town Trade
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>6-134, Seetharam Puram, Jaggaiahpet, AP</li>
              <li>contact@quantura.com</li>
              <li>9490371113</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Quantura Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" prefetch={false}>
              <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" prefetch={false}>
              <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" prefetch={false}>
              <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
