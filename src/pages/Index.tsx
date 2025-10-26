import { DashboardHeader } from "@/components/DashboardHeader";
import { GameDetailsCard } from "@/components/GameDetailsCard";
import { MetricCard } from "@/components/MetricCard";
import { TrendChart } from "@/components/charts/TrendChart";
import { DonutChart } from "@/components/charts/DonutChart";
import { FunnelChart } from "@/components/charts/FunnelChart";
import { CohortHeatmap } from "@/components/charts/CohortHeatmap";
import { GlobalMap } from "@/components/charts/GlobalMap";
import { Box, Lock, DollarSign, TrendingUp } from "lucide-react";
import { useGameAnalytics } from "@/hooks/useGameAnalytics";
import { useState } from "react";

const Index = () => {
  const [selectedGameId, setSelectedGameId] = useState<string | undefined>();
  const { data, isLoading } = useGameAnalytics(selectedGameId);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-primary animate-pulse text-xl">Loading analytics...</div>
      </div>
    );
  }

  const metrics = data?.metrics;
  
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader 
        games={data?.games || []}
        selectedGame={data?.selectedGame}
        onGameChange={setSelectedGameId}
        anomalyAlerts={data?.anomalyAlerts || []}
      />
      
      <main className="p-6 space-y-6 max-w-[1800px] mx-auto">
        {/* Game Details Card */}
        <GameDetailsCard game={data?.selectedGame || null} metrics={metrics || null} />
        {/* Key Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Downloads"
            value={metrics?.total_downloads?.toLocaleString() || "0"}
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
            value={metrics?.daily_active_users?.toLocaleString() || "0"}
            change="+5%"
            changeLabel="vs. Prev Period"
            trend="up"
            icon={<TrendingUp className="w-16 h-16" />}
            delay={100}
          />
          
          <MetricCard
            title="Day 1 Retention Rate"
            value={`${metrics?.day1_retention_rate || 0}%`}
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
            value={`$${metrics?.average_revenue_per_user || 0}`}
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
          <FunnelChart data={data?.funnelStages || []} />
          <TrendChart 
            downloadsData={data?.downloadsTrend || []} 
            dauData={data?.dauTrend || []}
          />
          <DonutChart data={data?.downloadSources || []} />
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CohortHeatmap data={data?.cohortRetention || []} />
          <GlobalMap data={data?.globalDownloads || []} />
        </div>
      </main>
    </div>
  );
};

export default Index;
