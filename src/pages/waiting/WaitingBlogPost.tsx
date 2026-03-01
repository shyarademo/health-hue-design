import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, User } from "lucide-react";
import WaitingLayout from "@/components/waiting/WaitingLayout";
import { blogs } from "@/data/blogs";

const WaitingBlogPost = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <WaitingLayout>
        <div className="py-16 text-center">
          <h1 className="text-xl font-bold text-foreground">Article not found</h1>
          <Link to="/waiting/blogs" className="text-primary mt-4 inline-block text-sm">← Back to blogs</Link>
        </div>
      </WaitingLayout>
    );
  }

  // Simple markdown-like rendering: headings, lists, bold, tables
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let inList = false;
    let inTable = false;
    let tableRows: string[][] = [];

    const flushTable = () => {
      if (tableRows.length > 1) {
        elements.push(
          <div key={`table-${elements.length}`} className="overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  {tableRows[0].map((cell, ci) => (
                    <th key={ci} className="text-left p-2 border-b border-border font-semibold text-foreground">{cell}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.slice(2).map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) => (
                      <td key={ci} className="p-2 border-b border-border/50 text-muted-foreground">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      tableRows = [];
      inTable = false;
    };

    lines.forEach((line, i) => {
      const trimmed = line.trim();

      // Table
      if (trimmed.startsWith("|")) {
        inTable = true;
        const cells = trimmed.split("|").filter(Boolean).map((c) => c.trim());
        tableRows.push(cells);
        return;
      } else if (inTable) {
        flushTable();
      }

      if (trimmed === "") {
        if (inList) inList = false;
        return;
      }
      if (trimmed.startsWith("## ")) {
        elements.push(<h2 key={i} className="text-lg font-bold text-foreground mt-6 mb-2">{trimmed.replace("## ", "")}</h2>);
      } else if (trimmed.startsWith("### ")) {
        elements.push(<h3 key={i} className="text-base font-semibold text-foreground mt-4 mb-1.5">{trimmed.replace("### ", "")}</h3>);
      } else if (trimmed.startsWith("- ")) {
        inList = true;
        const text = trimmed.replace("- ", "");
        const parts = text.split(/(\*\*.*?\*\*)/g).map((part, pi) =>
          part.startsWith("**") && part.endsWith("**")
            ? <strong key={pi} className="text-foreground">{part.slice(2, -2)}</strong>
            : part
        );
        elements.push(
          <li key={i} className="text-muted-foreground text-sm ml-4 mb-1 list-disc">{parts}</li>
        );
      } else if (/^\d+\./.test(trimmed)) {
        const text = trimmed.replace(/^\d+\.\s*/, "");
        const parts = text.split(/(\*\*.*?\*\*)/g).map((part, pi) =>
          part.startsWith("**") && part.endsWith("**")
            ? <strong key={pi} className="text-foreground">{part.slice(2, -2)}</strong>
            : part
        );
        elements.push(
          <li key={i} className="text-muted-foreground text-sm ml-4 mb-1 list-decimal">{parts}</li>
        );
      } else {
        const parts = trimmed.split(/(\*\*.*?\*\*)/g).map((part, pi) =>
          part.startsWith("**") && part.endsWith("**")
            ? <strong key={pi} className="text-foreground">{part.slice(2, -2)}</strong>
            : part
        );
        elements.push(
          <p key={i} className="text-muted-foreground text-sm leading-relaxed mb-3">{parts}</p>
        );
      }
    });
    if (inTable) flushTable();
    return elements;
  };

  return (
    <WaitingLayout>
      <div className="py-6">
        <Link
          to="/waiting/blogs"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" /> All articles
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">{blog.category}</span>
          <h1 className="text-2xl font-bold text-foreground mt-1 font-display leading-tight">{blog.title}</h1>

          <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><User className="w-3 h-3" /> {blog.author}</span>
            <span>{blog.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {blog.readTime} read</span>
          </div>

          <div className="mt-6 bg-card border border-border/50 rounded-2xl p-5">
            {renderContent(blog.content)}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
            <p className="text-xs text-muted-foreground">
              <strong className="text-foreground">Written by {blog.author}</strong> — {blog.authorRole} at MediCare Clinic. 
              This article is for informational purposes only. Always consult your doctor for personalised medical advice.
            </p>
          </div>
        </motion.article>
      </div>
    </WaitingLayout>
  );
};

export default WaitingBlogPost;
