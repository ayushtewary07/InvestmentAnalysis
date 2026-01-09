export interface PortfolioItem {
    symbol: string;
    name?: string;
    quantity: number;
    averagePrice: number;
    currentPrice?: number;
    investedValue: number;
    currentValue?: number;
    pnl?: number;
    pnlPercent?: number;
    allocation?: number; // Percentage 0-100
    sector?: string;
    assetClass?: 'Equity' | 'Mutual Fund' | 'Gold' | 'Cash' | 'Crypto' | 'Other';
}

export interface PortfolioAnalysis {
    totalInvested: number;
    totalCurrentValue: number;
    totalPnl: number;
    totalPnlPercent: number;
    items: PortfolioItem[];
    sectorAllocation: { name: string; value: number }[];
    assetAllocation: { name: string; value: number }[];
    riskScore?: number; // 1-10 (Low to High)
}
