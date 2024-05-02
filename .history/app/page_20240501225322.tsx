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
          <div className="flex flex-col items-center space-y-4">
            <p>Anton Strelkovkyy</p>
            <div className="flex justify-center items-center rounded-full border border-white h-20 w-20">pic</div>
            <p className="flex justify-center items-center w-[30rem]">Software EngineerSoftware EngineerSoftware EngineerSoftware EngineerSoftware EngineerSoftware EngineerSoftware EngineerSoftware EngineerSoftware EngineerSoftware EngineerSoftware EngineerSoftware EngineerSoftware EngineerSoftware EngineerSoftware EngineerSoftware EngineerSoftware EngineerSoftware EngineerSoftware EngineerSoftware EngineerSoftware EngineerSoftware EngineerSoftware EngineerSoftware EngineerSoftware EngineerSoftware Engineer</p>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center py-12" id="projects">
          <Card className="max-w-lg relative p-6 border rounded-lg bg-opacity-10 bg-[#9d94e9] border-[#60647872] bg-gradient-to-b from-[#35374366] to-[#24212b65]">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#D1D1D2]">Project 1</CardTitle>
            </CardHeader>
            <CardContent className="text-[#8b8f8f]">
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
