-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enum for priority levels
CREATE TYPE priority_level AS ENUM ('low', 'medium', 'high', 'critical');

-- Create games table
CREATE TABLE public.games (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  icon_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create metrics table for key performance indicators
CREATE TABLE public.metrics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  game_id UUID REFERENCES public.games(id) ON DELETE CASCADE,
  metric_date DATE NOT NULL DEFAULT CURRENT_DATE,
  total_downloads BIGINT DEFAULT 0,
  daily_active_users BIGINT DEFAULT 0,
  day1_retention_rate NUMERIC(5,2) DEFAULT 0,
  average_revenue_per_user NUMERIC(10,2) DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(game_id, metric_date)
);

-- Create downloads trend table
CREATE TABLE public.downloads_trend (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  game_id UUID REFERENCES public.games(id) ON DELETE CASCADE,
  trend_date DATE NOT NULL,
  downloads BIGINT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(game_id, trend_date)
);

-- Create DAU trend table
CREATE TABLE public.dau_trend (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  game_id UUID REFERENCES public.games(id) ON DELETE CASCADE,
  trend_date DATE NOT NULL,
  active_users BIGINT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(game_id, trend_date)
);

-- Create download sources table
CREATE TABLE public.download_sources (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  game_id UUID REFERENCES public.games(id) ON DELETE CASCADE,
  source_name TEXT NOT NULL,
  download_count BIGINT DEFAULT 0,
  percentage NUMERIC(5,2) DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(game_id, source_name)
);

-- Create funnel stages table
CREATE TABLE public.funnel_stages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  game_id UUID REFERENCES public.games(id) ON DELETE CASCADE,
  stage_name TEXT NOT NULL,
  stage_order INTEGER NOT NULL,
  user_count BIGINT DEFAULT 0,
  conversion_rate NUMERIC(5,2) DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(game_id, stage_name)
);

-- Create cohort retention table
CREATE TABLE public.cohort_retention (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  game_id UUID REFERENCES public.games(id) ON DELETE CASCADE,
  cohort_month TEXT NOT NULL,
  day_0 NUMERIC(5,2) DEFAULT 100,
  day_1 NUMERIC(5,2) DEFAULT 0,
  day_3 NUMERIC(5,2) DEFAULT 0,
  day_7 NUMERIC(5,2) DEFAULT 0,
  day_14 NUMERIC(5,2) DEFAULT 0,
  day_30 NUMERIC(5,2) DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(game_id, cohort_month)
);

-- Create global downloads table
CREATE TABLE public.global_downloads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  game_id UUID REFERENCES public.games(id) ON DELETE CASCADE,
  country_code TEXT NOT NULL,
  country_name TEXT NOT NULL,
  download_count BIGINT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(game_id, country_code)
);

-- Create anomaly alerts table
CREATE TABLE public.anomaly_alerts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  game_id UUID REFERENCES public.games(id) ON DELETE CASCADE,
  alert_type TEXT NOT NULL,
  message TEXT NOT NULL,
  severity priority_level DEFAULT 'medium',
  is_dismissed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.games ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.downloads_trend ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dau_trend ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.download_sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.funnel_stages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cohort_retention ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.global_downloads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.anomaly_alerts ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (modify based on your auth requirements)
CREATE POLICY "Allow public read access to games" ON public.games FOR SELECT USING (true);
CREATE POLICY "Allow public read access to metrics" ON public.metrics FOR SELECT USING (true);
CREATE POLICY "Allow public read access to downloads_trend" ON public.downloads_trend FOR SELECT USING (true);
CREATE POLICY "Allow public read access to dau_trend" ON public.dau_trend FOR SELECT USING (true);
CREATE POLICY "Allow public read access to download_sources" ON public.download_sources FOR SELECT USING (true);
CREATE POLICY "Allow public read access to funnel_stages" ON public.funnel_stages FOR SELECT USING (true);
CREATE POLICY "Allow public read access to cohort_retention" ON public.cohort_retention FOR SELECT USING (true);
CREATE POLICY "Allow public read access to global_downloads" ON public.global_downloads FOR SELECT USING (true);
CREATE POLICY "Allow public read access to anomaly_alerts" ON public.anomaly_alerts FOR SELECT USING (true);

-- Insert sample game data
INSERT INTO public.games (name, icon_url) VALUES 
  ('Cyber Warriors', '/placeholder.svg'),
  ('Space Quest', '/placeholder.svg'),
  ('Dragon Legends', '/placeholder.svg');

-- Get the first game ID for sample data
DO $$
DECLARE
  game_id_var UUID;
BEGIN
  SELECT id INTO game_id_var FROM public.games LIMIT 1;

  -- Insert sample metrics
  INSERT INTO public.metrics (game_id, total_downloads, daily_active_users, day1_retention_rate, average_revenue_per_user) VALUES
    (game_id_var, 17873536, 2100560, 50.00, 1.25);

  -- Insert sample download trend data
  INSERT INTO public.downloads_trend (game_id, trend_date, downloads) VALUES
    (game_id_var, CURRENT_DATE - INTERVAL '6 days', 2400000),
    (game_id_var, CURRENT_DATE - INTERVAL '5 days', 2600000),
    (game_id_var, CURRENT_DATE - INTERVAL '4 days', 2350000),
    (game_id_var, CURRENT_DATE - INTERVAL '3 days', 2800000),
    (game_id_var, CURRENT_DATE - INTERVAL '2 days', 2900000),
    (game_id_var, CURRENT_DATE - INTERVAL '1 day', 2750000),
    (game_id_var, CURRENT_DATE, 3100000);

  -- Insert sample DAU trend data
  INSERT INTO public.dau_trend (game_id, trend_date, active_users) VALUES
    (game_id_var, CURRENT_DATE - INTERVAL '6 days', 1900000),
    (game_id_var, CURRENT_DATE - INTERVAL '5 days', 2000000),
    (game_id_var, CURRENT_DATE - INTERVAL '4 days', 1950000),
    (game_id_var, CURRENT_DATE - INTERVAL '3 days', 2100000),
    (game_id_var, CURRENT_DATE - INTERVAL '2 days', 2150000),
    (game_id_var, CURRENT_DATE - INTERVAL '1 day', 2050000),
    (game_id_var, CURRENT_DATE, 2200000);

  -- Insert sample download sources
  INSERT INTO public.download_sources (game_id, source_name, download_count, percentage) VALUES
    (game_id_var, 'Google Play', 7149414, 40.00),
    (game_id_var, 'App Store', 5362060, 30.00),
    (game_id_var, 'Direct', 3574707, 20.00),
    (game_id_var, 'Web', 1787353, 10.00);

  -- Insert sample funnel stages
  INSERT INTO public.funnel_stages (game_id, stage_name, stage_order, user_count, conversion_rate) VALUES
    (game_id_var, 'App Store Visit', 1, 5000000, 100.00),
    (game_id_var, 'Download Started', 2, 4000000, 80.00),
    (game_id_var, 'Install Complete', 3, 3200000, 64.00),
    (game_id_var, 'First Launch', 4, 2560000, 51.20),
    (game_id_var, 'Registration', 5, 1280000, 25.60);

  -- Insert sample cohort retention
  INSERT INTO public.cohort_retention (game_id, cohort_month, day_0, day_1, day_3, day_7, day_14, day_30) VALUES
    (game_id_var, 'Jan 2025', 100, 50, 35, 25, 18, 12),
    (game_id_var, 'Feb 2025', 100, 52, 38, 28, 20, 14),
    (game_id_var, 'Mar 2025', 100, 48, 33, 23, 16, 10),
    (game_id_var, 'Apr 2025', 100, 55, 40, 30, 22, 15);

  -- Insert sample global downloads
  INSERT INTO public.global_downloads (game_id, country_code, country_name, download_count) VALUES
    (game_id_var, 'US', 'United States', 5000000),
    (game_id_var, 'CN', 'China', 3500000),
    (game_id_var, 'IN', 'India', 2500000),
    (game_id_var, 'BR', 'Brazil', 1800000),
    (game_id_var, 'JP', 'Japan', 1500000);

  -- Insert sample anomaly alerts
  INSERT INTO public.anomaly_alerts (game_id, alert_type, message, severity) VALUES
    (game_id_var, 'spike', 'Unusual spike in downloads detected in Asia Pacific region', 'high');
END $$;