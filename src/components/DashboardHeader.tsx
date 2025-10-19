import { Gamepad2, ChevronDown, Share2, Expand, Settings, User, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DashboardHeader = () => {
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
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg border border-border cursor-pointer hover:border-primary/40 transition-colors">
            <span className="text-sm text-foreground">Game Selector</span>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>
          
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
      
      {/* Anomaly Alert */}
      <div className="absolute top-20 right-6 bg-destructive/10 border border-destructive/30 rounded-lg px-4 py-2 flex items-center gap-2 animate-fade-in shadow-glow-primary">
        <AlertTriangle className="w-4 h-4 text-destructive" />
        <span className="text-sm text-destructive font-medium">Anomaly Alert: DAU down 39%</span>
      </div>
    </header>
  );
};
