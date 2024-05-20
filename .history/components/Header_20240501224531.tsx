import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="fixed flex h-16 w-full justify-center rounded-b-lg border-b border-[#23252c72] bg-[#f5f5f5] bg-opacity-10 bg-gradient-to-b from-[#5b5b5b66]   to-[#3d3c3c65]">
      <nav className="flex justify-end ">
        <Button asChild className="bg-[#828888] ">
          <Link href="/blog">Blog</Link>
        </Button>
        <Button asChild>
          <Link href="#projects">Work</Link>
        </Button>
        <Button asChild>
          <Link href="#contacts">Contacts</Link>
        </Button>
        <Button asChild>
          <Link href="#about_me">About me</Link>
        </Button>
      </nav>
    </header>
  );
}
