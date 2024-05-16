export interface IUser {
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

export class CleanUser{
  public clean(): IUser {
    return {
      id: 0,
      name: "",
      slug: "",
      email: "",
      nickname: "",
      bio: "",
      avatar: "",
      permissions_level: 0,
      token: "",
      is_sys_admin: false,
      is_blocked: false,
      blocked_reason: "",
      created_at: "",
      updated_at: "",
    };
  }
}
