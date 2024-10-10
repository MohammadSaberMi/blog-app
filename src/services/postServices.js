import http from './httpServices';

export async function getPostSlug(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post/slug/${slug}`
  );
  const { data } = await res.json();
  const { post } = data || {};
  return post;
}

export async function getPost(queries, options) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post/list?${queries}`,
    options
  );

  const { data } = await res.json();
  const { posts } = data || {};

  return posts;
}

export async function likePostApi(postId) {
  return http.post(`/post/like/${postId}`).then(({ data }) => data.data);
}

export async function bookmarkPostApi(id) {
  return http.post(`/post/bookmark/${id}`).then(({ data }) => data.data);
}
