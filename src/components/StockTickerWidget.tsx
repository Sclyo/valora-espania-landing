
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StockTickerWidget = () => {
  const [stockData, setStockData] = useState<{
    price: number;
    change: number;
    isPositive: boolean;
  }>({
    price: 0,
    change: 0,
    isPositive: false
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStockData = async () => {
      setIsLoading(true);
      try {
        // In a real app, you would fetch from Yahoo Finance API here
        // For demo purposes, we'll create mock data
        const mockPrice = 385 + Math.random() * 10;
        const mockChange = (Math.random() * 4) - 2; // Change between -2 and +2
        
        setStockData({
          price: parseFloat(mockPrice.toFixed(2)),
          change: parseFloat(mockChange.toFixed(2)),
          isPositive: mockChange > 0
        });
      } catch (err) {
        console.error("Failed to fetch stock data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStockData();

    // Refresh data every 30 seconds
    const intervalId = setInterval(fetchStockData, 30000);
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
      title="View SMB Index details"
    >
      <span className="font-medium text-valoraBlue whitespace-nowrap">SMB: {stockData.price}</span>
      <span 
        className={`flex items-center text-sm ${stockData.isPositive ? 'text-green-600' : 'text-red-600'}`}
      >
        {stockData.isPositive ? (
          <TrendingUp className="h-3 w-3 mr-1" />
        ) : (
          <TrendingDown className="h-3 w-3 mr-1" />
        )}
        {stockData.isPositive ? '+' : ''}{stockData.change}
      </span>
    </Link>
  );
};

export default StockTickerWidget;
