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

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col text-white text-base">
      <Header />
      <main className="flex flex-col bg-[#131313] w-full mx-auto p-6 flex-grow">
        <section id="about_me" className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2  justify-center items-center py-32  gap-x-8">
            <div className="flex flex-col justify-center items-center md:items-end  text-6xl">
              <div className="flex flex-col items-start justify-center w-80">
                <p className="w-full">Anton</p>
                <p className="w-full">Strelkovskyy</p>
              </div>
            </div>
            <div className="w-80 break-words">best devoper storybest devoper storybest devoper storybest devoper storybest devoper storybest devoper storybest devoper storybest devoper storybest devoper story</div>

          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center py-12" id="projects">
          <GlassyComponent />
          <Card className="relative p-6 border rounded-lg bg-opacity-10 bg-[#9d94e9] border-[#60647872] bg-gradient-to-b from-[#35374366] to-[#24212b65]">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#D1D1D2]">Project 1</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Project descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject description
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="relative p-6 border rounded-lg bg-opacity-10 bg-[#9d94e9] border-[#60647872] bg-gradient-to-b from-[#35374366] to-[#24212b65]">
            <CardHeader>
              <CardTitle>Project 2</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Project descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject description
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="relative p-6 border rounded-lg bg-opacity-10 bg-[#9d94e9] border-[#60647872] bg-gradient-to-b from-[#35374366] to-[#24212b65]">
            <CardHeader>
              <CardTitle>Project 3</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Project descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject description
              </CardDescription>
            </CardContent>
          </Card>
        </section>
      </main>
      <hr className="w-[50%]" />
      <Footer />

    </div>
  );
}
