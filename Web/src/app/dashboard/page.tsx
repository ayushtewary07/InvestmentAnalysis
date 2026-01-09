"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart as PieChartIcon, LayoutDashboard, Wallet, TrendingUp, Settings, LogOut, ArrowUpRight, ArrowDownRight, Bell } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { cn } from "@/lib/utils"

// Mock Data
const portfolioHistory = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 5000 },
    { name: 'Apr', value: 7800 },
    { name: 'May', value: 6500 },
    { name: 'Jun', value: 9000 },
    { name: 'Jul', value: 10500 },
]

const assetAllocation = [
    { name: 'Stocks', value: 65, color: '#4f46e5' }, // Indigo-600
    { name: 'Mutual Funds', value: 25, color: '#8b5cf6' }, // Violet-500
    { name: 'Gold', value: 10, color: '#eab308' }, // Yellow-500
]

const recentHoldings = [
    { name: 'HDFC Bank', symbol: 'HDFCBANK', qty: 50, avg: 1450, ltp: 1680, change: 2.5 },
    { name: 'Reliance', symbol: 'RELIANCE', qty: 25, avg: 2200, ltp: 2450, change: -0.8 },
    { name: 'TCS', symbol: 'TCS', qty: 10, avg: 3400, ltp: 3800, change: 1.2 },
    { name: 'Infosys', symbol: 'INFY', qty: 100, avg: 1300, ltp: 1450, change: 0.5 },
]

export default function DashboardPage() {
    return (
        <div className="flex min-h-screen bg-background text-foreground">
            {/* Sidebar */}
            <aside className="hidden w-64 flex-col border-r bg-muted/40 p-6 md:flex">
                <div className="flex items-center gap-2 mb-8 font-bold text-xl text-primary">
                    <PieChartIcon className="h-6 w-6" />
                    <span>PortfolioUI</span>
                </div>

                <nav className="flex flex-col gap-2 flex-1">
                    <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary/10 text-primary font-medium">
                        <LayoutDashboard className="h-5 w-5" />
                        Dashboard
                    </Link>
                    <Link href="/dashboard/holdings" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                        <Wallet className="h-5 w-5" />
                        Holdings
                    </Link>
                    <Link href="/dashboard/analytics" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                        <TrendingUp className="h-5 w-5" />
                        Analytics
                    </Link>
                    <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                        <Settings className="h-5 w-5" />
                        Settings
                    </Link>
                </nav>

                <div className="mt-auto">
                    <Link href="/auth/login" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors">
                        <LogOut className="h-5 w-5" />
                        Sign Out
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col">
                {/* Header */}
                <header className="h-16 border-b flex items-center justify-between px-6 bg-background/50 backdrop-blur-sm sticky top-0 z-10">
                    <h1 className="font-semibold text-lg">Overview</h1>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="relative">
                            <Bell className="h-5 w-5 text-muted-foreground" />
                            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" />
                        </Button>
                        <div className="h-8 w-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-semibold text-primary text-sm">
                            JD
                        </div>
                    </div>
                </header>

                <div className="p-6 md:p-8 space-y-8 overflow-y-auto">
                    {/* KPI Cards */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <Card className="shadow-sm border-l-4 border-l-indigo-500">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">Total Value</CardTitle>
                                <Wallet className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">₹ 14,32,000</div>
                                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                            </CardContent>
                        </Card>
                        <Card className="shadow-sm border-l-4 border-l-green-500">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">Day's Gain</CardTitle>
                                <ArrowUpRight className="h-4 w-4 text-green-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-green-600">+ ₹ 12,450</div>
                                <p className="text-xs text-muted-foreground">+0.85% today</p>
                            </CardContent>
                        </Card>
                        <Card className="shadow-sm border-l-4 border-l-blue-500">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">Invested</CardTitle>
                                <TrendingUp className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">₹ 10,50,000</div>
                                <p className="text-xs text-muted-foreground">Since Jan 2024</p>
                            </CardContent>
                        </Card>
                        <Card className="shadow-sm border-l-4 border-l-purple-500">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">XIRR</CardTitle>
                                <PieChartIcon className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-purple-600">18.4%</div>
                                <p className="text-xs text-muted-foreground">Annualized Return</p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid gap-6 md:grid-cols-7">
                        {/* Main Chart */}
                        <Card className="md:col-span-4 lg:col-span-5 shadow-sm">
                            <CardHeader>
                                <CardTitle>Portfolio Performance</CardTitle>
                                <CardDescription>Value over the last 6 months</CardDescription>
                            </CardHeader>
                            <CardContent className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={portfolioHistory}>
                                        <defs>
                                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                                        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                                        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value}`} />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)', borderRadius: '8px' }}
                                            itemStyle={{ color: 'var(--foreground)' }}
                                        />
                                        <Area type="monotone" dataKey="value" stroke="#4f46e5" fillOpacity={1} fill="url(#colorValue)" strokeWidth={2} />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        {/* Asset Allocation */}
                        <Card className="md:col-span-3 lg:col-span-2 shadow-sm">
                            <CardHeader>
                                <CardTitle>Asset Allocation</CardTitle>
                                <CardDescription>Distribution by class</CardDescription>
                            </CardHeader>
                            <CardContent className="h-[300px] flex flex-col items-center justify-center">
                                <ResponsiveContainer width="100%" height={200}>
                                    <PieChart>
                                        <Pie
                                            data={assetAllocation}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={80}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {assetAllocation.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className="grid grid-cols-2 gap-4 w-full mt-4">
                                    {assetAllocation.map((item) => (
                                        <div key={item.name} className="flex items-center gap-2 text-sm">
                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                            <span className="text-muted-foreground">{item.name}</span>
                                            <span className="ml-auto font-medium">{item.value}%</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Holdings Table */}
                    <Card className="shadow-sm">
                        <CardHeader>
                            <CardTitle>Top Holdings</CardTitle>
                            <CardDescription>Your largest investments by current value</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="text-muted-foreground border-b uppercase text-xs">
                                        <tr>
                                            <th className="px-4 py-3 font-medium">Instrument</th>
                                            <th className="px-4 py-3 font-medium text-right">Qty</th>
                                            <th className="px-4 py-3 font-medium text-right">Avg. Price</th>
                                            <th className="px-4 py-3 font-medium text-right">LTP</th>
                                            <th className="px-4 py-3 font-medium text-right">Current Value</th>
                                            <th className="px-4 py-3 font-medium text-right">P&L</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        {recentHoldings.map((stock) => {
                                            const currentValue = stock.qty * stock.ltp
                                            const investedValue = stock.qty * stock.avg
                                            const pnl = currentValue - investedValue
                                            const pnlPercent = ((pnl / investedValue) * 100).toFixed(2)

                                            return (
                                                <tr key={stock.symbol} className="hover:bg-muted/50 transition-colors">
                                                    <td className="px-4 py-3">
                                                        <div className="font-medium">{stock.name}</div>
                                                        <div className="text-xs text-muted-foreground">{stock.symbol}</div>
                                                    </td>
                                                    <td className="px-4 py-3 text-right">{stock.qty}</td>
                                                    <td className="px-4 py-3 text-right">₹{stock.avg}</td>
                                                    <td className="px-4 py-3 text-right">₹{stock.ltp}</td>
                                                    <td className="px-4 py-3 text-right font-medium">₹{currentValue.toLocaleString()}</td>
                                                    <td className={cn("px-4 py-3 text-right font-medium", pnl >= 0 ? "text-green-600" : "text-red-600")}>
                                                        {pnl >= 0 ? "+" : ""}₹{pnl.toLocaleString()} <span className="text-xs opacity-70">({pnlPercent}%)</span>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </main>
        </div>
    )
}
