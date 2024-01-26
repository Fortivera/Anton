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
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-white text-base">
      <Header />
      <main className="flex flex-col bg-[#131313] w-full mx-auto p-6 flex-grow">
        <section id="about_me">
          <div className=" flex flex-col justify-center items-center h-96">
            My name is 
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center py-12" id="projects">
          <Card className="w-96 bg-gray-800 shadow-lg shadow-gray-700">
            <CardHeader>
              <CardTitle>Project 1</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Project description
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="w-96">
            <CardHeader>
              <CardTitle>Project 2</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Project description
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="w-96">
            <CardHeader>
              <CardTitle>Project 3</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Project description
              </CardDescription>
            </CardContent>
          </Card>
        </section>
        <section id="contacts">
          <div>
            Feel free to chat!
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
