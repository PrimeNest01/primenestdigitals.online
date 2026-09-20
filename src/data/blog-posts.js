// ============================================================
// PrimeNest Digitals — Blog Posts Data
// Used by: blog-post.astro (dynamic route)
// ============================================================
// NOTE: The full blog post content lives in /src/content/blog/*.mdx
// This file holds the metadata for the blog index page + related-posts logic.

export const blogPosts = [
  {
    slug: 'why-your-facebook-ads-are-not-generating-leads',
    title: 'Why Your Facebook Ads Are Running But Your Leads Are Not Coming',
    excerpt: 'If your ads are getting clicks but no leads, the problem isn\'t the ad — it\'s the post-click experience. Here\'s how to diagnose where the funnel is leaking and what to fix first.',
    category: 'Meta Ads',
    author: 'Hazeem Garuba',
    authorInitials: 'HG',
    publishedAt: '2026-09-19',
    readingTime: '12 min read',
    featured: true,
  },
  {
    slug: 'google-ads-construction-company-guide',
    title: 'How to Get Google Ads Working Without Wasting Your Budget',
    excerpt: 'Most construction companies waste 40% of their Google Ads spend on the wrong intent. Here\'s how to find it and fix it.',
    category: 'Google Ads',
    author: 'Hazeem Garuba',
    authorInitials: 'HG',
    publishedAt: '2026-09-15',
    readingTime: '10 min read',
    featured: false,
  },
  {
    slug: 'google-reviews-guide-contractors',
    title: 'Google Reviews Guide for Contractors',
    excerpt: 'How to ask for, get, and leverage Google reviews as a contractor. The numbers that matter and the cadence that works.',
    category: 'Reputation',
    author: 'Hazeem Garuba',
    authorInitials: 'HG',
    publishedAt: '2026-09-08',
    readingTime: '8 min read',
    featured: false,
  },
  {
    slug: 'construction-marketing-mistakes',
    title: 'Construction Marketing Mistakes That Cost You Jobs',
    excerpt: 'The five most common marketing mistakes construction companies make — and the order to fix them in.',
    category: 'Strategy',
    author: 'Hazeem Garuba',
    authorInitials: 'HG',
    publishedAt: '2026-08-25',
    readingTime: '12 min read',
    featured: false,
  },
  {
    slug: 'why-construction-companies-rely-on-referrals',
    title: 'Why Construction Companies Rely on Referrals (And How to Keep It)',
    excerpt: 'Referrals are the strongest channel in construction. Here\'s how to engineer a referral machine that doesn\'t depend on luck.',
    category: 'Strategy',
    author: 'Hazeem Garuba',
    authorInitials: 'HG',
    publishedAt: '2026-08-15',
    readingTime: '9 min read',
    featured: false,
  },
  {
    slug: 'roofing-company-sales-funnel',
    title: 'Roofing Company Sales Funnel — A Complete Build',
    excerpt: 'Step-by-step breakdown of the sales funnel we built for a Victoria, BC roofing company — from ad click to closed contract.',
    category: 'Funnels',
    author: 'Hazeem Garuba',
    authorInitials: 'HG',
    publishedAt: '2026-08-05',
    readingTime: '15 min read',
    featured: false,
  },
  {
    slug: 'how-to-stop-losing-clients-to-competitors-with-worse-products',
    title: 'How to Stop Losing Clients to Competitors With Worse Products',
    excerpt: 'If you\'re losing deals to competitors who have a worse product, the problem is positioning and trust. Here\'s the fix.',
    category: 'Strategy',
    author: 'Hazeem Garuba',
    authorInitials: 'HG',
    publishedAt: '2026-07-22',
    readingTime: '11 min read',
    featured: false,
  },
  {
    slug: 'instagram-lead-generation-construction',
    title: 'Instagram Lead Generation for Construction Companies',
    excerpt: 'How to use Instagram to generate actual leads — not just likes. The content cadence, the CTA structure, the conversion path.',
    category: 'Social Media',
    author: 'Hazeem Garuba',
    authorInitials: 'HG',
    publishedAt: '2026-07-12',
    readingTime: '10 min read',
    featured: false,
  },
  {
    slug: 'klaviyo-ecommerce-email-revenue',
    title: 'Klaviyo Email Revenue for Ecommerce — A Complete Guide',
    excerpt: 'The five flows that drive 80% of email revenue. Setup instructions, copy templates, segmentation logic.',
    category: 'Email',
    author: 'Hazeem Garuba',
    authorInitials: 'HG',
    publishedAt: '2026-06-25',
    readingTime: '14 min read',
    featured: false,
  },
  {
    slug: 'facebook-ads-home-service-businesses',
    title: 'Facebook Ads for Home Service Businesses — A Field Guide',
    excerpt: 'The ad structure, the audience layering, and the creative that actually works for home service businesses on Facebook.',
    category: 'Meta Ads',
    author: 'Hazeem Garuba',
    authorInitials: 'HG',
    publishedAt: '2026-06-15',
    readingTime: '13 min read',
    featured: false,
  },
  {
    slug: 'construction-website-what-you-need',
    title: 'Construction Website — What You Need (and What You Don\'t)',
    excerpt: 'A construction company website doesn\'t need every feature. Here\'s what actually moves the needle and what to skip.',
    category: 'Web Design',
    author: 'Hazeem Garuba',
    authorInitials: 'HG',
    publishedAt: '2026-06-01',
    readingTime: '9 min read',
    featured: false,
  },
  {
    slug: 'local-seo-contractors-2025',
    title: 'Local SEO: How to Dominate Google Search in Your City',
    excerpt: 'The complete local SEO playbook for contractors and service businesses. From Google Business Profile to citation building to reviews.',
    category: 'SEO',
    author: 'Hazeem Garuba',
    authorInitials: 'HG',
    publishedAt: '2026-05-20',
    readingTime: '11 min read',
    featured: false,
  },
];

export function getBlogPost(slug) {
  return blogPosts.find(p => p.slug === slug);
}

export function getRelatedPosts(currentSlug, count = 3) {
  return blogPosts.filter(p => p.slug !== currentSlug).slice(0, count);
}

export function getFeaturedPost() {
  return blogPosts.find(p => p.featured) || blogPosts[0];
}
