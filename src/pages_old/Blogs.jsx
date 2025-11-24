import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getPosts, getMediaUrl } from "../lib/strapi";
import { impactStories } from "../constants/Content";
import Colors from "../constants/Color";

export default function Blogs() {
  const [strapiBlogPosts, setStrapiBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getPosts()
      .then((json) => {
        setStrapiBlogPosts(json.data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setStrapiBlogPosts([]);
        setLoading(false);
      });
  }, []);

  // Convert Strapi blog posts to consistent format
  const convertStrapiToPost = (post) => ({
    id: `strapi-${post.documentId}`,
    title: post.title,
    description:
      post.description ||
      "New blog post from our latest insights and field work.",
    image: post.cover ? getMediaUrl(post.cover) : "/placeholder-image.jpg",
    isStrapiBlog: true,
    publishedAt: post.publishedAt,
    slug: post.slug || post.documentId, // Use custom slug field, fallback to documentId
    documentId: post.documentId,
    category: post.category,
    tags: post.tags,
    author: post.author,
  });

  // Convert static impact stories to blog format
  const convertStaticToPost = (story) => ({
    id: story.id,
    title: story.title,
    description: story.description,
    image: story.image,
    isStrapiBlog: false,
    publishedAt: null,
    designed: story.designed,
  });

  // Combine and sort all posts
  const allPosts = [
    ...strapiBlogPosts.map(convertStrapiToPost),
    ...impactStories.map(convertStaticToPost),
  ].sort((a, b) => {
    // Sort by published date (Strapi posts first, then static posts)
    if (a.publishedAt && b.publishedAt) {
      return new Date(b.publishedAt) - new Date(a.publishedAt);
    }
    if (a.publishedAt && !b.publishedAt) return -1;
    if (!a.publishedAt && b.publishedAt) return 1;
    return 0;
  });

  // Show only first 8 unless "Expand All" is clicked
  const visiblePosts = expanded ? allPosts : allPosts.slice(0, 8);

  // Helper function to check if a post is new (within last 7 days)
  const isNewPost = (publishedAt) => {
    if (!publishedAt) return false;
    const postDate = new Date(publishedAt);
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return postDate > sevenDaysAgo;
  };

  const handlePostClick = (post) => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      if (post.isStrapiBlog) {
        navigate(`/blogs/${post.slug}`); // Use custom slug for URL-friendly routes
      } else {
        navigate(post.designed ? `/impact-story/${post.id}` : "/comingblog");
      }
    }, 100);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg" style={{ color: Colors.Primary_font }}>
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 text-center bg-transparent py-20">
      {/* Title with fade-in animation */}
      <h3
        className="text-[50px] md:text-[40px] sm:text-[60px] font-normal text-center mb-6"
        style={{ color: Colors.Primary_font }}
      >
        Blog & Impact Stories
      </h3>
      <motion.p
        className="text-gray-600 mb-12 text-[16px] max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Stay updated with our latest insights, stories, and real-world impact
        from the field.
      </motion.p>

      {/* Stats */}
      {allPosts.length > 0 && (
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500">
            {strapiBlogPosts.length} blog post
            {strapiBlogPosts.length !== 1 ? "s" : ""} • {impactStories.length}{" "}
            impact stories • {allPosts.length} total
          </p>
        </div>
      )}

      {/* Grid layout */}
      {allPosts && allPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {visiblePosts.map((post, index) => {
            const isNew = post.isStrapiBlog && isNewPost(post.publishedAt);
            return (
              <motion.div
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                onClick={() => handlePostClick(post)}
              >
                {/* Badges */}
                <div className="absolute top-3 left-3 z-10 flex gap-2">
                  {post.isStrapiBlog && (
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      BLOG
                    </span>
                  )}
                  {!post.isStrapiBlog && (
                    <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      STORY
                    </span>
                  )}
                  {isNew && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      NEW
                    </span>
                  )}
                </div>

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = "/placeholder-image.jpg";
                      e.target.onerror = null;
                    }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3
                    className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300"
                    style={{ color: Colors.Primary_font }}
                    title={post.title}
                  >
                    {post.title}
                  </h3>

                  <p
                    className="text-gray-600 text-sm mb-3 line-clamp-3"
                    title={post.description}
                  >
                    {post.description}
                  </p>

                  {/* Metadata */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex flex-col">
                      {post.publishedAt && (
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </span>
                      )}
                      {post.author && (
                        <span className="mt-1">by {post.author.name}</span>
                      )}
                    </div>

                    {/* Category */}
                    {post.category && (
                      <span className="px-2 py-1 bg-gray-100 rounded-full">
                        {post.category.name}
                      </span>
                    )}
                  </div>

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag.id}
                          className="px-2 py-1 text-xs border rounded-full"
                          style={{
                            color: Colors.Primary_font,
                            borderColor: Colors.Primary_font,
                          }}
                        >
                          {tag.name}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs text-gray-500">
                          +{post.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500 text-lg">
          No blog posts or stories available.
        </p>
      )}

      {/* Expand/Collapse Button */}
      {allPosts.length > 8 && (
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-8 py-3 text-lg font-semibold rounded-lg border-2 transition-all duration-300 hover:shadow-lg"
            style={{
              backgroundColor: "transparent",
              color: Colors.Primary_font,
              borderColor: Colors.Primary_font,
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = Colors.Primary_font;
              e.target.style.color = Colors.Font_4;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = Colors.Primary_font;
            }}
          >
            {expanded ? "Show Less" : `Show All (${allPosts.length})`}
          </button>
        </motion.div>
      )}
    </div>
  );
}
