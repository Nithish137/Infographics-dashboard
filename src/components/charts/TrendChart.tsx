import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { format } from "date-fns";

interface DownloadTrend {
  trend_date: string;
  downloads: number;
}

interface DAUTrend {
  trend_date: string;
  active_users: number;
}

interface TrendChartProps {
  downloadsData: DownloadTrend[];
  dauData: DAUTrend[];
}

export const TrendChart = ({ downloadsData, dauData }: TrendChartProps) => {
  const formattedDownloadsData = downloadsData.map((item) => ({
    date: format(new Date(item.trend_date), "MMM dd"),
    downloads: item.downloads / 1000000,
  }));

  const formattedDAUData = dauData.map((item) => ({
    date: format(new Date(item.trend_date), "MMM dd"),
    dau: item.active_users / 1000000,
  }));
  return (
    <Card className="p-6 bg-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in" style={{ animationDelay: "300ms" }}>
      <h3 className="text-lg font-semibold text-foreground mb-4">Downloads & DAU Trend</h3>
      
      <div className="space-y-6">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={formattedDownloadsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="date"
              stroke="hsl(var(--muted-foreground))" 
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis stroke="hsl(var(--muted-foreground))" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '0.5rem'
              }} 
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="downloads" 
              stroke="hsl(var(--success))" 
              strokeWidth={2}
              dot={{ fill: 'hsl(var(--success))', r: 4 }}
              activeDot={{ r: 6, fill: 'hsl(var(--success))' }}
              name="Total Downloads"
            />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={formattedDAUData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="date"
              stroke="hsl(var(--muted-foreground))" 
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis stroke="hsl(var(--muted-foreground))" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '0.5rem'
              }} 
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="dau" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2}
              dot={{ fill: 'hsl(var(--primary))', r: 4 }}
              activeDot={{ r: 6, fill: 'hsl(var(--primary))' }}
              name="Total DAU"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
