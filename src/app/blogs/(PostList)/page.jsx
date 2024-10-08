import React from 'react';
import PostList from '../_components/postList';
import { Suspense } from 'react';
import Spinner from 'app/components/ui/Spinner';

//export const revalidate = 0;
export const experimental_ppr = true;
async function BlogsPage() {
  //await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
      <div>
        دستور export const expermental_ppr = true; احتمالاً مربوط به یک ویژگی
        آزمایشی در Next.js است. با این حال، در کد بالا، expermental_ppr (که
        احتمالاً باید experimental_ppr باشد) به عنوان یک متغیر صادر می‌شود. این
        متغیر ممکن است برای فعال‌سازی برخی قابلیت‌های آزمایشی یا ویژگی‌های
        پیش‌نمایش استفاده شود. چند نکته: تایپ خطا؟: احتمالاً منظور شما
        experimental_ppr بوده است که به ویژگی‌های آزمایشی یا "Preview Mode"
        مربوط می‌شود. اگر ppr مخفف ویژگی خاصی باشد، باید در مستندات بررسی شود.
        استفاده از ویژگی‌های آزمایشی: معمولاً در فایل‌های تنظیماتی مانند
        next.config.js ویژگی‌های آزمایشی به این شکل اضافه می‌شوند:
      </div>
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </div>
  );
}

export default BlogsPage;
