import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import WaitingLayout from "@/components/waiting/WaitingLayout";
import { blogs } from "@/data/blogs";

const WaitingBlogs = () => (
  <WaitingLayout>
    <div className="py-8">
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold text-foreground font-display">Health Blogs</h1>
        <p className="text-muted-foreground text-sm mt-1">Articles written by our doctors, for you</p>
      </motion.div>

      <div className="flex flex-col gap-3">
        {blogs.map((blog, i) => (
          <motion.div
            key={blog.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <Link
              to={`/waiting/blog/${blog.slug}`}
              className="block bg-card border border-border/50 rounded-2xl p-4 hover:shadow-md hover:border-primary/20 transition-all group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">{blog.category}</span>
                  <h3 className="font-semibold text-foreground mt-1 text-sm leading-snug">{blog.title}</h3>
                  <p className="text-muted-foreground text-xs mt-1.5 line-clamp-2">{blog.excerpt}</p>
                  <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground/80">{blog.author}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {blog.readTime}</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0 mt-1 transition-colors" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </WaitingLayout>
);

export default WaitingBlogs;
