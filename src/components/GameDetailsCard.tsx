import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { format } from "date-fns";

interface GameDetailsCardProps {
  game: {
    id: string;
    name: string;
    icon_url: string | null;
    created_at: string;
  } | null;
  metrics: {
    total_downloads: number;
    daily_active_users: number;
    day1_retention_rate: number;
    average_revenue_per_user: number;
  } | null;
}

export const GameDetailsCard = ({ game, metrics }: GameDetailsCardProps) => {
  if (!game) return null;

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start gap-6">
          {/* Game Icon */}
          <div className="flex-shrink-0">
            {game.icon_url ? (
              <img
                src={game.icon_url}
                alt={`${game.name} icon`}
                className="w-24 h-24 rounded-xl object-cover border-2 border-border shadow-md"
              />
            ) : (
              <div className="w-24 h-24 rounded-xl bg-muted flex items-center justify-center border-2 border-border">
                <span className="text-4xl font-bold text-muted-foreground">
                  {game.name.charAt(0)}
                </span>
              </div>
            )}
          </div>

          {/* Game Info */}
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold mb-2 truncate">{game.name}</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="w-4 h-4" />
              <span>Created {format(new Date(game.created_at), "MMM d, yyyy")}</span>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Downloads</p>
                <p className="text-lg font-semibold">
                  {metrics?.total_downloads?.toLocaleString() || "0"}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">DAU</p>
                <p className="text-lg font-semibold">
                  {metrics?.daily_active_users?.toLocaleString() || "0"}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Retention</p>
                <p className="text-lg font-semibold">
                  {metrics?.day1_retention_rate?.toFixed(1) || "0"}%
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">ARPU</p>
                <p className="text-lg font-semibold">
                  ${metrics?.average_revenue_per_user?.toFixed(2) || "0.00"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
