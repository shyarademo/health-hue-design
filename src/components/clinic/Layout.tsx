import { useEffect } from "react";
import { useLocation, useSearchParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingCTA from "./FloatingCTA";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const fromWaiting = searchParams.get("from") === "waiting";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative">
      {fromWaiting && (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground text-center py-2 px-4">
          <Link to="/waiting" className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Waiting Room
          </Link>
        </div>
      )}
      <Navbar offsetTop={fromWaiting} />
      <main>{children}</main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Layout;
