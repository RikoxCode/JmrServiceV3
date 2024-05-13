export interface User {
  id: number;
  name: string;
  slug: string;
  email: string;
  nickname: string;
  bio: string;
  avatar: string;
  permissions_level: number;
  token: string;
  is_sys_admin: boolean;
  is_blocked: boolean;
  blocked_reason: string;
  created_at: string;
  updated_at: string;
}
