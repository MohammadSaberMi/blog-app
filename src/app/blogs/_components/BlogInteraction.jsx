'use client';
import { bookmarkPostApi, likePostApi } from '@/services/postServices';
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import {
  HeartIcon as SolidHearIcon,
  BookmarkIcon as SolideBookmarkIcon,
} from '@heroicons/react/24/solid';
import ButtonIcon from 'app/components/ui/ButtonIcon';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { toPersianDigits } from 'utils/numberFormatter';

function BlogInteraction({ post }) {
  //console.log(post._id);
  const router = useRouter();

  const likeHandler = async (postId) => {
    try {
      const { message } = await likePostApi(postId);
      console.log(postId);
      toast.success(message);
      router.refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const bookmarkHandler = async (postId) => {
    try {
      const { message } = await bookmarkPostApi(postId);
      console.log(postId);
      toast.success(message);
      router.refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon variant="secondary">
        <ChatBubbleOvalLeftEllipsisIcon />
        <span>{toPersianDigits(post.commentsCount)}</span>
      </ButtonIcon>
      <ButtonIcon
        variant="red"
        key={post._id}
        onClick={() => likeHandler(post._id)}
      >
        {post.isLiked ? <SolidHearIcon /> : <HeartIcon />}
      </ButtonIcon>
      <ButtonIcon variant="primary" onClick={() => bookmarkHandler(post._id)}>
        {post.isBookmarked ? <SolideBookmarkIcon /> : <BookmarkIcon />}
      </ButtonIcon>
    </div>
  );
}

export default BlogInteraction;
