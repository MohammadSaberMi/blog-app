import React from 'react';
import PostList from '../_components/postList';
import { Suspense } from 'react';
import Spinner from 'app/components/ui/Spinner';

async function BlogsPage() {
  //await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </div>
  );
}

export default BlogsPage;
