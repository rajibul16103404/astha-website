
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-16 pb-16">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-6xl font-bold text-primary mb-6">404</div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link to="/" className="flex items-center">
            <ArrowLeft className="h-5 w-5 mr-2" /> Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
