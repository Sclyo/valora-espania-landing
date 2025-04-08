
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, TrendingDown, Euro } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const StockTickerWidget = () => {
  const [stockData, setStockData] = useState<{
    price: number;
    change: number;
    isPositive: boolean;
    symbol: string;
  }>({
    price: 0,
    change: 0,
    isPositive: false,
    symbol: 'IBEX'
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStockData = async () => {
      setIsLoading(true);
      try {
        // Yahoo Finance API endpoint for IBEX 35 (Spanish Market Index)
        const response = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/%5EIBEX?interval=1d`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch stock data');
        }
        
        const data = await response.json();
        
        // Extract the current price and previous close from the response
        const currentPrice = data.chart.result[0].meta.regularMarketPrice;
        const previousClose = data.chart.result[0].meta.previousClose;
        const change = currentPrice - previousClose;
        
        setStockData({
          price: parseFloat(currentPrice.toFixed(2)),
          change: parseFloat(change.toFixed(2)),
          isPositive: change > 0,
          symbol: 'IBEX'
        });
      } catch (err) {
        console.error("Failed to fetch stock data:", err);
        // Fallback to mock data if the API call fails
        const mockPrice = 9500 + Math.random() * 100;
        const mockChange = (Math.random() * 40) - 20;
        
        setStockData({
          price: parseFloat(mockPrice.toFixed(2)),
          change: parseFloat(mockChange.toFixed(2)),
          isPositive: mockChange > 0,
          symbol: 'IBEX'
        });
        
        toast({
          title: "Data Connection Error",
          description: "Using simulated market data. Check your connection.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchStockData();

    // Refresh data every minute
    const intervalId = setInterval(fetchStockData, 60000);
    return () => clearInterval(intervalId);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center px-3 h-8 animate-pulse">
        <div className="h-4 w-20 bg-gray-200 rounded"></div>
      </div>
    );
  }

  return (
    <Link 
      to="/stock-tracker" 
      className="flex items-center space-x-2 px-3 py-1 rounded-md mx-2 border border-transparent hover:bg-gray-100 transition-colors"
      title="View IBEX 35 details"
    >
      <span className="font-medium text-valoraBlue whitespace-nowrap">{stockData.symbol}: {stockData.price}</span>
      <span 
        className={`flex items-center text-sm ${stockData.isPositive ? 'text-green-600' : 'text-red-600'}`}
      >
        {stockData.isPositive ? (
          <TrendingUp className="h-3 w-3 mr-1" />
        ) : (
          <TrendingDown className="h-3 w-3 mr-1" />
        )}
        {stockData.isPositive ? '+' : ''}{stockData.change}
        <Euro className="h-3 w-3 ml-1" />
      </span>
    </Link>
  );
};

export default StockTickerWidget;
