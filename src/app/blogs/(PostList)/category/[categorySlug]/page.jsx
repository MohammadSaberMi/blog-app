import BlogList from '@/pages/blogs/_components/PostList';
import { getPost } from '@/services/postServices';
import setCookiesOnReq from '@/utils/setCookieOnReq';
import { cookies } from 'next/headers';
import queryString from 'query-string';
import React from 'react';

async function Category({ params, searchParams }) {
  const { categorySlug } = params;

  //const queries = queryString.stringify(searchParams);

  //console.log(categrySlug);
  //  const res = await fetch(
  //    `${process.env.NEXT_PUBLIC_API_URL}/post/list?categorySlug=${categorySlug}&
  //    ${queries}`
  //  );
  //
  //  const { data } = await res.json();
  //  const { posts } = data || {};
  const queries =
    queryString.stringify(searchParams) + '&' + `categorySlug=${categorySlug}`;
  console.log(queries);
  const cookieStore = cookies();
  const options = setCookiesOnReq(cookieStore);
  const posts = await getPost(queries, options);

  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-lg text-secondary-600">
          پستی در این دسته بندی پیدا نشد{' '}
        </p>
      ) : (
        <BlogList posts={posts} />
      )}
    </div>
  );
}

export default Category;
