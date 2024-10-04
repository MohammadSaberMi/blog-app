import Image from 'next/image';
import Link from 'next/link';

export default function CoverImage({ slug, coverImageUrl }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg mb-6">
      <Link href={`/blogs/${slug}`}>
        <Image
          src={coverImageUrl}
          fill
          quality={90}
          className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
        />
      </Link>
    </div>
  );
}
