import {
  createRouter,
  RouterProvider,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";

import { Layout } from "@/components/layout/Layout";
import { Index } from "@/pages/Index";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const rootRoute = createRootRoute({
  component: Layout,
  notFoundComponent: NotFound,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, contactRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;