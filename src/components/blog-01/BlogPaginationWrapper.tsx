'use client';

import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCardV1 from './BlogCardV1';
import Pagination from '../shared/Pagination';

//  Blog interface with id and href
export interface IBlogPost {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  date: string;
  tag: string;
  href: string; // unique link
}

//  Blog data using id
const blogs: IBlogPost[] = [
  {
    id: '1',
    title: 'Why Autonomous AI Systems Are the Future — And How Worksbot Leads the Revolution',
    description: 'The digital world is accelerating faster than ever. As businesses scale, customer expectations rise',
    thumbnail: '/images/workbot/blogs/Why Autonomous AI Systems Are the Future — And How Worksbot Leads the Revolutions.jpg',
    date: '04 Dec 2025',
    tag: 'Autonomous AI ',
    href: '/blogs/autonomous-ai-systems',
  },
  {
    id: '2',
    title: 'Smarter Workflows with AI: Exploring Worksbot’ s Cutting-Edge Automation Capabilities',
    description: 'The era of static workflows and rule-based automation is over. Modern businesses demand systems that can adapt, learn, and operate with intelligence. ',
    thumbnail: '/images/workbot/blogs/Smarter Workflow with Ai.jpg',
    date: '04 Dec 2025',
    tag: 'smarter workflows with ai',
    href: '/blogs/smarter-workflows-with-ai',
  },
  {
    id: '3',
    title: 'The Rise of AI Co-Workers: How Worksbot Empowers Teams with Intelligent Agents',
    description: 'The workplace is entering a new era—one where humans and AI co-workers collaborate side-by-side. As businesses face increasing complexity',
    thumbnail: '/images/workbot/blogs/The Rise of AI Co-Workers How Worksbot Empowers Teams with Intelligent Agents.jpg',
    date: '04 Dec 2025',
    tag: 'The Rise of AI Co-Workers',
    href: '/blogs/rise-of-ai-co-workers',
  },
  {
    id: '4',
    title: 'Hyper-Automation 2.0: Worksbot’ s Vision for a Fully AI-Driven Enterprise',
    description: 'Businesses around the world are racing toward digital efficiency. But the first wave of automation simple rule-based',
    thumbnail: '/images/workbot/blogs/Hyper-Automation 2.0 Worksbot’s Vision for a Fully AI-Driven Enterprise.jpg',
    date: '04 Dec 2025',
    tag: 'Hyper-Automation ',
    href: '/blogs/hyper-automation',
  },
  {
    id: '5',
    title: 'How Worksbot Leverages Generative AI to Simplify Complex Business Processes',
    description: 'Businesses today operate in an environment defined by rapid change, data overload, and increasing operational ',
    thumbnail: '/images/workbot/blogs/How Worksbot Leverages Generative AI to Simplify Complex Business Processes.jpg',
    date: '04 Dec 2025',
    tag: 'Generative AI ',
    href: '/blogs/ai-to-simplify-complex',
  },
  {
    id: '6',
    title: 'The AI-First Workplace: Trends Worksbot Is Building for the Future of Digital Employees',
    description: 'We are entering a historic transformation in the workplace. For the first time, digital employees powered ',
    thumbnail: '/images/workbot/blogs/The AI-First Workplace_ Trends Worksbot Is Building for the Future of Digital Employees.jpg',
    date: '04 Dec 2025',
    tag: 'AI-First Workplace',
    href: '/blogs/ai-first-workplace',
  },
];

const BlogPaginationWrapper = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = blogs.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 1510, behavior: 'smooth' });
  };

  return (
    <>
      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 md:gap-10">
        {currentBlogs.map((blog, index) => (
          <RevealAnimation key={blog.id} delay={0.3 + index * 0.1}>
            <BlogCardV1 blog={blog} />
          </RevealAnimation>
        ))}
      </div>

      {/*Pagination */}
      {totalPages > 1 && (
        <div className="mt-14">
          <RevealAnimation delay={0.6}>
            <Pagination
              totalItems={blogs.length}
              itemsPerPage={blogsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              className="mt-14"
            />
          </RevealAnimation>
        </div>
      )}
    </>
  );
};

BlogPaginationWrapper.displayName = 'BlogPaginationWrapper';
export default BlogPaginationWrapper;
