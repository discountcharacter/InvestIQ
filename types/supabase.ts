export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      videos: {
        Row: {
          id: string
          title: string
          url: string
          thumbnail: string
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          url: string
          thumbnail: string
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          url?: string
          thumbnail?: string
          created_at?: string
        }
      }
      messages: {
        Row: {
          id: string
          content: string
          is_bot: boolean
          created_at: string
        }
        Insert: {
          id?: string
          content: string
          is_bot?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          content?: string
          is_bot?: boolean
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}