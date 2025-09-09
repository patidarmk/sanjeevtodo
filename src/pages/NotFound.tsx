import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

const NotFound = () => {
  const { location } = useRouterState();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex items-center justify-center text-center px-4" style={{ minHeight: 'calc(100vh - 15rem)' }}>
      <div>
        <h1 className="text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">404</h1>
        <p className="mt-4 text-2xl font-semibold text-foreground">Page Not Found</p>
        <p className="mt-2 text-muted-foreground">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <a href="/" className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
          Go back home
        </a>
      </div>
    </div>
  );
};

export default NotFound;