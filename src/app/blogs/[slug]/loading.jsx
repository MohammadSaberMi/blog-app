import Spinner from 'app/components/ui/Spinner';
import React from 'react';

function Loading() {
  return (
    <div className="grid items-center justify-center gap-x-3">
      <span className="text-secondary-400 text-lg">درحال بارگذاری اطلاعات</span>
      <Spinner />
    </div>
  );
}

export default Loading;
