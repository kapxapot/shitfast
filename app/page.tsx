import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PaintRollerIcon as RollIcon, TableIcon as Toilet, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Toilet className="h-6 w-6 mr-2" />
          <span className="font-bold">ShitFast.pro</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#faq">
            FAQ
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Unleash Your Inner Speed Pooper
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Revolutionize your bathroom breaks with ShitFast.pro. Because life&apos;s too short for slow shits.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Why Choose ShitFast.pro?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <Zap className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Lightning Fast</h3>
                <p className="text-gray-500 text-center">In and out faster than you can say &quot;fiber supplement&quot;</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <RollIcon className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Eco-Friendly</h3>
                <p className="text-gray-500 text-center">Save trees by spending less time on the throne</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <span className="text-4xl mb-2">💩</span>
                <h3 className="text-xl font-bold">Poop Perfection</h3>
                <p className="text-gray-500 text-center">Achieve the perfect consistency every time</p>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              What Our Customers Say
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <p className="text-gray-500 italic">
                  &quot;I used to spend hours on the toilet. Now I&apos;m in and out in seconds!&quot;
                </p>
                <p className="font-bold">- Speedy Steve</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <p className="text-gray-500 italic">&quot;ShitFast.pro changed my life. I&apos;ve never felt so productive!&quot;</p>
                <p className="font-bold">- Efficient Emma</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <p className="text-gray-500 italic">
                  &quot;I&apos;m the envy of my office. No one can beat my bathroom break times!&quot;
                </p>
                <p className="font-bold">- Quick Quinn</p>
              </div>
            </div>
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold mb-2">Is this medical advice?</h3>
                <p className="text-gray-500">Absolutely not! We&apos;re just here for shits and giggles.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Will I really poop faster?</h3>
                <p className="text-gray-500">
                  Results may vary. But hey, positive thinking never hurt anyone&apos;s bowels!
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Is this a real product?</h3>
                <p className="text-gray-500">Nope, it&apos;s just a parody. Please don&apos;t take it seriously!</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Can I really buy you a coffee?</h3>
                <p className="text-gray-500">And we promise to drink it quickly to stay on brand.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Revolutionize Your Bathroom Breaks?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl">
                  Join the movement and become a speed pooping champion today!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" asChild>
                  <Link href="https://www.buymeacoffee.com/kapxapot" target="_blank" rel="noopener noreferrer">
                    Buy me a coffee so I can shit fast
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2023 ShitFast.pro. All rights reserved. (Not really, it&apos;s a joke!)</p>
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
  )
}
