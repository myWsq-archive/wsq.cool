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

export interface SearchDocItem {
  id: string;
  type: string;
  abstract: string;
  title: string;
  slug: string;
  url: string;
  book_name?: string;
  group_name?: string;
}

export interface DocDetail {
  id: number;
  space_id: number;
  type: string;
  format: string;
  title: string;
  slug: string;
  public: number;
  status: number;
  read_status: number;
  created_at: Date;
  content_updated_at: Date;
  published_at: Date;
  first_published_at: Date;
  sourcecode: string;
  last_editor: null;
  _serializer: string;
}

export async function getPosts(): Promise<DocListItem[]> {
  const { data } = await YuqueAxiosClient.get(
    "https://yuque.com/api/v2/repos/wangshuaiqi/wsq.cool/docs"
  );
  return data.data.filter(item => item.status && item.public);
}

export async function searchDocs(q: string): Promise<SearchDocItem[]> {
  const { data } = await YuqueAxiosClient.get("/api/zsearch", {
    params: {
      p: 1,
      q,
      scope: `282173/wsq.cool`,
      type: "doc"
    }
  });
  return data.data.hits;
}

export async function getDocDetail(
  slug: string,
  bookId: number,
  mode: string = "markdown"
): Promise<DocDetail> {
  const { data } = await YuqueAxiosClient.get(
    `https://www.yuque.com/api/docs/${slug}?book_id=${bookId}&mode=${mode}`
  );
  return data.data;
}
