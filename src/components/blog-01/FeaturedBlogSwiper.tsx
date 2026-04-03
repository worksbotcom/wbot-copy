'use client';

import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import RevealAnimation from '../animation/RevealAnimation';

// ✅ Featured blogs with unique link for each
const featuredBlogs = [
  {
    id: '1',
    title: 'The Future of Work Automation: How Worksbot Is Redefining AI-Powered Productivity',
    description:
      "The rapid evolution of artificial intelligence is reshaping industries at a pace we could not have imagined a decade ago. Automation no longer refers to simple task scheduling or rule-based workflows—it's about intelligent systems capable of thinking, learning, and adapting.",
    thumbnail: '/images/workbot/blogs/The Future of Work Automation_ How Worksbot Is Redefining AI-Powered Productivity.jpg',
    slug: 'future-of-work-automation-1',
    tag: 'Autonomous AI',
    publishDate: '04 Dec 2025',
    link: '/blogs/future-of-work-automation',
  },
  {
    id: '2',
    title: 'Next-Gen Machine Learning: 10 Breakthrough Innovations Shaping Worksbot’s Roadmap',
    description:
      "Artificial intelligence is evolving at record speed, pushing companies to adapt to a world where automation is not optional—but essential. ",
    thumbnail: '/images/workbot/blogs/10 Breakthrough Innovations Shaping Worksbot’s Roadmap.jpg',
    slug: 'future-of-work-automation-2',
    tag: 'Next-Gen ML',
    publishDate: '04 Dec 2025',
    link: '/blogs/next-gen-machine-learning',
  },
  {
    id: '3',
    title: 'How Worksbot Uses AI Agents to Transform Business Operations in 2025 and Beyond',
    description:
      "In 2025, automation is no longer about simple process execution—it’s about intelligent systems that operate, reason, and collaborate like human employees. ",
    thumbnail: '/images/workbot/blogs/How Worksbot Uses AI Agents to Transform Business Operations in 2025 and Beyond.jpg',
    slug: 'future-of-work-automation-3',
    tag: 'AI Agents',
    publishDate: '04 Dec 2025',
    link: '/blogs/ai-agents',
  },
  {
    id: '4',
    title: 'From Data to Decisions: The Advanced ML Models Powering Worksbot’s Automation Engine',
    description:
      "Modern enterprises run on data—but simply collecting data isn’t enough. What organizations truly need is intelligent decision-making at scale, and that’s where Worksbot excels.",
    thumbnail: '/images/workbot/blogs/From Data to Decisions_ The Advanced ML Models Powering Worksbot’s Automation Engine.jpg',
    slug: 'future-of-work-automation-4',
    tag: 'ML-Powered Decisions',
    publishDate: '04 Dec 2025',
    link: '/blogs/data-to-decisions-ml',
  },
];

const FeaturedBlogSwiper = () => {
  return (
    <RevealAnimation delay={0.3}>
      <div className="relative">
        <Swiper
          className="swiper blog-article-swiper"
          slidesPerView={1}
          loop={true}
          effect="slide"
          speed={1000}
          spaceBetween={40}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: '.pagination-bullets',
            clickable: true,
            type: 'bullets',
          }}
          scrollbar={false}
        >
          <div className="swiper-wrapper">
            {featuredBlogs.map((blog) => (
              <SwiperSlide key={blog.id} className="swiper-slide">
                <article className="scale-100 hover:scale-[99%] transition-transform duration-500 hover:transition-transform hover:duration-500">
                  
                  {/* IMAGE */}
                  <figure className="w-full max-h-[550px] rounded-t-[20px] overflow-hidden">
                    <Image
                      src={blog.thumbnail}
                      alt={blog.title}
                      width={600}
                      height={550}
                      className="w-full h-full object-cover"
                    />
                  </figure>

                  {/* CONTENT */}
                  <div className="px-4 py-8 md:p-8 space-y-6 bg-background-1 dark:bg-background-6 rounded-b-[20px]">
                    
                    {/* TAG + DATE */}
                    <div className="flex items-center gap-2">
                      <Link href={`/blog-03?category=${blog.tag.toLowerCase()}`}>
                        <span className="badge badge-green mr-1">{blog.tag}</span>
                      </Link>

                      <span className="w-[5px] h-[6px] bg-[#ECE8FF] rounded-full"> </span>

                      <time
                        dateTime={blog.publishDate}
                        className="text-tagline-3 font-normal text-secondary/60 dark:text-accent/60"
                      >
                        {blog.publishDate}
                      </time>
                    </div>

                    {/* TITLE & DESCRIPTION */}
                    <div>
                      <h3 className="font-normal sm:text-heading-5 text-tagline-1 mb-2">
                        <Link href={blog.link} aria-label={`Read full article about ${blog.title}`}>
                          {blog.title}
                        </Link>
                      </h3>

                      <p className="sm:text-tagline-1 text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">
                        {blog.description}
                      </p>
                    </div>

                    {/* BUTTON */}
                    <div>
                      <Link
                        href={blog.link} // ✅ Unique link for each button
                        className="btn btn-md btn-secondary   rounded-sm"
                        aria-label={`Read full article about ${blog.title}`}
                      >
                        <span>Read more</span>
                      </Link>
                    </div>

                  </div>
                </article>
              </SwiperSlide>
            ))}
          </div>

          <div className="mt-5 md:mt-14 pagination-bullets"></div>
        </Swiper>
      </div>
    </RevealAnimation>
  );
};

FeaturedBlogSwiper.displayName = 'FeaturedBlogSwiper';
export default FeaturedBlogSwiper;
