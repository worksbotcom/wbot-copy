import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import FeaturedBlogSwiper from './FeaturedBlogSwiper';

const FeaturedBlog = () => {
  // Fetch featured blogs from markdown files (server-side)
 
  

  return (
    <section className="pt-7 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-32 pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="main-container">
        <div className="space-y-10 md:space-y-[70px]">
          <RevealAnimation delay={0.2}>
            <h2 className="max-w-[700px] text-center mx-auto"> <span className="text-primary-600">Worksbot</span> Blogs</h2>
          </RevealAnimation>
          <FeaturedBlogSwiper />
        </div>
      </div>
    </section>
  );
};

FeaturedBlog.displayName = 'FeaturedBlog';
export default FeaturedBlog;
