import { Gamepad2, ChevronDown, Share2, Expand, Settings, User, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Game {
  id: string;
  name: string;
  icon_url: string | null;
  created_at: string;
}

interface AnomalyAlert {
  id: string;
  alert_type: string;
  message: string;
  severity: string;
}

interface DashboardHeaderProps {
  games: Game[];
  selectedGame: Game | null;
  onGameChange: (gameId: string) => void;
  anomalyAlerts: AnomalyAlert[];
}

export const DashboardHeader = ({ games, selectedGame, onGameChange, anomalyAlerts }: DashboardHeaderProps) => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50 animate-slide-in">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Gamepad2 className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Game Analytics Dashboard</h1>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Select value={selectedGame?.id} onValueChange={onGameChange}>
            <SelectTrigger className="w-[200px] bg-secondary border-border hover:border-primary/40">
              <SelectValue placeholder="Select game" />
            </SelectTrigger>
            <SelectContent>
              {games.map((game) => (
                <SelectItem key={game.id} value={game.id}>
                  {game.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg border border-border cursor-pointer hover:border-primary/40 transition-colors">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm text-foreground">Real-Time Data</span>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
              <Share2 className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
              <Expand className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Anomaly Alerts */}
      {anomalyAlerts.length > 0 && (
        <div className="absolute top-20 right-6 space-y-2">
          {anomalyAlerts.map((alert) => (
            <div key={alert.id} className="bg-destructive/10 border border-destructive/30 rounded-lg px-4 py-2 flex items-center gap-2 animate-fade-in shadow-glow-primary">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              <span className="text-sm text-destructive font-medium">{alert.message}</span>
            </div>
          ))}
        </div>
      )}
    </header>
  );
};
