import { YuqueAxiosClient } from ".";

export interface DocListItem {
  id: number;
  slug: string;
  title: string;
  description: string;
  user_id: number;
  book_id: number;
  format: string;
  public: number;
  status: number;
  likes_count: number;
  comments_count: number;
  content_updated_at: Date;
  created_at: Date;
  updated_at: Date;
  published_at: Date;
  first_published_at: Date;
  draft_version: number;
  last_editor_id: number;
  word_count: number;
  cover: string;
  custom_description: string;
  last_editor: object;
  book: null;
  _serializer: string;
}

export async function getPosts(): Promise<DocListItem[]> {
  const { data } = await YuqueAxiosClient.get(
    `https://www.yuque.com/api/v2/repos/wangshuaiqi/wsq.cool/docs`
  );
  return data.data.filter(item => item.status && item.public);
}
