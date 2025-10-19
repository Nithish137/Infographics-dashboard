import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface GlobalDownload {
  country_code: string;
  country_name: string;
  download_count: number;
}

interface GlobalMapProps {
  data: GlobalDownload[];
}

export const GlobalMap = ({ data }: GlobalMapProps) => {
  const topCountries = data.slice(0, 5);

  return (
    <Card className="p-6 bg-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in" style={{ animationDelay: "600ms" }}>
      <h3 className="text-lg font-semibold text-foreground mb-4">Global Download Hotspots</h3>
      
      <div className="space-y-4">
        {/* Top Countries List */}
        <div className="space-y-2">
          {topCountries.map((country, index) => (
            <div key={country.country_code} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg border border-border hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  index === 0 ? 'bg-primary text-primary-foreground' :
                  index === 1 ? 'bg-accent text-accent-foreground' :
                  index === 2 ? 'bg-success text-success-foreground' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {index + 1}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{country.country_name}</p>
                  <p className="text-xs text-muted-foreground">{country.country_code}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-foreground">{(country.download_count / 1000000).toFixed(1)}M</p>
                <p className="text-xs text-muted-foreground">downloads</p>
              </div>
            </div>
          ))}
        </div>

        {/* Simplified world map visualization */}
        <div className="relative h-40 bg-secondary/30 rounded-lg overflow-hidden">
          <svg viewBox="0 0 1000 400" className="w-full h-full opacity-40">
            {/* North America */}
            <path d="M 150 100 L 200 120 L 250 140 L 280 180 L 260 220 L 220 240 L 180 220 Z" fill="hsl(var(--primary))" />
            {/* Europe */}
            <path d="M 450 120 L 520 130 L 540 160 L 520 190 L 480 180 Z" fill="hsl(var(--primary))" />
            {/* Asia */}
            <path d="M 600 140 L 750 150 L 800 200 L 780 260 L 720 240 L 650 220 Z" fill="hsl(var(--primary))" />
            {/* South America */}
            <path d="M 280 280 L 320 300 L 340 380 L 310 320 L 280 300 Z" fill="hsl(var(--primary))" />
            {/* Africa */}
            <path d="M 480 240 L 550 250 L 560 320 L 540 280 L 500 260 Z" fill="hsl(var(--primary))" />
            {/* Australia */}
            <path d="M 750 300 L 820 310 L 840 340 L 810 360 L 760 350 Z" fill="hsl(var(--primary))" />
          </svg>
        </div>
      </div>
    </Card>
  );
};
