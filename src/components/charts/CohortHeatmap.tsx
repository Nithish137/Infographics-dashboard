import { Card } from "@/components/ui/card";

const cohortData = [
  { label: "A#D", values: [true, true, true, true, true, true, true, true, true] },
  { label: "81", values: [true, true, true, true, true, true, true, false, false] },
  { label: "18", values: [true, true, true, true, true, false, false, false, false] },
  { label: "72", values: [true, true, true, true, false, false, false, false, false] },
  { label: "261", values: [true, true, true, false, false, false, false, false, false] },
  { label: "223", values: [true, true, false, false, false, false, false, false, false] },
  { label: "188", values: [true, true, true, false, false, false, false, false, false] },
];

const dayLabels = ["A#D", "81", "18", "72", "261", "223", "188", "282", "161"];
const percentages = ["$857", "149%", "109%", "29%", "29.7%", "28%"];

export const CohortHeatmap = () => {
  return (
    <Card className="p-6 bg-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in" style={{ animationDelay: "500ms" }}>
      <h3 className="text-lg font-semibold text-foreground mb-4">Retention Rate Cohorts (D1,7,/330)</h3>
      
      <div className="flex gap-4">
        <div className="flex-1">
          <div className="grid grid-cols-9 gap-1 mb-2">
            {dayLabels.map((label, i) => (
              <div key={i} className="text-xs text-muted-foreground text-center">
                {label}
              </div>
            ))}
          </div>
          
          {cohortData.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-9 gap-1 mb-1">
              {row.values.map((active, colIndex) => (
                <div
                  key={colIndex}
                  className={`h-12 rounded transition-all duration-300 ${
                    active 
                      ? colIndex < 3 
                        ? "bg-primary/60 hover:bg-primary/80" 
                        : "bg-primary/30 hover:bg-primary/50"
                      : "bg-primary/10 hover:bg-primary/20"
                  }`}
                ></div>
              ))}
            </div>
          ))}
        </div>
        
        <div className="flex flex-col justify-around">
          {percentages.map((percent, i) => (
            <div key={i} className="text-xs text-muted-foreground text-right">
              {percent}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
