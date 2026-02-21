export type SupabaseConfig = {
  url: string;
  anonKey: string;
};

export type UserProfileRow = {
  id: string;
  full_name: string;
  city: string;
  bio: string;
  avatar_url: string | null;
};

export type ProductRow = {
  id: string;
  owner_id: string;
  title: string;
  category: string;
  price_sar: number;
  created_at: string;
};
