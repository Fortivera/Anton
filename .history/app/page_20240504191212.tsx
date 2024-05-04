"use client"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import GlassyComponent from "@/components/ui/glasscard";
import Image from "next/image";
import graphalytics from "../public/graphalytics.png";
import { useEffect, useState } from "react";
import SocialLinks from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";

// type ButtonStates = {
//   btn1: boolean;
//   btn2: boolean;
//   btn3: boolean;
//   btn4: boolean;
//   btn5: boolean;
// }
// const initialState: ButtonStates = {
//   btn1: false,
//   btn2: false,
//   btn3: false,
//   btn4: false,
//   btn5: false,
// }
export default function Home() {
  // let router = useRouter()
  // const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isHoveredPair1, setIsHoveredPair1] = useState<boolean>(false)
  const [isHoveredPair2, setIsHoveredPair2] = useState<boolean>(false)
  const [isHoveredPair3, setIsHoveredPair3] = useState<boolean>(false)

  // const [buttonLoading, setButtonLoading] = useState<ButtonStates>(initialState);

  // const handleButtonClick = async (buttonId: keyof ButtonStates) => {
  //   //revalidate path
  //   setButtonLoading(prev => ({ ...prev, [buttonId]: true }))
  //   router.refresh()
  // }

  return (
    <div className="min-h-screen w-full flex flex-col text-white text-base">
      {/* <Header /> */}
      <main className="flex flex-col bg-[#131313] w-full mx-auto p-6 flex-grow">
        <section id="about_me" className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-2xl">Anton Strelkovkyy</p>
            {/* <div className="flex justify-center items-center rounded-full border border-white h-20 w-20">pic</div> */}
            <SocialLinks />
            <p className="flex justify-center items-center w-[30rem]">Software Engineer</p>
          </div>
        </section>
        {/* Desktop view */}
        <section className="hidden sm:grid grid-cols-1 gap-8 justify-items-center py-12 space-y-16" id="projects">
          <div className="flex flex-col space-y-5 xl:space-y-0 xl:flex-row xl:space-x-10">
            <Card
              onMouseEnter={() => setIsHoveredPair1(true)}
              onMouseLeave={() => setIsHoveredPair1(false)}
              className={`max-w-[51rem] relative p-6 border rounded-lg bg-opacity-10  border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] 
              ${isHoveredPair1 ? "bg-[#24242779] border-[#21222972]" : "bg-[#9d94e9]"}`}
            >
              <CardContent className="text-[#8b8f8f] p-0 shadow-sm shadow-[#4d4d4d]">
                <Image className="w-full" src={"/graphalytics.png"} alt={"Graphalytics"} width={1500} height={900} />
              </CardContent>
            </Card>
            <Card
              onMouseEnter={() => setIsHoveredPair1(true)}
              onMouseLeave={() => setIsHoveredPair1(false)}
              className={`max-w-[51rem] max-h-[25rem] xl:max-h-none xl:max-w-lg relative p-6 border rounded-lg bg-opacity-10  border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] 
              ${isHoveredPair1 ? "bg-[#24242779] border-[#21222972]" : "bg-[#9d94e9]"}`}
            >
              <CardHeader className="pt-0">
                <CardTitle className="text-lg font-semibold text-[#D1D1D2] pt-0">Graphalytics</CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f]">
                <div className="text-base">
                  <div className="flex flex-col space-y-5">
                    <p>
                      Tech Stack: Next.js 14, Typescript, Firebase, Stripe, D3.js
                    </p>
                    <ul className="list-disc pl-3 space-y-2">
                      <li>Analytical charting library that avoids abstraction and gives ownership of the code</li>
                      <li>Targets the users that need a dynamic and performant charting solution</li>
                      <li>Has the most used chart types that can be colaged into a dashboard</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <div className="flex justify-center items-center w-full mx-auto pt-8 hover:bg-none">
                <Link className="flex justify-center items-center w-2/3" href="https://www.graphalytics.co/">
                  <Button
                    // onClick={() => handleButtonClick('btn1')}
                    // disabled={buttonLoading.btn1}
                    type="button"
                    className="w-2/3 hover:bg-[#454166] bg-[#454166] shadow-lg">
                    <p>Visit</p>
                  </Button >
                </Link>

              </div>
            </Card>
          </div>
          <div className="flex flex-col space-y-5 xl:space-y-0 xl:flex-row xl:space-x-10">
            <Card
              onMouseEnter={() => setIsHoveredPair2(true)}
              onMouseLeave={() => setIsHoveredPair2(false)}
              className={`max-w-[51rem] max-h-[25rem] xl:max-h-none xl:max-w-lg relative p-6 border rounded-lg bg-opacity-10  border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] 
              ${isHoveredPair2 ? "bg-[#24242779] border-[#21222972]" : "bg-[#9d94e9]"}`}
            >
              <CardHeader className="pt-0">
                <CardTitle className="text-lg font-semibold text-[#D1D1D2] pt-0">YourEstate</CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f]">
                <div className="text-base">
                  <div className="flex flex-col space-y-5">
                    <p>
                      Tech Stack: Next.js 14, Typescript, Firebase, Stripe, D3.js
                    </p>
                    <ul className="list-disc pl-3 space-y-2">
                      <li>Analytical charting library that avoids abstraction and gives ownership of the code</li>
                      <li>Targets the users that need a dynamic and performant charting solution</li>
                      <li>Has the most used chart types that can be colaged into a dashboard</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <div className="flex flex-row justify-center items-center w-full space-x-5 mx-auto pt-8 hover:bg-none">
                <Link className="flex justify-center items-center w-1/3" href="https://yourestate.vercel.app/">
                  <Button
                    // onClick={() => handleButtonClick('btn2')}
                    // disabled={buttonLoading.btn2}
                    type="button"
                    className="w-full hover:bg-[#454166] bg-[#454166] shadow-lg">
                    <p>Visit</p>
                  </Button >
                </Link>
                <Link className="flex justify-center items-center w-1/3" href="https://github.com/Fortivera/PropertyNextjs">
                  <Button
                    // onClick={() => handleButtonClick('btn3')}
                    // disabled={buttonLoading.btn3}
                    type="button"
                    className="w-full hover:bg-[#454166] bg-[#454166] shadow-lg">
                    <Image src="/githublight.svg" alt={"GitHub"} width={24} height={24} />
                  </Button >
                </Link>
              </div>
            </Card>
            <Card
              onMouseEnter={() => setIsHoveredPair2(true)}
              onMouseLeave={() => setIsHoveredPair2(false)}
              className={`max-w-[51rem] relative p-6 border rounded-lg bg-opacity-10  border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] 
              ${isHoveredPair2 ? "bg-[#24242779] border-[#21222972]" : "bg-[#9d94e9]"}`}
            >
              <CardContent className="text-[#8b8f8f] p-0 shadow-sm shadow-[#4d4d4d]">
                <Image className="w-full" src={"/yourestate.png"} alt={"YourEstate"} width={1500} height={900} />
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col space-y-5 xl:space-y-0 xl:flex-row xl:space-x-10">
            <Card
              onMouseEnter={() => setIsHoveredPair3(true)}
              onMouseLeave={() => setIsHoveredPair3(false)}
              className={`max-w-[51rem] relative p-6 border rounded-lg bg-opacity-10  border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] 
              ${isHoveredPair3 ? "bg-[#24242779] border-[#21222972]" : "bg-[#9d94e9]"}`}
            >
              <CardContent className="text-[#8b8f8f] p-0 shadow-sm shadow-[#4d4d4d]">
                <Image className="w-full" src={"/yourestate.png"} alt={"YourEstate"} width={1500} height={900} />
              </CardContent>
            </Card>
            <Card
              onMouseEnter={() => setIsHoveredPair3(true)}
              onMouseLeave={() => setIsHoveredPair3(false)}
              className={`max-w-[51rem] max-h-[25rem] xl:max-h-none xl:max-w-lg relative p-6 border rounded-lg bg-opacity-10  border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] 
              ${isHoveredPair3 ? "bg-[#24242779] border-[#21222972]" : "bg-[#9d94e9]"}`}
            >
              <CardHeader className="pt-0">
                <CardTitle className="text-lg font-semibold text-[#D1D1D2] pt-0">Justcookit</CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f]">
                <div className="text-base">
                  <div className="flex flex-col space-y-5">
                    <p>
                      Tech Stack: Next.js 14, Typescript, Firebase, Stripe, D3.js
                    </p>
                    <ul className="list-disc pl-3 space-y-2">
                      <li>Analytical charting library that avoids abstraction and gives ownership of the code</li>
                      <li>Targets the users that need a dynamic and performant charting solution</li>
                      <li>Has the most used chart types that can be colaged into a dashboard</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <div className="flex flex-row justify-center items-center w-full space-x-5 mx-auto pt-8 hover:bg-none">
                <Link className="flex justify-center items-center w-1/3" href="https://yourestate.vercel.app/">
                  <Button
                    // onClick={() => handleButtonClick('btn4')}
                    // disabled={buttonLoading.btn4}
                    type="button"
                    className="w-full hover:bg-[#454166] bg-[#454166] shadow-lg">
                    <p>Visit</p>
                  </Button >
                </Link>
                <Link className="flex justify-center items-center w-1/3" href="https://github.com/Fortivera/PropertyNextjs">
                  <Button
                    // onClick={() => handleButtonClick('btn5')}
                    // disabled={buttonLoading.btn5}
                    type="button"
                    className="w-full hover:bg-[#454166] bg-[#454166] shadow-lg">
                    <Image src="/githublight.svg" alt={"GitHub"} width={24} height={24} />
                  </Button >
                </Link>
              </div>
            </Card>
          </div>

        </section >
        {/* Mobile view */}
        <section className="sm:hidden grid grid-cols-1 gap-8 justify-items-center py-12" id="projects" >
          <div className="flex flex-col">
            <Card
              className={`relative p-6 border rounded-lg bg-opacity-10 bg-[#9d94e9] border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] hover:bg-[#24242779] hover:border-[#21222972]
              `}
            >
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-lg font-semibold text-[#D1D1D2] ">Graphalytics</CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f] p-0">
                <div className="text-sm">
                  <div className="flex flex-col space-y-5 overflow-y-auto max-h-[25rem]">
                    <p>
                      Tech Stack: Next.js 14, Typescript, Firebase, Stripe, D3.js
                    </p>
                    <ul className="list-disc pl-3 space-y-2">
                      <li>Analytical charting library that avoids abstraction and gives ownership of the code</li>
                      <li>Targets the users that need a dynamic and performant charting solution</li>
                      <li>Has the most used chart types that can be colaged into a dashboard</li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full mx-auto pt-8 hover:bg-none">
                  <Link className="flex justify-center items-center w-2/3" href="https://www.graphalytics.co/">
                    <Button
                      // onClick={() => handleButtonClick('btn1')}
                      // disabled={buttonLoading.btn1}
                      type="button"
                      className="w-2/3 hover:bg-[#454166] bg-[#454166] shadow-lg">
                      <p>Visit</p>
                    </Button >
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col">
            <Card
              className={`relative p-6 border rounded-lg bg-opacity-10 bg-[#9d94e9] border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] hover:bg-[#24242779] hover:border-[#21222972]
              `}
            >
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-lg font-semibold text-[#D1D1D2] ">YourEstate</CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f] p-0">
                <div className="text-sm">
                  <div className="flex flex-col space-y-5 overflow-y-auto max-h-[25rem]">
                    <p>
                      Tech Stack: Next.js 14, Typescript, Firebase, Stripe, D3.js
                    </p>
                    <ul className="list-disc pl-3 space-y-2">
                      <li>Analytical charting library that avoids abstraction and gives ownership of the code</li>
                      <li>Targets the users that need a dynamic and performant charting solution</li>
                      <li>Has the most used chart types that can be colaged into a dashboard</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-row justify-center items-center w-full space-x-5 mx-auto pt-8 hover:bg-none">
                  <Link className="flex justify-center items-center w-1/3" href="https://yourestate.vercel.app/">
                    <Button
                      // onClick={() => handleButtonClick('btn4')}
                      // disabled={buttonLoading.btn4}
                      type="button"
                      className="w-full hover:bg-[#454166] bg-[#454166] shadow-lg">
                      <p>Visit</p>
                    </Button >
                  </Link>
                  <Link className="flex justify-center items-center w-1/3" href="https://github.com/Fortivera/PropertyNextjs">
                    <Button
                      // onClick={() => handleButtonClick('btn5')}
                      // disabled={buttonLoading.btn5}
                      type="button"
                      className="w-full hover:bg-[#454166] bg-[#454166] shadow-lg">
                      <Image src="/githublight.svg" alt={"GitHub"} width={24} height={24} />
                    </Button >
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col">
            <Card
              className={`relative p-6 border rounded-lg bg-opacity-10 bg-[#9d94e9] border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] hover:bg-[#24242779] hover:border-[#21222972]
              `}
            >
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-lg font-semibold text-[#D1D1D2] ">Justcookit</CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f] p-0">
                <div className="text-sm">
                  <div className="flex flex-col space-y-5 overflow-y-auto max-h-[25rem]">
                    <p>
                      Tech Stack: Next.js 14, Typescript, Firebase, Stripe, D3.js
                    </p>
                    <ul className="list-disc pl-3 space-y-2">
                      <li>Analytical charting library that avoids abstraction and gives ownership of the code</li>
                      <li>Targets the users that need a dynamic and performant charting solution</li>
                      <li>Has the most used chart types that can be colaged into a dashboard</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-row justify-center items-center w-full space-x-5 mx-auto pt-8 hover:bg-none">
                  <Link className="flex justify-center items-center w-1/3" href="https://yourestate.vercel.app/">
                    <Button
                      // onClick={() => handleButtonClick('btn4')}
                      // disabled={buttonLoading.btn4}
                      type="button"
                      className="w-full hover:bg-[#454166] bg-[#454166] shadow-lg">
                      <p>Visit</p>
                    </Button >
                  </Link>
                  <Link className="flex justify-center items-center w-1/3" href="https://github.com/Fortivera/PropertyNextjs">
                    <Button
                      // onClick={() => handleButtonClick('btn5')}
                      // disabled={buttonLoading.btn5}
                      type="button"
                      className="w-full hover:bg-[#454166] bg-[#454166] shadow-lg">
                      <Image src="/githublight.svg" alt={"GitHub"} width={24} height={24} />
                    </Button >
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section >
      </main >

    </div >
  );
}
