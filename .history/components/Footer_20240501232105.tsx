import Image from "next/image"


export default function Footer() {
    return (
        <footer className="flex justify-center gap-4 h-14 bg-[#131313]">
            <Image className="bg-slate-400" src="/mail.svg" alt={"Email"} width={24} height={24} />
            <div>Github</div>
            <div>linked in</div>
        </footer>
    )
}