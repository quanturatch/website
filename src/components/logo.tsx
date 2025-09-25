import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group" prefetch={false}>
      <Image src="/logo.png" alt="Quantura Logo" width={32} height={32} className="rounded-md transition-transform duration-300 group-hover:scale-110" />
      <div className="flex flex-col">
        <span className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary leading-tight">Quantura</span>
        <span className="text-xs text-muted-foreground leading-tight">Technologies</span>
      </div>
    </Link>
  );
}
