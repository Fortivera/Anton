import Image from "next/image";
import Link from "next/link";

export default function SocialLinks() {
    return (
        <footer className="p- flex h-14 flex-row items-center justify-center gap-4 bg-[#131313]">
            <Link
                className="flex flex-row items-center justify-center"
                href="mailto:dfgd@gmail.com"
            >
                <Image src="/mail.svg" alt={"Email"} width={24} height={24} />
            </Link>
            <Link href={""}>
                <Image
                    src="/github.svg"
                    alt={"GitHub"}
                    width={24}
                    height={24}
                />
            </Link>
            <Link href={""}>
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
