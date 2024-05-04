"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
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
import { useState } from "react";


export default function Home() {
  const [isHoveredPair1, setIsHoveredPair1] = useState(false);
  const [isHoveredPair2, setIsHoveredPair2] = useState(false);
  const [isHoveredPair3, setIsHoveredPair3] = useState(false)
  return (
    <div className="min-h-screen w-full flex flex-col text-white text-base">
      {/* <Header /> */}
      <main className="flex flex-col bg-[#131313] w-full mx-auto p-6 flex-grow">
        <section id="about_me" className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-2xl">Anton Strelkovkyy</p>
            {/* <div className="flex justify-center items-center rounded-full border border-white h-20 w-20">pic</div> */}
            <Footer />
            <p className="flex justify-center items-center w-[30rem]">Software Engineer</p>
          </div>
        </section>
        {/* Desktop view */}
        <section className="hidden  customdesktop:grid grid-cols-1 gap-8 justify-items-center py-12 space-y-16" id="projects">
          <div className="flex flex-row space-x-10">
            <Card
              onMouseEnter={() => setIsHoveredPair1(true)}
              onMouseLeave={() => setIsHoveredPair1(false)}
              className={`max-w-[51rem] grow shrink relative p-6 border rounded-lg bg-opacity-10  border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] 
              ${isHoveredPair1 ? "bg-[#24242779] border-[#21222972]" : "bg-[#9d94e9]"}`}
            >
              <CardContent className="text-[#8b8f8f] p-0 shadow-sm shadow-[#4d4d4d]">
                <CardDescription>
                  <Image className="w-full" src="/graphalytics.png" alt={"Graphalytics"} width={900} height={900} />
                </CardDescription>
              </CardContent>
            </Card>
            <Card
              onMouseEnter={() => setIsHoveredPair1(true)}
              onMouseLeave={() => setIsHoveredPair1(false)}
              className={`max-w-xl  grow-[1] shrink-[1] relative p-6 border rounded-lg bg-opacity-10  border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] 
              ${isHoveredPair1 ? "bg-[#24242779] border-[#21222972]" : "bg-[#9d94e9]"}`}
            >
              <CardHeader className="pt-0">
                <CardTitle className="text-lg font-semibold text-[#D1D1D2] pt-0">Graphalytics</CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f]">
                <CardDescription className="text-base">
                  <div className="flex flex-col space-y-5 pverflow-y-auto">
                    <div>
                      Tech Stack: Next.js 14, Typescript, Firebase, Stripe, D3.js
                    </div>
                    <ul className="list-disc pl-3 space-y-2">
                      <li>Analytical charting library that avoids abstraction and gives ownership of the code</li>
                      <li>Targets the users that need a dynamic and performant charting solution</li>
                      <li>Has the most used chart types that can be colaged into a dashboard</li>
                    </ul>
                  </div>
                </CardDescription>
              </CardContent>
              <div className="flex justify-center items-center  w-full mx-auto pt-8 hover:bg-none">
                <Button className="w-2/3 hover:bg-[#454166] bg-[#454166] shadow-lg">Visit</Button >
              </div>
            </Card>
          </div>
          {/* <div className="flex flex-row space-x-10">
            <Card
              onMouseEnter={() => setIsHoveredPair2(true)}
              onMouseLeave={() => setIsHoveredPair2(false)}
              className={`max-w-lg relative p-6 border rounded-lg bg-opacity-10  border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] 
              ${isHoveredPair2 ? "bg-[#24242779] border-[#21222972]" : "bg-[#9d94e9]"}`}
            >
              <CardHeader className="pt-0">
                <CardTitle className="text-lg font-semibold text-[#D1D1D2] pt-0">YourEstate</CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f]">
                <CardDescription className="text-base">
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
                </CardDescription>
              </CardContent>
              <div className="flex justify-center items-center h-7 w-full mx-auto pt-8 hover:bg-none">
                <Button className="w-2/3 hover:bg-[#454166] bg-[#454166] shadow-lg">Visit</Button >
              </div>
            </Card>
            <Card
              onMouseEnter={() => setIsHoveredPair2(true)}
              onMouseLeave={() => setIsHoveredPair2(false)}
              className={`max-w-[51rem] relative p-6 border rounded-lg bg-opacity-10  border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] 
              ${isHoveredPair2 ? "bg-[#24242779] border-[#21222972]" : "bg-[#9d94e9]"}`}
            >
              <CardContent className="text-[#8b8f8f] p-0 shadow-sm shadow-[#4d4d4d]">
                <CardDescription>
                  <Image className="w-full" src="/yourestate.png" alt={"YourEstate"} width={900} height={900} />
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-row space-x-10">
            <Card
              onMouseEnter={() => setIsHoveredPair3(true)}
              onMouseLeave={() => setIsHoveredPair3(false)}
              className={`max-w-lg relative p-6 border rounded-lg bg-opacity-10  border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] 
              ${isHoveredPair3 ? "bg-[#24242779] border-[#21222972]" : "bg-[#9d94e9]"}`}
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#D1D1D2]">Graphalytics</CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f]">
                <CardDescription>
                  Project descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject description
                </CardDescription>
              </CardContent>
            </Card>
            <Card
              onMouseEnter={() => setIsHoveredPair3(true)}
              onMouseLeave={() => setIsHoveredPair3(false)}
              className={`max-w-lg relative p-6 border rounded-lg bg-opacity-10  border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] 
              ${isHoveredPair3 ? "bg-[#24242779] border-[#21222972]" : "bg-[#9d94e9]"}`}
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#D1D1D2]">Details</CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f]">
                <CardDescription>
                  Project descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject description
                </CardDescription>
              </CardContent>
            </Card>
          </div> */}
        </section>
        {/* Medium format view at 1100px */}
        {/* <section className="hidden sm:grid customdesktop:hidden grid-cols-1 gap-8 justify-items-center py-12 space-y-16" id="projects">
          <div>
            <Card
              onMouseEnter={() => setIsHoveredPair1(true)}
              onMouseLeave={() => setIsHoveredPair1(false)}
              className={`max-w-xl  grow-[1] shrink-[1] relative p-6 border rounded-lg bg-opacity-10  border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] 
              ${isHoveredPair1 ? "bg-[#24242779] border-[#21222972]" : "bg-[#9d94e9]"}`}
            >
              <CardHeader className="pt-0">
                <CardTitle className="text-lg font-semibold text-[#D1D1D2] pt-0">Graphalytics</CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f]">
                <CardDescription className="text-base">
                  <div className="flex flex-col space-y-5 pverflow-y-auto">
                    <p>
                      Tech Stack: Next.js 14, Typescript, Firebase, Stripe, D3.js
                    </p>
                    <ul className="list-disc pl-3 space-y-2">
                      <li>Analytical charting library that avoids abstraction and gives ownership of the code</li>
                      <li>Targets the users that need a dynamic and performant charting solution</li>
                      <li>Has the most used chart types that can be colaged into a dashboard</li>
                    </ul>
                  </div>
                </CardDescription>
              </CardContent>
              <div className="flex justify-center items-center  w-full mx-auto pt-8 hover:bg-none">
                <Button className="w-2/3 hover:bg-[#454166] bg-[#454166] shadow-lg">Visit</Button >
              </div>
            </Card>
          </div>

        </section> */}
        {/* Mobile view */}
        {/* <section className="sm:hidden grid grid-cols-1 gap-8 justify-items-center py-12" id="projects">
          <div className="flex flex-row space-x-10">
            <Card
              className={`max-w-lg relative p-6 border rounded-lg bg-opacity-10  border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] 
              bg-[#24242779] hover:border-[#21222972]  bg-[#9d94e9]`}
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#D1D1D2]">Graphalytics</CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f]">
                <CardDescription>
                  Project descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject description
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col sm:flex-row space-x-10">
            <Card
              className={`max-w-lg relative p-6 border rounded-lg bg-opacity-10  border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] 
              bg-[#24242779] hover:border-[#21222972]  bg-[#9d94e9]`}
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#D1D1D2]">Graphalytics</CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f]">
                <CardDescription>
                  Project descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject description
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col sm:flex-row space-x-10">
            <Card
              className={`max-w-lg relative p-6 border rounded-lg bg-opacity-10  border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] 
              bg-[#24242779] hover:border-[#21222972]  bg-[#9d94e9]`}
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#D1D1D2]">Graphalytics</CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f]">
                <CardDescription>
                  Project descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject description
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section> */}
      </main>
    </div >
  );
}
