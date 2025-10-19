import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useGameAnalytics = (gameId?: string) => {
  return useQuery({
    queryKey: ["game-analytics", gameId],
    queryFn: async () => {
      const { data: games, error: gamesError } = await supabase
        .from("games")
        .select("*")
        .order("created_at", { ascending: false });

      if (gamesError) throw gamesError;

      const selectedGameId = gameId || games?.[0]?.id;

      if (!selectedGameId) {
        return {
          games: [],
          selectedGame: null,
          metrics: null,
          downloadsTrend: [],
          dauTrend: [],
          downloadSources: [],
          funnelStages: [],
          cohortRetention: [],
          globalDownloads: [],
          anomalyAlerts: [],
        };
      }

      const [
        metricsRes,
        downloadsTrendRes,
        dauTrendRes,
        downloadSourcesRes,
        funnelStagesRes,
        cohortRetentionRes,
        globalDownloadsRes,
        anomalyAlertsRes,
      ] = await Promise.all([
        supabase
          .from("metrics")
          .select("*")
          .eq("game_id", selectedGameId)
          .order("metric_date", { ascending: false })
          .limit(1)
          .maybeSingle(),
        supabase
          .from("downloads_trend")
          .select("*")
          .eq("game_id", selectedGameId)
          .order("trend_date", { ascending: true }),
        supabase
          .from("dau_trend")
          .select("*")
          .eq("game_id", selectedGameId)
          .order("trend_date", { ascending: true }),
        supabase
          .from("download_sources")
          .select("*")
          .eq("game_id", selectedGameId)
          .order("download_count", { ascending: false }),
        supabase
          .from("funnel_stages")
          .select("*")
          .eq("game_id", selectedGameId)
          .order("stage_order", { ascending: true }),
        supabase
          .from("cohort_retention")
          .select("*")
          .eq("game_id", selectedGameId)
          .order("cohort_month", { ascending: true }),
        supabase
          .from("global_downloads")
          .select("*")
          .eq("game_id", selectedGameId)
          .order("download_count", { ascending: false }),
        supabase
          .from("anomaly_alerts")
          .select("*")
          .eq("game_id", selectedGameId)
          .eq("is_dismissed", false)
          .order("created_at", { ascending: false }),
      ]);

      return {
        games: games || [],
        selectedGame: games?.find((g) => g.id === selectedGameId) || null,
        metrics: metricsRes.data,
        downloadsTrend: downloadsTrendRes.data || [],
        dauTrend: dauTrendRes.data || [],
        downloadSources: downloadSourcesRes.data || [],
        funnelStages: funnelStagesRes.data || [],
        cohortRetention: cohortRetentionRes.data || [],
        globalDownloads: globalDownloadsRes.data || [],
        anomalyAlerts: anomalyAlertsRes.data || [],
      };
    },
  });
};
