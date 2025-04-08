
import React, { useState, useEffect } from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const StockTracker = () => {
  const [stockData, setStockData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [latestPrice, setLatestPrice] = useState<number | null>(null);
  const [priceChange, setPriceChange] = useState<number | null>(null);

  useEffect(() => {
    const fetchStockData = async () => {
      setIsLoading(true);
      try {
        // For demo purposes, we'll create mock data
        // In a real application, you would call an actual stock API
        const mockData = generateMockStockData();
        setStockData(mockData);
        
        // Set latest price and change
        if (mockData.length > 0) {
          setLatestPrice(mockData[mockData.length - 1].price);
          setPriceChange(mockData[mockData.length - 1].price - mockData[0].price);
        }
        
        setError(null);
      } catch (err) {
        console.error("Failed to fetch stock data:", err);
        setError("Failed to load stock market data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchStockData();

    // Refresh data every minute
    const intervalId = setInterval(fetchStockData, 60000);
    return () => clearInterval(intervalId);
  }, []);

  // Generate mock stock data for demo purposes
  const generateMockStockData = () => {
    const data = [];
    const now = new Date();
    const basePrice = 380 + Math.random() * 20; // SMB index around 380-400 range
    
    // Generate data for the last 30 days
    for (let i = 30; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      
      // Create some random price movement
      const volatility = 0.015; // 1.5% daily volatility
      const randomChange = basePrice * volatility * (Math.random() * 2 - 1);
      const previousPrice = i < 30 ? data[29 - i].price : basePrice;
      const price = previousPrice + randomChange;
      
      data.push({
        date: date.toLocaleDateString(),
        price: parseFloat(price.toFixed(2)),
        formattedDate: `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`
      });
    }
    
    return data;
  };

  const chartConfig = {
    price: {
      label: "Price",
      theme: {
        light: "#2563eb",
        dark: "#3b82f6",
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">SMB Stock Market Index Tracker</h1>

        {error ? (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Current Price</CardTitle>
                <CardDescription>Latest SMB index value</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <Skeleton className="h-10 w-32" />
                ) : (
                  <div className="text-3xl font-bold">${latestPrice?.toFixed(2)}</div>
                )}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Price Change</CardTitle>
                <CardDescription>30-day change</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <Skeleton className="h-10 w-32" />
                ) : (
                  <div className={`text-3xl font-bold ${priceChange && priceChange > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {priceChange && priceChange > 0 ? '+' : ''}{priceChange?.toFixed(2)} 
                    ({priceChange && latestPrice ? ((priceChange / (latestPrice - priceChange)) * 100).toFixed(2) : 0}%)
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle>Market Status</CardTitle>
                <CardDescription>Current trading status</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <Skeleton className="h-10 w-full" />
                ) : (
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                    <span>Open for Trading</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        <div className="mt-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>SMB Index - 30 Day History</CardTitle>
              <CardDescription>Historical price movement</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="aspect-video w-full">
                  <Skeleton className="h-full w-full" />
                </div>
              ) : (
                <ChartContainer className="aspect-video" config={chartConfig}>
                  <LineChart data={stockData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="formattedDate" 
                      tickFormatter={(value, index) => index % 5 === 0 ? value : ''}
                    />
                    <YAxis 
                      domain={['dataMin - 5', 'dataMax + 5']}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="price" 
                      stroke="var(--color-price)" 
                      name="Price" 
                      dot={false}
                      strokeWidth={2}
                    />
                  </LineChart>
                </ChartContainer>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 text-sm text-muted-foreground">
          <p>Note: This is simulated data for demonstration purposes. In a production environment, this would be connected to a real-time stock API.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StockTracker;
