import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export const GlobalMap = () => {
  const hotspots = [
    { x: 20, y: 45, label: "NA" },
    { x: 45, y: 35, label: "EU" },
    { x: 75, y: 50, label: "APAC" },
  ];

  return (
    <Card className="p-6 bg-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in" style={{ animationDelay: "600ms" }}>
      <h3 className="text-lg font-semibold text-foreground mb-4">Global Download Hotspots</h3>
      
      <div className="relative h-80 bg-secondary/50 rounded-lg overflow-hidden">
        {/* Simplified world map representation */}
        <svg viewBox="0 0 1000 500" className="w-full h-full opacity-40">
          {/* North America */}
          <path d="M 150 100 L 200 120 L 250 140 L 280 180 L 260 220 L 220 240 L 180 220 Z" fill="hsl(var(--primary))" />
          {/* Europe */}
          <path d="M 450 120 L 520 130 L 540 160 L 520 190 L 480 180 Z" fill="hsl(var(--primary))" />
          {/* Asia */}
          <path d="M 600 140 L 750 150 L 800 200 L 780 260 L 720 240 L 650 220 Z" fill="hsl(var(--primary))" />
          {/* South America */}
          <path d="M 280 280 L 320 300 L 340 380 L 310 420 L 280 400 Z" fill="hsl(var(--primary))" />
          {/* Africa */}
          <path d="M 480 240 L 550 250 L 560 320 L 540 380 L 500 360 Z" fill="hsl(var(--primary))" />
          {/* Australia */}
          <path d="M 750 340 L 820 350 L 840 380 L 810 400 L 760 390 Z" fill="hsl(var(--primary))" />
        </svg>
        
        {/* Hotspot markers */}
        {hotspots.map((spot, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
          >
            <div className="relative">
              <MapPin className="w-6 h-6 text-primary fill-primary" />
              <div className="absolute top-0 left-0 w-6 h-6 bg-primary/30 rounded-full animate-ping"></div>
            </div>
          </div>
        ))}
        
        {/* Legend */}
        <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm p-3 rounded-lg border border-border">
          <p className="text-xs font-semibold text-foreground mb-2">Satellites</p>
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-destructive rounded-sm"></div>
              <span className="text-muted-foreground">NA</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-sm"></div>
              <span className="text-muted-foreground">Top 3 Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-success rounded-sm"></div>
              <span className="text-muted-foreground">Top 5 Countries</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
