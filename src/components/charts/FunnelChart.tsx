import { Card } from "@/components/ui/card";
import { Users, MousePointerClick } from "lucide-react";

export const FunnelChart = () => {
  return (
    <Card className="p-6 bg-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in" style={{ animationDelay: "200ms" }}>
      <h3 className="text-lg font-semibold text-foreground mb-6">Download & Conversion Funnel</h3>
      
      <div className="relative flex flex-col items-center gap-8">
        {/* Funnel visualization */}
        <div className="relative w-full flex flex-col items-center">
          {/* Top of funnel */}
          <div className="w-full h-32 bg-gradient-to-b from-primary/30 to-primary/20 rounded-t-lg border-2 border-primary/40 flex items-center justify-center">
            <div className="text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Ad Impressions (8.2M)</p>
              <p className="text-xs text-muted-foreground">(4.5M - 55%)</p>
            </div>
          </div>
          
          {/* Middle section */}
          <div className="w-[85%] h-24 bg-gradient-to-b from-primary/20 to-primary/10 border-x-2 border-primary/30 flex items-center justify-center">
            <div className="text-center">
              <MousePointerClick className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Unique Clicks (-88%)</p>
            </div>
          </div>
          
          {/* Install section */}
          <div className="w-[70%] h-20 bg-gradient-to-b from-primary/10 to-primary/5 border-x-2 border-primary/20 flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Installs (1.2M - 27%)</p>
            </div>
          </div>
          
          {/* Bottom section */}
          <div className="w-[55%] h-16 bg-primary/5 rounded-b-lg border-2 border-primary/10 flex items-center justify-center relative">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">FTUE Completion</p>
            </div>
            
            {/* People icons at bottom */}
            <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-6 h-8 bg-destructive/60 rounded-sm"></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="w-full grid grid-cols-2 gap-4 mt-8">
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">1.2M - 27%</p>
            <div className="flex items-center justify-center gap-1">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-sm text-foreground">Installs</span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">-88%</p>
            <div className="flex items-center justify-center gap-1">
              <div className="w-3 h-3 bg-destructive rounded-full"></div>
              <span className="text-sm text-foreground">FTUE Completion</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
