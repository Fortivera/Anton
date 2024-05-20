import Footer from "@/components/Footer";
import Header from "@/components/Header";
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

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col text-base text-white">
      <Header />
      <main className="mx-auto flex w-full flex-grow flex-col bg-[#131313] p-6">
        <section id="about_me" className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <p>Anton Strelkovkyy</p>
            <div className="h-10 w-10 rounded-full border border-white">
              circle
            </div>
          </div>
        </section>
        <section
          className="grid grid-cols-1 justify-items-center gap-8 py-12 md:grid-cols-3"
          id="projects"
        >
          <Card className="relative max-w-lg rounded-lg border border-[#60647872] bg-[#9d94e9] bg-opacity-10 bg-gradient-to-b from-[#35374366] to-[#24212b65] p-6">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#D1D1D2]">
                Project 1
              </CardTitle>
            </CardHeader>
            <CardContent className="text-[#8b8f8f]">
              <CardDescription>
                Project descriptionProject descriptionProject descriptionProject
                descriptionProject descriptionProject descriptionProject
                descriptionProject descriptionProject descriptionProject
                descriptionProject descriptionProject descriptionProject
                descriptionProject descriptionProject descriptionProject
                descriptionProject descriptionProject descriptionProject
                description
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="relative rounded-lg border border-[#60647872] bg-[#9d94e9] bg-opacity-10 bg-gradient-to-b from-[#35374366] to-[#24212b65] p-6">
            <CardHeader>
              <CardTitle>Project 2</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Project descriptionProject descriptionProject descriptionProject
                descriptionProject descriptionProject descriptionProject
                descriptionProject descriptionProject descriptionProject
                descriptionProject descriptionProject descriptionProject
                descriptionProject descriptionProject descriptionProject
                descriptionProject descriptionProject descriptionProject
                description
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="relative rounded-lg border border-[#60647872] bg-[#9d94e9] bg-opacity-10 bg-gradient-to-b from-[#35374366] to-[#24212b65] p-6">
            <CardHeader>
              <CardTitle>Project 3</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Project descriptionProject descriptionProject descriptionProject
                descriptionProject descriptionProject descriptionProject
                descriptionProject descriptionProject descriptionProject
                descriptionProject descriptionProject descriptionProject
                descriptionProject descriptionProject descriptionProject
                descriptionProject descriptionProject descriptionProject
                description
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
