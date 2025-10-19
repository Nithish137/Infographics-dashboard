export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      anomaly_alerts: {
        Row: {
          alert_type: string
          created_at: string | null
          game_id: string | null
          id: string
          is_dismissed: boolean | null
          message: string
          severity: Database["public"]["Enums"]["priority_level"] | null
        }
        Insert: {
          alert_type: string
          created_at?: string | null
          game_id?: string | null
          id?: string
          is_dismissed?: boolean | null
          message: string
          severity?: Database["public"]["Enums"]["priority_level"] | null
        }
        Update: {
          alert_type?: string
          created_at?: string | null
          game_id?: string | null
          id?: string
          is_dismissed?: boolean | null
          message?: string
          severity?: Database["public"]["Enums"]["priority_level"] | null
        }
        Relationships: [
          {
            foreignKeyName: "anomaly_alerts_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      cohort_retention: {
        Row: {
          cohort_month: string
          created_at: string | null
          day_0: number | null
          day_1: number | null
          day_14: number | null
          day_3: number | null
          day_30: number | null
          day_7: number | null
          game_id: string | null
          id: string
        }
        Insert: {
          cohort_month: string
          created_at?: string | null
          day_0?: number | null
          day_1?: number | null
          day_14?: number | null
          day_3?: number | null
          day_30?: number | null
          day_7?: number | null
          game_id?: string | null
          id?: string
        }
        Update: {
          cohort_month?: string
          created_at?: string | null
          day_0?: number | null
          day_1?: number | null
          day_14?: number | null
          day_3?: number | null
          day_30?: number | null
          day_7?: number | null
          game_id?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cohort_retention_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      dau_trend: {
        Row: {
          active_users: number | null
          created_at: string | null
          game_id: string | null
          id: string
          trend_date: string
        }
        Insert: {
          active_users?: number | null
          created_at?: string | null
          game_id?: string | null
          id?: string
          trend_date: string
        }
        Update: {
          active_users?: number | null
          created_at?: string | null
          game_id?: string | null
          id?: string
          trend_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "dau_trend_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      download_sources: {
        Row: {
          created_at: string | null
          download_count: number | null
          game_id: string | null
          id: string
          percentage: number | null
          source_name: string
        }
        Insert: {
          created_at?: string | null
          download_count?: number | null
          game_id?: string | null
          id?: string
          percentage?: number | null
          source_name: string
        }
        Update: {
          created_at?: string | null
          download_count?: number | null
          game_id?: string | null
          id?: string
          percentage?: number | null
          source_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "download_sources_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      downloads_trend: {
        Row: {
          created_at: string | null
          downloads: number | null
          game_id: string | null
          id: string
          trend_date: string
        }
        Insert: {
          created_at?: string | null
          downloads?: number | null
          game_id?: string | null
          id?: string
          trend_date: string
        }
        Update: {
          created_at?: string | null
          downloads?: number | null
          game_id?: string | null
          id?: string
          trend_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "downloads_trend_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      funnel_stages: {
        Row: {
          conversion_rate: number | null
          created_at: string | null
          game_id: string | null
          id: string
          stage_name: string
          stage_order: number
          user_count: number | null
        }
        Insert: {
          conversion_rate?: number | null
          created_at?: string | null
          game_id?: string | null
          id?: string
          stage_name: string
          stage_order: number
          user_count?: number | null
        }
        Update: {
          conversion_rate?: number | null
          created_at?: string | null
          game_id?: string | null
          id?: string
          stage_name?: string
          stage_order?: number
          user_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "funnel_stages_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      games: {
        Row: {
          created_at: string | null
          icon_url: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          icon_url?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          icon_url?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      global_downloads: {
        Row: {
          country_code: string
          country_name: string
          created_at: string | null
          download_count: number | null
          game_id: string | null
          id: string
        }
        Insert: {
          country_code: string
          country_name: string
          created_at?: string | null
          download_count?: number | null
          game_id?: string | null
          id?: string
        }
        Update: {
          country_code?: string
          country_name?: string
          created_at?: string | null
          download_count?: number | null
          game_id?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "global_downloads_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      metrics: {
        Row: {
          average_revenue_per_user: number | null
          created_at: string | null
          daily_active_users: number | null
          day1_retention_rate: number | null
          game_id: string | null
          id: string
          metric_date: string
          total_downloads: number | null
        }
        Insert: {
          average_revenue_per_user?: number | null
          created_at?: string | null
          daily_active_users?: number | null
          day1_retention_rate?: number | null
          game_id?: string | null
          id?: string
          metric_date?: string
          total_downloads?: number | null
        }
        Update: {
          average_revenue_per_user?: number | null
          created_at?: string | null
          daily_active_users?: number | null
          day1_retention_rate?: number | null
          game_id?: string | null
          id?: string
          metric_date?: string
          total_downloads?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "metrics_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      priority_level: "low" | "medium" | "high" | "critical"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      priority_level: ["low", "medium", "high", "critical"],
    },
  },
} as const
