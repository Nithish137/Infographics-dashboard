import { Card } from "@/components/ui/card";

interface CohortRetention {
  cohort_month: string;
  day_0: number;
  day_1: number;
  day_3: number;
  day_7: number;
  day_14: number;
  day_30: number;
}

interface CohortHeatmapProps {
  data: CohortRetention[];
}

const dayLabels = ["Day 0", "Day 1", "Day 3", "Day 7", "Day 14", "Day 30"];

export const CohortHeatmap = ({ data }: CohortHeatmapProps) => {
  const getIntensity = (value: number) => {
    if (value >= 80) return "bg-primary/60 hover:bg-primary/80";
    if (value >= 60) return "bg-primary/50 hover:bg-primary/70";
    if (value >= 40) return "bg-primary/40 hover:bg-primary/60";
    if (value >= 20) return "bg-primary/30 hover:bg-primary/50";
    if (value >= 10) return "bg-primary/20 hover:bg-primary/40";
    return "bg-primary/10 hover:bg-primary/20";
  };
  return (
    <Card className="p-6 bg-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in" style={{ animationDelay: "500ms" }}>
      <h3 className="text-lg font-semibold text-foreground mb-4">Retention Rate Cohorts (D1,7,/330)</h3>
      
      <div className="overflow-x-auto">
        <div className="min-w-[500px]">
          <div className="grid gap-1 mb-2" style={{ gridTemplateColumns: `100px repeat(${dayLabels.length}, 1fr)` }}>
            <div className="text-xs text-muted-foreground text-center font-semibold">Cohort</div>
            {dayLabels.map((label, i) => (
              <div key={i} className="text-xs text-muted-foreground text-center">
                {label}
              </div>
            ))}
          </div>
          
          {data.map((cohort) => {
            const values = [cohort.day_0, cohort.day_1, cohort.day_3, cohort.day_7, cohort.day_14, cohort.day_30];
            return (
              <div key={cohort.cohort_month} className="grid gap-1 mb-1" style={{ gridTemplateColumns: `100px repeat(${dayLabels.length}, 1fr)` }}>
                <div className="text-xs text-muted-foreground flex items-center justify-center font-medium">
                  {cohort.cohort_month}
                </div>
                {values.map((value, colIndex) => (
                  <div
                    key={colIndex}
                    className={`h-12 rounded transition-all duration-300 flex items-center justify-center ${getIntensity(value)}`}
                    title={`${value}%`}
                  >
                    <span className="text-xs text-foreground font-medium">{value}%</span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};
