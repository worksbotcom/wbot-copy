import BlogShowcase from '@/components/blog-01/BlogShowcase';
import FeaturedBlog from '@/components/blog-01/FeaturedBlog';
import CTAV1 from '@/components/shared/cta/CTAV_services';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarThree from '@/components/shared/header/NavbarThree';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Worksbot Blogs | AI, Technology, Cloud, Automation & Digital Innovation Insights",
  description:
    "Explore the latest insights from Worksbot on AI, Cloud, Automation, Software Engineering, Data Analytics, Digital Transformation, DevOps, and emerging technologies. Stay updated with expert articles, trends, and industry best practices.",
  keywords:
    "worksbot blogs, worksbot articles, tech blogs, ai blogs, cloud computing insights, automation trends, rpa blogs, software engineering articles, data engineering blogs, digital transformation insights, devops blogs, tech innovation blog",
};

const BlogPage01 = () => {
  return (
    <>
      <NavbarThree btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white" />
      <main className="bg-background-3 dark:bg-background-7">
        <FeaturedBlog />
        <BlogShowcase />
        <CTAV1
          className="dark:bg-background-5 bg-white"
          badgeClass="!badge-yellow-v2"
          badgeText="Get started"
          ctaHeading="Build a complete website using the assistance"
          description="Start your free trial today and see your ideas come to life easily and creatively."
          ctaBtnText="Get started"
        />
      </main>
      <FooterThree />
    </>
  );
};

export default BlogPage01;
