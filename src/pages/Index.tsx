import { DashboardHeader } from "@/components/DashboardHeader";
import { MetricCard } from "@/components/MetricCard";
import { TrendChart } from "@/components/charts/TrendChart";
import { DonutChart } from "@/components/charts/DonutChart";
import { FunnelChart } from "@/components/charts/FunnelChart";
import { CohortHeatmap } from "@/components/charts/CohortHeatmap";
import { GlobalMap } from "@/components/charts/GlobalMap";
import { Box, Lock, DollarSign, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="p-6 space-y-6 max-w-[1800px] mx-auto">
        {/* Key Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Downloads"
            value="17,873,536"
            change="+12%"
            changeLabel="vs. Prev Period"
            trend="up"
            icon={
              <div className="grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <Box key={i} className="w-4 h-4 text-primary" />
                ))}
              </div>
            }
            delay={0}
          />
          
          <MetricCard
            title="Daily Active Users (DAU)"
            value="2,100,560"
            change="+5%"
            changeLabel="vs. Prev Period"
            trend="up"
            icon={<TrendingUp className="w-16 h-16" />}
            delay={100}
          />
          
          <MetricCard
            title="Day 1 Retention Rate"
            value="50%"
            change="+3%"
            changeLabel="vs. Benchmark"
            trend="up"
            icon={
              <div className="flex flex-col gap-2">
                <Lock className="w-8 h-8 text-primary" />
                <Lock className="w-6 h-6 text-primary/60" />
              </div>
            }
            delay={200}
          />
          
          <MetricCard
            title="Average Revenue Per User (ArPU)"
            value="$1.25"
            change="+9%"
            changeLabel="vs. Prev Period"
            trend="up"
            icon={
              <div className="grid grid-cols-2 gap-1">
                {[...Array(6)].map((_, i) => (
                  <DollarSign key={i} className="w-4 h-4 text-success" />
                ))}
              </div>
            }
            delay={300}
          />
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <FunnelChart />
          <TrendChart />
          <DonutChart />
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CohortHeatmap />
          <GlobalMap />
        </div>
      </main>
    </div>
  );
};

export default Index;
