import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
    return (
        <header className="h-32 bg-[#9b9588] border-b-2 border-[#7b766b]">
            <nav className="flex justify-end gap">

                <Button asChild className="bg-[#828888] ">
                    <Link href="/blog">Blog</Link>
                </Button>
                <Button asChild>
                    <Link href="#projects">Projects</Link>
                </Button>
                <Button asChild>
                    <Link href="#contacts">Contacts</Link>
                </Button>
                <Button asChild>
                    <Link href="#about_me">About me</Link>
                </Button>

            </nav>
        </header>
    )
}