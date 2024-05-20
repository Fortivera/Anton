import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex h-14 justify-center gap-4 bg-[#131313]">
            <Image src="/mail.svg" alt={"Email"} width={24} height={24} />
            <Image src="/github.svg" alt={"GitHub"} width={24} height={24} />
            <Image src="/mail.svg" alt={"Linkedin"} width={24} height={24} />
        </footer>
    );
}
