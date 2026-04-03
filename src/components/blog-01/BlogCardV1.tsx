
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import LinkButton from '../ui/button/LinkButton';

export interface IBlogPost {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  date: string;
  tag: string;
  href: string; // unique link
}

interface BlogCardV1Props {
  blog: IBlogPost;
  className?: string;
}

const BlogCardV1 = ({ blog, className }: BlogCardV1Props) => {
  return (
    <article>
      <div
        className={cn(
          'bg-background-1 dark:bg-background-6 relative scale-100 overflow-hidden rounded-[20px] transition-transform duration-500 hover:scale-[102%] hover:transition-transform hover:duration-500 md:min-h-[552px]',
          className,
        )}
      >
        {/* IMAGE */}
        <figure className="h-[260px] max-w-full overflow-hidden xl:max-w-[409px]">
          <Link href={blog.href}>
            <Image
              src={blog.thumbnail}
              width={409}
              height={250}
              alt={blog.title}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Link>
        </figure>

        {/* CONTENT */}
        <div className="space-y-6 p-6">
          {/* TAG + DATE */}
          <div className="flex items-center gap-2">
            <span className="badge badge-green mr-1">
              <Link href={`/blog-03?category=${blog.tag.toLowerCase()}`}>{blog.tag}</Link>
            </span>
            <span className="h-[6px] w-[5px] rounded-full bg-[#ECE8FF]"> </span>
            <time dateTime={blog.date} className="text-tagline-3 text-secondary/60 dark:text-accent/60 font-normal">
              {blog.date}
            </time>
          </div>

          {/* TITLE & DESCRIPTION */}
          <div>
            <h3 className="sm:text-heading-5 text-heading-6 mb-2 font-normal">
              <Link href={blog.href} aria-label={`Read more about ${blog.title}`}>
                {blog.title}
              </Link>
            </h3>
            <p className="text-tagline-1 text-secondary/60 dark:text-accent/60 line-clamp-2 font-normal">
              {blog.description}
            </p>
          </div>

          {/* BUTTON */}
          <div className="flex justify-start md:block">
            <LinkButton
              href={blog.href}
              className="btn btn-md btn-secondary  w-full sm:w-auto rounded-sm"
              aria-label={`Read full article about ${blog.title}`}
            >
              Read more
            </LinkButton>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCardV1;
