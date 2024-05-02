import Image from "next/image"


export default function Footer() {
    return (
        <footer className="flex justify-center gap-4 h-14 bg-[#131313]">
            <Image src={"/mail.svg"} alt={"Email"} />
            <div>Github</div>
            <div>linked in</div>
        </footer>
    )
}