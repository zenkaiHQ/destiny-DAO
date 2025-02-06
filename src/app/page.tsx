'use client'
import { ConnectButton } from "@/components/ConnectBtn";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Calendar, Brain, Coins } from "lucide-react"
import { useEffect } from "react";
import { useAppKitAccount } from "@reown/appkit/react";
import { useRouter } from "next/navigation";


export default function Home() {
  const { isConnected } = useAppKitAccount()
  const router = useRouter();
  useEffect(() => {
    if (isConnected) {
      router.push("/dashboard")
    }
  }, [isConnected])
  return (
    <>
      {/* <div className="flex justify-center items-center min-h-screen">
        <ConnectButton />
      </div> */}

      <div className="flex flex-col justify-center items-center w-full min-h-screen">
        <header className="px-4 w-full lg:px-6 h-14 flex justify-between items-center ">
          <Link href="/" className="flex items-center">
            <BookOpen className="h-6 w-6" />
            <span className="ml-2 text-2xl font-bold">StoryVerse</span>
          </Link>
          <nav className=" flex justify-center items-center gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Features
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              How It Works
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Pricing
            </Link>
          </nav>
          <ConnectButton />


        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Your Story, Your Choices, AI-Powered Adventures
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Embark on a 7-day journey where your decisions shape the narrative. Stake tokens, make choices, and
                    split the rewards.
                  </p>
                </div>
                <div className="space-x-4">
                  <Button onClick={() => console.log("hello world")}>Get Started</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
              <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start justify-center">
                {[
                  {
                    icon: BookOpen,
                    title: "AI-Generated Stories",
                    description: "Unique narratives crafted by advanced AI",
                  },
                  { icon: Users, title: "Character Selection", description: "Stake tokens to choose your character" },
                  { icon: Calendar, title: "7-Day Adventures", description: "Engage in week-long immersive experiences" },
                  { icon: Brain, title: "Make Decisions", description: "Your choices shape the story's direction" },
                  { icon: Coins, title: "Earn Rewards", description: "Split the staked tokens among survivors" },
                ].map((feature, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <feature.icon className="w-12 h-12 mb-2" />
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Begin Your Adventure?</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Join now and experience stories like never before. Your choices await!
                  </p>
                </div>
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                  Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 StoryVerse. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </footer>
      </div>


    </>
  );
}
