import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeLabel: string;
  trend: "up" | "down";
  icon?: ReactNode;
  delay?: number;
}

export const MetricCard = ({ title, value, change, changeLabel, trend, icon, delay = 0 }: MetricCardProps) => {
  return (
    <Card 
      className="p-6 bg-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-sm font-medium text-muted-foreground mb-3">{title}</h3>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-4xl font-bold text-foreground mb-2">{value}</p>
          <div className="flex items-center gap-2">
            <div className={`flex items-center gap-1 px-2 py-1 rounded ${trend === 'up' ? 'bg-success/20' : 'bg-destructive/20'}`}>
              {trend === 'up' ? (
                <ArrowUp className="w-3 h-3 text-success" />
              ) : (
                <ArrowDown className="w-3 h-3 text-destructive" />
              )}
              <span className={`text-xs font-medium ${trend === 'up' ? 'text-success' : 'text-destructive'}`}>
                {change}
              </span>
            </div>
            <span className="text-xs text-muted-foreground">{changeLabel}</span>
          </div>
        </div>
        {icon && (
          <div className="text-primary/40">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
};
