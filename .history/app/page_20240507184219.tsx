"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import SocialLinks from "@/components/Footer";
import Link from "next/link";

export default function Home() {
    const [isHoveredPair1, setIsHoveredPair1] = useState<boolean>(false);
    const [isHoveredPair2, setIsHoveredPair2] = useState<boolean>(false);
    const [isHoveredPair3, setIsHoveredPair3] = useState<boolean>(false);

    return (
        <div className="flex min-h-screen w-full flex-col text-base text-white">
            <main className="mx-auto flex w-full flex-grow flex-col bg-[#131313] p-6">
                <section
                    id="about_me"
                    className="container mx-auto px-4 pb-10 pt-6 sm:pb-32 sm:pt-14"
                >
                    <div className="flex flex-col items-center space-y-1">
                        <p className="flex flex-col items-center justify-center pb-5 pt-5 text-center text-4xl font-medium text-neutral-200 sm:flex-row sm:pt-10">
                            Anton Strelkovkyy
                        </p>
                        <div className="flex flex-col items-center justify-center py-3">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#333333]">
                                <Image
                                    src="/profilepic.jpg"
                                    alt="avatar"
                                    width={100}
                                    height={100}
                                    className="rounded-full"
                                />
                            </div>
                            <SocialLinks />
                            <p className="flex max-w-[30rem] items-center justify-center text-center text-lg text-neutral-400">
                                &ldquo;Problems force you to think,
                                <br /> creating elegant solutions in the
                                process.&rdquo;
                            </p>
                        </div>
                        <p className="flex max-w-[35rem] items-center justify-center pt-5 text-center text-xl text-neutral-200">
                            Software developer, Saas and business solutions.
                            Passionate about technology and its impact on the
                            world
                        </p>
                    </div>
                </section>
                {/* Desktop view */}
                <section
                    className="hidden grid-cols-1 justify-items-center gap-24 py-12 sm:grid "
                    id="projects"
                >
                    <div className="flex flex-col space-y-5 xl:flex-row xl:space-x-10 xl:space-y-0">
                        <Card
                            onMouseEnter={() => setIsHoveredPair1(true)}
                            onMouseLeave={() => setIsHoveredPair1(false)}
                            className={`relative max-w-[51rem] rounded-lg border border-[#60647872] bg-opacity-10  bg-gradient-to-b  from-[#35374366] to-[#24212b65] p-6 
              ${isHoveredPair1 ? "border-[#21222972] bg-[#24242779]" : "bg-[#9d94e9]"}`}
                        >
                            <CardContent className="p-0 text-[#8b8f8f] shadow-sm shadow-[#4d4d4d]">
                                <Image
                                    className="w-full"
                                    src={"/graphalytics.png"}
                                    alt={"Graphalytics"}
                                    width={1500}
                                    height={1500}
                                />
                            </CardContent>
                        </Card>
                        <Card
                            onMouseEnter={() => setIsHoveredPair1(true)}
                            onMouseLeave={() => setIsHoveredPair1(false)}
                            className={`relative max-h-[25rem] max-w-[51rem] rounded-lg border border-[#60647872] bg-opacity-10 bg-gradient-to-b from-[#35374366]  to-[#24212b65]  p-6 xl:max-h-none xl:max-w-lg 
              ${isHoveredPair1 ? "border-[#21222972] bg-[#24242779]" : "bg-[#9d94e9]"}`}
                        >
                            <CardHeader className="pt-0">
                                <CardTitle className="pt-0 text-lg font-semibold text-[#D1D1D2]">
                                    Graphalytics
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-[#8b8f8f]">
                                <div className="text-base">
                                    <div className="flex flex-col space-y-5">
                                        <p>
                                            Tech Stack: Typescript, Next.js 14,
                                            Firebase, Stripe, D3.js, NoSQL
                                        </p>
                                        <ul className="list-disc space-y-2 pl-3">
                                            <li>
                                                A charting library that
                                                minimizes abstraction,
                                                empowering users with full
                                                control over their code
                                            </li>
                                            <li>
                                                Designed for users seeking a
                                                dynamic and high-performance
                                                charting solution
                                            </li>
                                            <li>
                                                Includes the most popular chart
                                                types, seamlessly integrable
                                                into an analytics dashboard
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                            <div className="mx-auto flex w-full items-center justify-center pt-8 hover:bg-none">
                                <Link
                                    className="flex w-2/3 items-center justify-center"
                                    href="https://www.graphalytics.co/"
                                >
                                    <Button
                                        type="button"
                                        className="w-2/3 bg-[#454166] shadow-lg hover:bg-[#454166]"
                                    >
                                        <p>Visit</p>
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    </div>
                    <div className="flex flex-col-reverse xl:flex-row xl:space-x-10 xl:space-y-0">
                        <Card
                            onMouseEnter={() => setIsHoveredPair2(true)}
                            onMouseLeave={() => setIsHoveredPair2(false)}
                            className={`relative max-h-[25rem] max-w-[51rem] rounded-lg border border-[#60647872] bg-opacity-10 bg-gradient-to-b from-[#35374366]  to-[#24212b65]  p-6 xl:max-h-none xl:max-w-lg 
              ${isHoveredPair2 ? "border-[#21222972] bg-[#24242779]" : "bg-[#9d94e9]"}`}
                        >
                            <CardHeader className="pt-0">
                                <CardTitle className="pt-0 text-lg font-semibold text-[#D1D1D2]">
                                    YourEstate
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-[#8b8f8f]">
                                <div className="text-base">
                                    <div className="flex flex-col space-y-5">
                                        <p>
                                            Tech Stack: Typescript, C#, Next.js
                                            14, Azure, D3.js, SQL
                                        </p>
                                        <ul className="list-disc space-y-2 pl-3">
                                            <li>
                                                A modular real estate solution
                                                that simplifies property
                                                management
                                            </li>
                                            <li>
                                                Designed to integrate data
                                                analytics and visualization
                                                capabilities within a single
                                                platform
                                            </li>
                                            <li>
                                                Scalable and user-friendly,
                                                suitable for property owners at
                                                all experience levels
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                            <div className="mx-auto flex w-full flex-row items-center justify-center space-x-5 pt-8 hover:bg-none">
                                <Link
                                    className="flex w-1/3 items-center justify-center"
                                    href="https://yourestate.vercel.app/"
                                >
                                    <Button
                                        type="button"
                                        className="w-full bg-[#454166] shadow-lg hover:bg-[#454166]"
                                    >
                                        <p>Visit</p>
                                    </Button>
                                </Link>
                                <Link
                                    className="flex w-1/3 items-center justify-center"
                                    href="https://github.com/Fortivera/PropertyNextjs"
                                >
                                    <Button
                                        type="button"
                                        className="w-full bg-[#454166] shadow-lg hover:bg-[#454166]"
                                    >
                                        <Image
                                            src="/githublight.svg"
                                            alt={"GitHub"}
                                            width={24}
                                            height={24}
                                        />
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                        <Card
                            onMouseEnter={() => setIsHoveredPair2(true)}
                            onMouseLeave={() => setIsHoveredPair2(false)}
                            className={`relative mb-5 max-w-[51rem] rounded-lg border border-[#60647872]  bg-opacity-10  bg-gradient-to-b from-[#35374366] to-[#24212b65] p-6 xl:mb-0
              ${isHoveredPair2 ? "border-[#21222972] bg-[#24242779]" : "bg-[#9d94e9]"}`}
                        >
                            <CardContent className="p-0 text-[#8b8f8f] shadow-sm shadow-[#4d4d4d]">
                                <Image
                                    className="w-full"
                                    src={"/yourestate.png"}
                                    alt={"YourEstate"}
                                    width={1500}
                                    height={1500}
                                />
                            </CardContent>
                        </Card>
                    </div>
                    <div className="flex flex-col xl:flex-row xl:space-x-10 xl:space-y-0">
                        <Card
                            onMouseEnter={() => setIsHoveredPair3(true)}
                            onMouseLeave={() => setIsHoveredPair3(false)}
                            className={`relative mb-5 max-w-[51rem] rounded-lg border border-[#60647872]  bg-opacity-10  bg-gradient-to-b from-[#35374366] to-[#24212b65] p-6 xl:mb-0
              ${isHoveredPair2 ? "border-[#21222972] bg-[#24242779]" : "bg-[#9d94e9]"}`}
                        >
                            <CardContent className="p-0 text-[#8b8f8f] shadow-sm shadow-[#4d4d4d]">
                                <Image
                                    className="w-full"
                                    src={"/justcookit.png"}
                                    alt={"Justcookit"}
                                    width={1500}
                                    height={1500}
                                />
                            </CardContent>
                        </Card>
                        <Card
                            onMouseEnter={() => setIsHoveredPair3(true)}
                            onMouseLeave={() => setIsHoveredPair3(false)}
                            className={`relative max-h-[25rem] max-w-[51rem] rounded-lg border border-[#60647872] bg-opacity-10 bg-gradient-to-b from-[#35374366]  to-[#24212b65]  p-6 xl:max-h-none xl:max-w-lg 
              ${isHoveredPair3 ? "border-[#21222972] bg-[#24242779]" : "bg-[#9d94e9]"}`}
                        >
                            <CardHeader className="pt-0">
                                <CardTitle className="pt-0 text-lg font-semibold text-[#D1D1D2]">
                                    Justcookit
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-[#8b8f8f]">
                                <div className="text-base">
                                    <div className="flex flex-col space-y-5">
                                        <p>
                                            Tech Stack: Python, Django, Amazon
                                            S3, PostgreSQL
                                        </p>
                                        <ul className="list-disc space-y-2 pl-3">
                                            <li>
                                                Recipe website featuring
                                                thousands of diverse dishes
                                            </li>
                                            <li>
                                                Features easy-to-follow
                                                instructions and a user-friendly
                                                interface
                                            </li>
                                            <li>
                                                Great virity of recipes of all
                                                cousines
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                            <div className="mx-auto flex w-full flex-row items-center justify-center space-x-5 pt-8 hover:bg-none">
                                <Link
                                    className="flex w-1/3 items-center justify-center"
                                    href="https://justcook.fly.dev"
                                >
                                    <Button
                                        type="button"
                                        className="w-full bg-[#454166] shadow-lg hover:bg-[#454166]"
                                    >
                                        <p>Visit</p>
                                    </Button>
                                </Link>
                                <Link
                                    className="flex w-1/3 items-center justify-center"
                                    href="https://github.com/Fortivera/Recipe_webapp?tab=readme-ov-file"
                                >
                                    <Button
                                        type="button"
                                        className="w-full bg-[#454166] shadow-lg hover:bg-[#454166]"
                                    >
                                        <Image
                                            src="/githublight.svg"
                                            alt={"GitHub"}
                                            width={24}
                                            height={24}
                                        />
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    </div>
                </section>
                {/* Mobile view */}
                <section
                    className="grid grid-cols-1 justify-items-center gap-8 py-12 sm:hidden"
                    id="projects"
                >
                    <div className="flex flex-col">
                        <Card
                            className={`relative rounded-lg border border-[#60647872] bg-[#9d94e9] bg-opacity-10 bg-gradient-to-b  from-[#35374366] to-[#24212b65] p-6 hover:border-[#21222972] hover:bg-[#24242779]`}
                        >
                            <CardHeader className="p-0 pb-4">
                                <CardTitle className="text-lg font-semibold text-[#D1D1D2] ">
                                    Graphalytics
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 text-[#8b8f8f]">
                                <div className="text-sm">
                                    <div className="flex max-h-[25rem] flex-col space-y-5 overflow-y-auto">
                                        <p>
                                            Tech Stack: Next.js 14, Typescript,
                                            Firebase, Stripe, D3.js
                                        </p>
                                        <ul className="list-disc space-y-2 pl-3">
                                            <li>
                                                Analytical charting library that
                                                avoids abstraction and gives
                                                ownership of the code
                                            </li>
                                            <li>
                                                Targets the users that need a
                                                dynamic and performant charting
                                                solution
                                            </li>
                                            <li>
                                                Has the most used chart types
                                                that can be colaged into a
                                                dashboard
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mx-auto flex w-full items-center justify-center pt-8 hover:bg-none">
                                    <Link
                                        className="flex w-2/3 items-center justify-center"
                                        href="https://www.graphalytics.co/"
                                    >
                                        <Button
                                            type="button"
                                            className="w-full bg-[#454166] shadow-lg hover:bg-[#454166]"
                                        >
                                            <p>Visit</p>
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="flex flex-col">
                        <Card
                            className={`relative rounded-lg border border-[#60647872] bg-[#9d94e9] bg-opacity-10 bg-gradient-to-b  from-[#35374366] to-[#24212b65] p-6 hover:border-[#21222972] hover:bg-[#24242779]`}
                        >
                            <CardHeader className="p-0 pb-4">
                                <CardTitle className="text-lg font-semibold text-[#D1D1D2] ">
                                    YourEstate
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 text-[#8b8f8f]">
                                <div className="text-sm">
                                    <div className="flex max-h-[25rem] flex-col space-y-5 overflow-y-auto">
                                        <p>
                                            Tech Stack: Typescript, C#, Next.js
                                            14, Azure, D3.js, SQL
                                        </p>
                                        <ul className="list-disc space-y-2 pl-3">
                                            <li>
                                                A modular real estate solution
                                                that simplifies property
                                                management
                                            </li>
                                            <li>
                                                Designed to integrate data
                                                analytics and visualization
                                                capabilities within a single
                                                platform
                                            </li>
                                            <li>
                                                Scalable and user-friendly,
                                                suitable for property owners at
                                                all experience levels
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mx-auto flex w-full flex-row items-center justify-center space-x-5 pt-8 hover:bg-none">
                                    <Link
                                        className="flex w-2/3 items-center justify-center"
                                        href="https://yourestate.vercel.app/"
                                    >
                                        <Button
                                            type="button"
                                            className="w-full bg-[#454166] shadow-lg hover:bg-[#454166]"
                                        >
                                            <p>Visit</p>
                                        </Button>
                                    </Link>
                                    <Link
                                        className="flex w-2/3 items-center justify-center"
                                        href="https://github.com/Fortivera/PropertyNextjs"
                                    >
                                        <Button
                                            type="button"
                                            className="w-full bg-[#454166] shadow-lg hover:bg-[#454166]"
                                        >
                                            <Image
                                                src="/githublight.svg"
                                                alt={"GitHub"}
                                                width={24}
                                                height={24}
                                            />
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="flex flex-col">
                        <Card
                            className={`relative rounded-lg border border-[#60647872] bg-[#9d94e9] bg-opacity-10 bg-gradient-to-b  from-[#35374366] to-[#24212b65] p-6 hover:border-[#21222972] hover:bg-[#24242779]`}
                        >
                            <CardHeader className="p-0 pb-4">
                                <CardTitle className="text-lg font-semibold text-[#D1D1D2] ">
                                    Justcookit
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 text-[#8b8f8f]">
                                <div className="text-sm">
                                    <div className="flex max-h-[25rem] flex-col space-y-5 overflow-y-auto">
                                        <p>
                                            Tech Stack: Next.js 14, Typescript,
                                            Firebase, Stripe, D3.js
                                        </p>
                                        <ul className="list-disc space-y-2 pl-3">
                                            <li>
                                                Analytical charting library that
                                                avoids abstraction and gives
                                                ownership of the code
                                            </li>
                                            <li>
                                                Targets the users that need a
                                                dynamic and performant charting
                                                solution
                                            </li>
                                            <li>
                                                Has the most used chart types
                                                that can be colaged into a
                                                dashboard
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mx-auto flex w-full flex-row items-center justify-center space-x-5 pt-8 hover:bg-none">
                                    <Link
                                        className="flex w-2/3 items-center justify-center"
                                        href="https://yourestate.vercel.app/"
                                    >
                                        <Button
                                            type="button"
                                            className="w-full bg-[#454166] shadow-lg hover:bg-[#454166]"
                                        >
                                            <p>Visit</p>
                                        </Button>
                                    </Link>
                                    <Link
                                        className="flex w-2/3 items-center justify-center"
                                        href="https://github.com/Fortivera/PropertyNextjs"
                                    >
                                        <Button
                                            type="button"
                                            className="w-full bg-[#454166] shadow-lg hover:bg-[#454166]"
                                        >
                                            <Image
                                                src="/githublight.svg"
                                                alt={"GitHub"}
                                                width={24}
                                                height={24}
                                            />
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>
        </div>
    );
}
