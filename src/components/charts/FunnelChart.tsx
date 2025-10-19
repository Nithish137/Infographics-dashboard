import { Card } from "@/components/ui/card";
import { Users, MousePointerClick } from "lucide-react";

interface FunnelStage {
  stage_name: string;
  stage_order: number;
  user_count: number;
  conversion_rate: number;
}

interface FunnelChartProps {
  data: FunnelStage[];
}

export const FunnelChart = ({ data }: FunnelChartProps) => {
  const sortedData = [...data].sort((a, b) => a.stage_order - b.stage_order);
  return (
    <Card className="p-6 bg-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in" style={{ animationDelay: "200ms" }}>
      <h3 className="text-lg font-semibold text-foreground mb-6">Download & Conversion Funnel</h3>
      
      <div className="relative flex flex-col items-center gap-8">
        {/* Funnel visualization */}
        <div className="relative w-full flex flex-col items-center">
          {sortedData.map((stage, index) => {
            const widthPercent = 100 - (index * 15);
            const opacity = 30 - (index * 5);
            
            return (
              <div 
                key={stage.stage_name}
                className={`bg-gradient-to-b from-primary/${opacity} to-primary/${opacity - 10} border-2 border-primary/${opacity + 10} flex items-center justify-center ${index === 0 ? 'rounded-t-lg w-full h-32' : index === sortedData.length - 1 ? 'rounded-b-lg h-16' : 'h-20'}`}
                style={{ width: index === 0 || index === sortedData.length - 1 ? '100%' : `${widthPercent}%` }}
              >
                <div className="text-center">
                  {index === 0 && <Users className="w-8 h-8 text-primary mx-auto mb-2" />}
                  {index === 1 && <MousePointerClick className="w-6 h-6 text-primary mx-auto mb-2" />}
                  <p className="text-sm text-muted-foreground">{stage.stage_name}</p>
                  <p className="text-xs text-muted-foreground">
                    ({(stage.user_count / 1000000).toFixed(1)}M - {stage.conversion_rate.toFixed(1)}%)
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};
