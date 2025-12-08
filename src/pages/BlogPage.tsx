import { Calendar, User, ArrowRight } from 'lucide-react';

export function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Secure Your VPS in 10 Steps',
      excerpt: 'Essential security practices every VPS owner should implement to protect their server from threats and vulnerabilities.',
      date: 'December 1, 2024',
      author: 'PremVPS Team',
      image: 'https://images.unsplash.com/photo-1651955784685-f969100bfc25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzZXJ2ZXIlMjBkYXRhJTIwY2VudGVyfGVufDF8fHx8MTc2NTE5OTk3MXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Security',
    },
    {
      id: 2,
      title: 'Linux vs Windows Hosting: Which to Choose?',
      excerpt: 'A comprehensive comparison of Linux and Windows VPS hosting to help you make the right choice for your project.',
      date: 'November 15, 2024',
      author: 'Artem Kohanevich',
      image: 'https://images.unsplash.com/photo-1489438497675-d1a8d6e0632e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjBjb2Rpbmd8ZW58MXx8fHwxNzY1MTE0MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Guides',
    },
    {
      id: 3,
      title: 'Why VPS Performance Matters for Your Business',
      excerpt: 'Discover how VPS performance impacts user experience, SEO rankings, and ultimately your bottom line.',
      date: 'November 1, 2024',
      author: 'PremVPS Team',
      image: 'https://images.unsplash.com/photo-1762341116197-fb94a4f37173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG9mZmljZXxlbnwxfHx8fDE3NjUxMjQzNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Performance',
    },
    {
      id: 4,
      title: 'Getting Started with Docker on Your VPS',
      excerpt: 'A beginner-friendly guide to deploying containerized applications using Docker on your PremVPS instance.',
      date: 'October 20, 2024',
      author: 'PremVPS Team',
      image: 'https://images.unsplash.com/photo-1662469567531-9ae8356d3788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwdGVhbSUyMHdvcmtpbmd8ZW58MXx8fHwxNzY1MTg1OTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Tutorials',
    },
    {
      id: 5,
      title: 'Understanding NVMe Storage: Speed That Matters',
      excerpt: 'Learn why NVMe SSD storage is a game-changer for VPS performance compared to traditional SATA drives.',
      date: 'October 5, 2024',
      author: 'Artem Kohanevich',
      image: 'https://images.unsplash.com/photo-1651955784685-f969100bfc25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzZXJ2ZXIlMjBkYXRhJTIwY2VudGVyfGVufDF8fHx8MTc2NTE5OTk3MXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Technology',
    },
    {
      id: 6,
      title: 'Migration Guide: Moving Your Site to PremVPS',
      excerpt: 'Step-by-step instructions for migrating your website or application to PremVPS with zero downtime.',
      date: 'September 25, 2024',
      author: 'PremVPS Team',
      image: 'https://images.unsplash.com/photo-1569021998480-a68f22f6ba86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjBsYXB0b3AlMjBjb2ZmZWV8ZW58MXx8fHwxNzY1MTkxNzc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Guides',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
            PremVPS Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            VPS hosting tips, tutorials, and company news. Learn how to optimize your servers, 
            choose the right plan, and get the latest updates from our team.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl overflow-hidden shadow-lg">
            <div className="grid lg:grid-cols-2 gap-8">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mb-4 self-start">
                  Featured
                </div>
                <h2 className="text-3xl text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors self-start">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-12">Latest Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-xl text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-sm">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter for the latest VPS tips, tutorials, and company updates
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-8 text-center">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['All Posts', 'Tutorials', 'Guides', 'Security', 'Performance', 'Technology', 'News'].map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
