'use client';
//import { ArrowRightIcon } from '@heroicons/react/24/outline';
//import useMoveBack from 'hooks/useMoveBack';
import Link from 'next/link';
function NotFound() {
  //  const moveBack = useMoveBack();
  return (
    <div className="h-screen">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-10">
          <div>
            <h1 className="text-xl font-bold text-secondary-700 mb-8">
              پستی با این مشخصات پیدا نشد
            </h1>
            <Link href="/blogs" className="text-secondary-600">
              رفتن به صفحه پست ها؟
            </Link>
            {/*<button
              onClick={moveBack}
              className="flex items-center gap-x-2 text-secondary-500"
            >
              <ArrowRightIcon className="w-6 h-6 text-primary-900" />
              <span> برگشت</span>
            </button>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
