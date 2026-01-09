import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Lock, Upload, Zap, PieChart, TrendingUp, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="rounded-lg bg-primary/10 p-1.5 ring-1 ring-white/10">
              <PieChart className="h-5 w-5 text-primary" />
            </div>
            <span>PortfolioUI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
            <Link href="#how-it-works" className="hover:text-foreground transition-colors">How it Works</Link>
            <Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <span className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer hidden sm:inline-block">
                Sign In
              </span>
            </Link>
            <Link href="/upload">
              <Button size="sm" className="px-6 rounded-full font-semibold shadow-[0_0_20px_-5px_var(--color-primary)]">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 md:pt-32 md:pb-48 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="container relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-secondary/50 border border-secondary text-secondary-foreground mb-8 animate-fade-in-down">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              v1.0 is now live
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50 [text-wrap:balance]">
              Your Money, <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Analyzed.</span>
            </h1>

            <p className="max-w-[700px] text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in-up [animation-delay:200ms] [text-wrap:balance]">
              Stop guessing with spreadsheets. Upload your brokerage statements and let AI reveal your true asset allocation, risk, and opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up [animation-delay:400ms]">
              <Link href="/upload" className="w-full sm:w-auto">
                <Button size="lg" className="w-full h-14 px-8 rounded-full text-lg group relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    Analyze My Portfolio <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-100 transition-opacity group-hover:opacity-90" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="h-14 px-8 rounded-full text-lg border-2 hover:bg-secondary/50 backdrop-blur-sm">
                View Demo
              </Button>
            </div>

            {/* Abstract Dashboard Visual */}
            <div className="mt-20 relative w-full max-w-5xl mx-auto perspective-[2000px] animate-fade-in-up [animation-delay:600ms]">
              <div className="relative rounded-xl border border-white/10 bg-background/50 backdrop-blur-md shadow-2xl p-2 transform rotate-x-[20deg] hover:rotate-x-0 transition-transform duration-1000 ease-out sm:p-4">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent rounded-xl pointer-events-none" />
                <div className="rounded-lg overflow-hidden border border-white/5 bg-black/40 aspect-[16/9] flex items-center justify-center relative">
                  {/* This would be an image in production, using CSS shapes for now */}
                  <div className="absolute inset-0 grid grid-cols-3 gap-4 p-6 opacity-80">
                    <div className="col-span-2 row-span-2 rounded-lg bg-white/5 border border-white/5 animate-pulse" />
                    <div className="col-span-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20" />
                    <div className="col-span-1 rounded-lg bg-purple-500/10 border border-purple-500/20" />
                    <div className="col-span-1 rounded-lg bg-green-500/10 border border-green-500/20" />
                    <div className="col-span-2 rounded-lg bg-white/5 border border-white/5" />
                  </div>
                  <span className="relative z-10 text-muted-foreground font-medium">Dashboard Preview</span>
                </div>
              </div>
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-[50%] -z-10 opacity-40"></div>
            </div>

          </div>
        </section>

        {/* Features Grid ("Bento" Style) */}
        <section id="features" className="container py-24 sm:py-32">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Everything you need to <span className="text-primary">grow wealth</span>.</h2>
            <p className="text-muted-foreground text-lg">We break down complex financial data into simple, actionable insights.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Feature 1: Large */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-8 hover:border-primary/50 transition-colors duration-500">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                <Upload className="w-48 h-48 text-primary -mr-16 -mt-16" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-4 text-primary">
                    <Upload className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Universal Upload</h3>
                  <p className="text-muted-foreground max-w-sm">Support for all major Indian brokers. Drag & drop CSVs or upload screenshots from Kite, Groww, and more.</p>
                </div>
                <div className="w-full bg-white/5 rounded-lg h-24 border border-white/5 backdrop-blur-sm group-hover:scale-[1.02] transition-transform origin-bottom-left" />
              </div>
            </div>

            {/* Feature 2: Tall */}
            <div className="row-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-black p-8 hover:border-indigo-500/50 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Private by Default</h3>
                <p className="text-muted-foreground mb-8">Your data never leaves your browser. Analysis happens locally.</p>

                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium">Encrypted Local Storage</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-8 hover:border-primary/50 transition-colors duration-500">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-4 text-primary">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Deep Analytics</h3>
                <p className="text-muted-foreground">XIRR, alpha, beta, and sector allocation breakdown.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-8 hover:border-primary/50 transition-colors duration-500">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-4 text-primary">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">AI Insights</h3>
                <p className="text-muted-foreground">Get personalized recommendations to rebalance your portfolio.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container pb-32">
          <div className="relative rounded-3xl overflow-hidden bg-primary px-6 py-24 sm:px-12 sm:py-32 text-center">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shine opacity-30 pointer-events-none" />
            <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Ready to master your finances?</h2>
              <p className="text-primary-foreground/80 text-xl">Join thousands of investors who trust PortfolioUI for their daily analysis.</p>
              <Link href="/upload">
                <Button size="lg" variant="secondary" className="h-14 px-8 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                  Get Started for Free
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-12 bg-black">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="rounded-lg bg-white/10 p-1">
              <PieChart className="h-5 w-5 text-white" />
            </div>
            <span>PortfolioUI</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 PortfolioUI. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-muted-foreground hover:text-foreground">Privacy</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Terms</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Twitter</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
