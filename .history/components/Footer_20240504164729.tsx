import Image from "next/image";
import Link from "next/link";

export default function SocialLinks() {
    return (
        <footer className="p- flex h-14 flex-row items-center justify-center gap-4 bg-[#131313]">
            <Link href="mailto:antonstrelkovskyy@gmail.com">
                <Image src="/mail.svg" alt={"Email"} width={24} height={24} />
            </Link>
            <Link href={"https://github.com/Fortivera"}>
                <Image
                    src="/github.svg"
                    alt={"GitHub"}
                    width={24}
                    height={24}
                />
            </Link>
            <Link href={"https://www.linkedin.com/in/anton-strelkovskyy"}>
                <Image
                    src="/linkedin.svg"
                    alt={"Linkedin"}
                    width={24}
                    height={24}
                />
            </Link>
        </footer>
    );
}
