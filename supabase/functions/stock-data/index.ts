
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { symbols } = await req.json();
    
    if (!symbols || !Array.isArray(symbols) || symbols.length === 0) {
      throw new Error('Invalid symbols parameter');
    }

    const results = {};
    
    // Fetch data for each symbol
    for (const symbol of symbols) {
      const apiUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?interval=1d`;
      console.log(`Fetching data for ${symbol} from ${apiUrl}`);
      
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch data for ${symbol}: ${response.statusText}`);
      }
      
      const data = await response.json();
      
      // Extract the needed data
      const currentPrice = data.chart.result[0].meta.regularMarketPrice;
      const previousClose = data.chart.result[0].meta.previousClose;
      const change = currentPrice - previousClose;
      
      results[symbol] = {
        price: parseFloat(currentPrice.toFixed(2)),
        change: parseFloat(change.toFixed(2)),
        isPositive: change > 0,
        symbol: symbol
      };
    }
    
    return new Response(JSON.stringify(results), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching stock data:', error);
    
    return new Response(JSON.stringify({ 
      error: error.message,
      message: 'Failed to fetch stock data' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
