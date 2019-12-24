import { YuqueAxiosClient } from ".";

export interface Auth {
  id: number;
  type: string;
  space_id: number;
  account_id: number;
  login: string;
  name: string;
  avatar_url: string;
  large_avatar_url: string;
  medium_avatar_url: string;
  small_avatar_url: string;
  books_count: number;
  public_books_count: number;
  followers_count: number;
  following_count: number;
  public: number;
  description: string;
  created_at: Date;
  updated_at: Date;
  _serializer: string;
}

export async function getAuthInfo(): Promise<Auth> {
  const { data } = await YuqueAxiosClient.get("/api/v2/user");
  return data.data;
}
