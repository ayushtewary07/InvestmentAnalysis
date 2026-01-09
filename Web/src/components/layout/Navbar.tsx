import Link from 'next/link';
import { LayoutDashboard, PieChart, Upload } from 'lucide-react';

export function Navbar() {
    return (
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <PieChart className="h-6 w-6" />
                        <span className="hidden font-bold sm:inline-block">
                            PortfolioAI
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link
                            href="/"
                            className="transition-colors hover:text-foreground/80 text-foreground"
                        >
                            Dashboard
                        </Link>
                        <Link
                            href="/upload"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Upload
                        </Link>
                    </nav>
                </div>
            </div>
        </nav>
    );
}
