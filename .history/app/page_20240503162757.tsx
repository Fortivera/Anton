"use client";
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
} from "@/components/ui/card";
import GlassyComponent from "@/components/ui/glasscard";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isHoveredPair1, setIsHoveredPair1] = useState(false);
  const [isHoveredPair2, setIsHoveredPair2] = useState(false);
  const [isHoveredPair3, setIsHoveredPair3] = useState(false);
  return (
    <div className="flex min-h-screen w-full flex-col text-base text-white">
      {/* <Header /> */}
      <main className="mx-auto flex w-full flex-grow flex-col bg-[#131313] p-6">
        <section id="about_me" className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-2xl">Anton Strelkovkyy</p>
            {/* <div className="flex justify-center items-center rounded-full border border-white h-20 w-20">pic</div> */}
            <Footer />
            <p className="flex w-[30rem] items-center justify-center">
              Software Engineer
            </p>
          </div>
        </section>
        {/* Desktop view */}
        <section
          className="customdesktop:grid  hidden grid-cols-1 justify-items-center gap-8 space-y-16 py-12"
          id="projects"
        >
          <div>
            <div className="flex flex-row space-x-10">
              <Card
                onMouseEnter={() => setIsHoveredPair1(true)}
                onMouseLeave={() => setIsHoveredPair1(false)}
                className={`relative max-w-[51rem] shrink grow rounded-lg border border-[#60647872] bg-opacity-10  bg-gradient-to-b  from-[#35374366] to-[#24212b65] p-6 
              ${isHoveredPair1 ? "border-[#21222972] bg-[#24242779]" : "bg-[#9d94e9]"}`}
              >
                <CardContent className="p-0 text-[#8b8f8f] shadow-sm shadow-[#4d4d4d]">
                  <CardDescription>
                    <Image
                      className="w-full"
                      src="/graphalytics.png"
                      alt={"Graphalytics"}
                      width={900}
                      height={900}
                    />
                  </CardDescription>
                </CardContent>
              </Card>
              <Card
                onMouseEnter={() => setIsHoveredPair1(true)}
                onMouseLeave={() => setIsHoveredPair1(false)}
                className={`relative  max-w-xl shrink-[1] grow-[1] rounded-lg border border-[#60647872] bg-opacity-10  bg-gradient-to-b  from-[#35374366] to-[#24212b65] p-6 
              ${isHoveredPair1 ? "border-[#21222972] bg-[#24242779]" : "bg-[#9d94e9]"}`}
              >
                <CardHeader className="pt-0">
                  <CardTitle className="pt-0 text-lg font-semibold text-[#D1D1D2]">
                    Graphalytics
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-[#8b8f8f]">
                  <CardDescription className="text-base">
                    <div className="pverflow-y-auto flex flex-col space-y-5">
                      {/* <div>
                      Tech Stack: Next.js 14, Typescript, Firebase, Stripe, D3.js
                    </div> */}
                      <div>
                        {/* <ul className="list-disc pl-3 space-y-2">
                        <li>Analytical charting library that avoids abstraction and gives ownership of the code</li>
                        <li>Targets the users that need a dynamic and performant charting solution</li>
                        <li>Has the most used chart types that can be colaged into a dashboard</li>
                      </ul> */}
                      </div>
                    </div>
                  </CardDescription>
                </CardContent>
                <div className="mx-auto flex w-full  items-center justify-center pt-8 hover:bg-none">
                  <Button className="w-2/3 bg-[#454166] shadow-lg hover:bg-[#454166]">
                    Visit
                  </Button>
                </div>
              </Card>
            </div>
            <div className="flex flex-row space-x-10">
              <Card
                onMouseEnter={() => setIsHoveredPair2(true)}
                onMouseLeave={() => setIsHoveredPair2(false)}
                className={`relative max-w-lg rounded-lg border border-[#60647872] bg-opacity-10  bg-gradient-to-b  from-[#35374366] to-[#24212b65] p-6 
              ${isHoveredPair2 ? "border-[#21222972] bg-[#24242779]" : "bg-[#9d94e9]"}`}
              >
                <CardHeader className="pt-0">
                  <CardTitle className="pt-0 text-lg font-semibold text-[#D1D1D2]">
                    YourEstate
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-[#8b8f8f]">
                  <CardDescription className="text-base">
                    <div className="flex flex-col space-y-5">
                      {/* <div>
                      Tech Stack: Next.js 14, Typescript, Firebase, Stripe, D3.js
                    </div> */}
                      <div>
                        {/* <ul className="list-disc pl-3 space-y-2">
                        <li>Analytical charting library that avoids abstraction and gives ownership of the code</li>
                        <li>Targets the users that need a dynamic and performant charting solution</li>
                        <li>Has the most used chart types that can be colaged into a dashboard</li>
                      </ul> */}
                      </div>
                    </div>
                  </CardDescription>
                </CardContent>
                <div className="mx-auto flex h-7 w-full items-center justify-center pt-8 hover:bg-none">
                  <Button className="w-2/3 bg-[#454166] shadow-lg hover:bg-[#454166]">
                    Visit
                  </Button>
                </div>
              </Card>
              <Card
                onMouseEnter={() => setIsHoveredPair2(true)}
                onMouseLeave={() => setIsHoveredPair2(false)}
                className={`relative max-w-[51rem] rounded-lg border border-[#60647872] bg-opacity-10  bg-gradient-to-b  from-[#35374366] to-[#24212b65] p-6 
              ${isHoveredPair2 ? "border-[#21222972] bg-[#24242779]" : "bg-[#9d94e9]"}`}
              >
                <CardContent className="p-0 text-[#8b8f8f] shadow-sm shadow-[#4d4d4d]">
                  <CardDescription>
                    <Image
                      className="w-full"
                      src="/yourestate.png"
                      alt={"YourEstate"}
                      width={900}
                      height={900}
                    />
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-row space-x-10">
              <Card
                onMouseEnter={() => setIsHoveredPair3(true)}
                onMouseLeave={() => setIsHoveredPair3(false)}
                className={`relative max-w-lg rounded-lg border border-[#60647872] bg-opacity-10  bg-gradient-to-b  from-[#35374366] to-[#24212b65] p-6 
              ${isHoveredPair3 ? "border-[#21222972] bg-[#24242779]" : "bg-[#9d94e9]"}`}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-[#D1D1D2]">
                    Graphalytics
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-[#8b8f8f]">
                  <CardDescription>
                    Project descriptionProject descriptionProject
                    descriptionProject descriptionProject descriptionProject
                    descriptionProject descriptionProject descriptionProject
                    descriptionProject descriptionProject descriptionProject
                    descriptionProject descriptionProject descriptionProject
                    descriptionProject descriptionProject descriptionProject
                    descriptionProject description
                  </CardDescription>
                </CardContent>
              </Card>
              <Card
                onMouseEnter={() => setIsHoveredPair3(true)}
                onMouseLeave={() => setIsHoveredPair3(false)}
                className={`relative max-w-lg rounded-lg border border-[#60647872] bg-opacity-10  bg-gradient-to-b  from-[#35374366] to-[#24212b65] p-6 
              ${isHoveredPair3 ? "border-[#21222972] bg-[#24242779]" : "bg-[#9d94e9]"}`}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-[#D1D1D2]">
                    Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-[#8b8f8f]">
                  <CardDescription>
                    Project descriptionProject descriptionProject
                    descriptionProject descriptionProject descriptionProject
                    descriptionProject descriptionProject descriptionProject
                    descriptionProject descriptionProject descriptionProject
                    descriptionProject descriptionProject descriptionProject
                    descriptionProject descriptionProject descriptionProject
                    descriptionProject description
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
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
    </div>
  );
}
