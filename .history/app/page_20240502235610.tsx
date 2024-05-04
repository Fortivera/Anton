import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
  const [isHovered, setIsHovered] = useState<boolean>(false)
  return (
    <div className="min-h-screen w-full flex flex-col text-white text-base">
      {/* <Header /> */}
      <main className="flex flex-col bg-[#131313] w-full mx-auto p-6 flex-grow">
        <section id="about_me" className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-2xl">Anton Strelkovkyy</p>
            <div className="flex justify-center items-center rounded-full border border-white h-20 w-20">pic</div>
            <Footer />
            <p className="flex justify-center items-center w-[30rem]">Software Engineer</p>
          </div>
        </section>
        <section className="hidden sm:grid grid-cols-1 gap-8 justify-items-center py-12" id="projects">
          <div className="flex flex-row space-x-10">
            <Card className={`max-w-[51rem] relative p-6 border rounded-lg bg-opacity-10 bg-[#9d94e9] hover:bg-[#24242779] border-[#60647872] hover:border-[#21222972] bg-gradient-to-b from-[#35374366] to-[#24212b65] ${isHovered ? "bg-[#24242779]" : "bg-[#9d94e9]"}`}>
              <CardHeader className="py-1">
                <CardTitle className="text-lg font-semibold text-[#D1D1D2]">Graphalytics</CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f] p-0">
                <CardDescription>
                  <Image className="w-full" src="/graphalytics.png" alt={"Graphalytics"} width={900} height={900} />
                </CardDescription>
              </CardContent>
            </Card>
            <Card className={`max-w-lg relative p-6 border rounded-lg bg-opacity-10 bg-[#9d94e9] hover:bg-[#24242779] border-[#60647872] hover:border-[#21222972] bg-gradient-to-b from-[#35374366] to-[#24212b65]`}>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#D1D1D2]">Details</CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f]">
                <CardDescription>
                  Project descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject description
                </CardDescription>
              </CardContent>
            </Card>

          </div>
          <div className="flex flex-col sm:flex-row space-x-10">
            <Card className="max-w-lg h-96 relative p-6 border rounded-lg bg-opacity-10 bg-[#9d94e9] border-[#60647872] bg-gradient-to-b from-[#35374366] to-[#24212b65] overflow-y-auto">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#D1D1D2]">YourEstate</CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f]">
                <CardDescription>
                  <Image className="w-full" src="/yourestate.png" alt={"YourEstate"} width={900} height={900} />
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="max-w-lg relative p-6 border rounded-lg bg-opacity-10 bg-[#9d94e9] border-[#60647872] bg-gradient-to-b from-[#35374366] to-[#24212b65]">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#D1D1D2]">Details</CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f]">
                <CardDescription>
                  Project descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject description
                </CardDescription>
              </CardContent>
            </Card>

          </div>
          <div className="flex flex-col sm:flex-row space-x-10">
            <Card className="max-w-lg relative p-6 border rounded-lg bg-opacity-10 bg-[#9d94e9] border-[#60647872] bg-gradient-to-b from-[#35374366] to-[#24212b65]">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#D1D1D2]">Graphalytics</CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f]">
                <CardDescription>
                  Project descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject description
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="max-w-lg relative p-6 border rounded-lg bg-opacity-10 bg-[#9d94e9] border-[#60647872] bg-gradient-to-b from-[#35374366] to-[#24212b65]">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#D1D1D2]">Details</CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f]">
                <CardDescription>
                  Project descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject description
                </CardDescription>
              </CardContent>
            </Card>

          </div>
        </section>
        {/* mobile view */}
        <section className="sm:hidden grid grid-cols-1 gap-8 justify-items-center py-12" id="projects">
          <div className="flex flex-row space-x-10">
            <Card className="max-w-lg relative p-6 border rounded-lg overflow-y-auto bg-opacity-10 bg-[#9d94e9] border-[#60647872] bg-gradient-to-b from-[#35374366] to-[#24212b65]">
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
            <Card className="max-w-lg relative p-6 border rounded-lg bg-opacity-10 bg-[#9d94e9] border-[#60647872] bg-gradient-to-b from-[#35374366] to-[#24212b65]">
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
            <Card className="max-w-lg relative p-6 border rounded-lg bg-opacity-10 bg-[#9d94e9] border-[#60647872] bg-gradient-to-b from-[#35374366] to-[#24212b65]">
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
        </section>
      </main>


    </div >
  );
}
