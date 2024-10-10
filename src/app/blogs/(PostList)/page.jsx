import React from 'react';
import BlogList from '../_components/PostList';
import { cookies } from 'next/headers';
import setCookiesOnReq from '@/utils/setCookieOnReq';
import { getPost } from '@/services/postServices';
import queryString from 'query-string';

//export const revalidate = 0;
//export const experimental_ppr = true;
async function BlogsPage({ searchParams }) {
  const queries = queryString.stringify(searchParams);
  const cookieStore = cookies();
  const options = setCookiesOnReq(cookieStore);
  const posts = await getPost(queries, options);
  const { search } = searchParams;

  return (
    <div>
      {search ? (
        <p className="mb-4 text-slate-700">
          {posts.length === 0
            ? 'هیچ پستی یافت نشد '
            : `نشان دادن ${posts.length} نتیجه برای`}
          <span className="font-bold"> &quot;{search}&quot;</span>
        </p>
      ) : null}
      {/*<Suspense fallback={<Spinner />}>*/}
      <BlogList posts={posts} />
      {/*</Suspense>*/}
    </div>
  );
}

export default BlogsPage;
