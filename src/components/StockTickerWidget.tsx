
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, TrendingDown, Euro } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';

const StockTickerWidget = () => {
  const [stockData, setStockData] = useState<{
    ibex: {
      price: number;
      change: number;
      isPositive: boolean;
      symbol: string;
    };
    bme: {
      price: number;
      change: number;
      isPositive: boolean;
      symbol: string;
    };
  }>({
    ibex: {
      price: 0,
      change: 0,
      isPositive: false,
      symbol: 'IBEX'
    },
    bme: {
      price: 0,
      change: 0,
      isPositive: false,
      symbol: 'BME'
    }
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStockData = async () => {
      setIsLoading(true);
      try {
        // Use Supabase Edge Function to fetch real data while avoiding CORS issues
        const { data, error } = await supabase.functions.invoke('stock-data', {
          body: { symbols: ['^IBEX', 'SIE.MC'] }, // SIE.MC as proxy for BME
        });

        if (error) {
          console.error("Error invoking Edge Function:", error);
          throw new Error('Failed to fetch stock data from API');
        }

        // Process the data returned from our Edge Function
        if (data && data['^IBEX'] && data['SIE.MC']) {
          setStockData({
            ibex: {
              ...data['^IBEX'],
              symbol: 'IBEX'
            },
            bme: {
              ...data['SIE.MC'],
              symbol: 'BME'
            }
          });
        } else {
          throw new Error('Invalid data format received from API');
        }
      } catch (err) {
        console.error("Failed to fetch stock data:", err);
        // Fallback to mock data if the API call fails
        generateMockStockData();
        
        toast.error("Using simulated market data. Check your connection.", {
          description: "Could not connect to real-time market data"
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

  // Generate realistic-looking mock data for the stock ticker as fallback
  const generateMockStockData = () => {
    // IBEX 35 data (Spanish market index)
    const mockIbexPrice = 9500 + Math.random() * 100;
    const mockIbexChange = (Math.random() * 40) - 20;
    
    // BME data (Bolsas y Mercados Españoles)
    const mockBmePrice = 28 + Math.random() * 2;
    const mockBmeChange = (Math.random() * 0.8) - 0.4;
    
    setStockData({
      ibex: {
        price: parseFloat(mockIbexPrice.toFixed(2)),
        change: parseFloat(mockIbexChange.toFixed(2)),
        isPositive: mockIbexChange > 0,
        symbol: 'IBEX'
      },
      bme: {
        price: parseFloat(mockBmePrice.toFixed(2)),
        change: parseFloat(mockBmeChange.toFixed(2)),
        isPositive: mockBmeChange > 0,
        symbol: 'BME'
      }
    });
  };

  const StockDisplay = ({ data }: { data: { price: number; change: number; isPositive: boolean; symbol: string } }) => (
    <div className="flex items-center space-x-2 mx-2">
      <span className="font-medium text-valoraBlue whitespace-nowrap">{data.symbol}: {data.price}</span>
      <span 
        className={`flex items-center text-sm ${data.isPositive ? 'text-green-600' : 'text-red-600'}`}
      >
        {data.isPositive ? (
          <TrendingUp className="h-3 w-3 mr-1" />
        ) : (
          <TrendingDown className="h-3 w-3 mr-1" />
        )}
        {data.isPositive ? '+' : ''}{data.change}
        <Euro className="h-3 w-3 ml-1" />
      </span>
    </div>
  );

  if (isLoading) {
    return (
      <div className="flex items-center px-3 h-8 animate-pulse">
        <div className="h-4 w-48 bg-gray-200 rounded"></div>
      </div>
    );
  }

  return (
    <Link 
      to="/stock-tracker" 
      className="flex items-center px-3 py-1 rounded-md mx-2 border border-transparent hover:bg-gray-100 transition-colors"
      title="View stock market details"
    >
      <StockDisplay data={stockData.ibex} />
      <span className="mx-1 text-gray-300">|</span>
      <StockDisplay data={stockData.bme} />
    </Link>
  );
};

export default StockTickerWidget;
